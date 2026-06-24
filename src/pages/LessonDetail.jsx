import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { LESSONS, getLessonById } from '../data/lessons';

function Formula({ text }) {
  return <div className="formula-block">{text}</div>;
}

function Bullets({ items }) {
  return (
    <ul className="lesson-bullets">
      {items.map((b, i) => <li key={i} dangerouslySetInnerHTML={{ __html: b }} />)}
    </ul>
  );
}

function Table({ table }) {
  return (
    <div className="lesson-table-wrap">
      <table className="lesson-table">
        <thead>
          <tr>{table.headers.map((h, i) => <th key={i}>{h}</th>)}</tr>
        </thead>
        <tbody>
          {table.rows.map((row, ri) => (
            <tr key={ri}>{row.map((cell, ci) => <td key={ci} dangerouslySetInnerHTML={{ __html: cell }} />)}</tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function Images({ images }) {
  return (
    <div className="lesson-images">
      {images.map((img, i) => (
        <figure key={i} className="lesson-image-fig">
          <img src={img.src} alt={img.caption || ''} />
          {img.caption && <figcaption>{img.caption}</figcaption>}
        </figure>
      ))}
    </div>
  );
}

function Section({ s }) {
  return (
    <div className="lesson-section">
      <h3>{s.heading}</h3>
      {s.paragraphs?.map((p, i) => <p key={i} dangerouslySetInnerHTML={{ __html: p }} />)}
      {s.table && <Table table={s.table} />}
      {s.images && <Images images={s.images} />}
      {s.quote && <blockquote className="lesson-quote">{s.quote}</blockquote>}
      {s.paragraphsAfterQuote?.map((p, i) => <p key={'aq' + i} dangerouslySetInnerHTML={{ __html: p }} />)}
      {s.formulas?.map((f, i) => <Formula key={'f' + i} text={f} />)}
      {s.paragraphsMid?.map((p, i) => <p key={'m' + i} dangerouslySetInnerHTML={{ __html: p }} />)}
      {s.formulas2?.map((f, i) => <Formula key={'f2' + i} text={f} />)}
      {s.paragraphsMid2?.map((p, i) => <p key={'m2' + i} dangerouslySetInnerHTML={{ __html: p }} />)}
      {s.formulas3?.map((f, i) => <Formula key={'f3' + i} text={f} />)}
      {s.paragraphsMid3?.map((p, i) => <p key={'m3' + i} dangerouslySetInnerHTML={{ __html: p }} />)}
      {s.formulas4?.map((f, i) => <Formula key={'f4' + i} text={f} />)}
      {s.paragraphsMid4?.map((p, i) => <p key={'m4' + i} dangerouslySetInnerHTML={{ __html: p }} />)}
      {s.formulas5?.map((f, i) => <Formula key={'f5' + i} text={f} />)}
      {s.bullets && <Bullets items={s.bullets} />}
      {s.bullets2 && <Bullets items={s.bullets2} />}
      {s.paragraphsEnd?.map((p, i) => <p key={'e' + i} dangerouslySetInnerHTML={{ __html: p }} />)}
    </div>
  );
}

function ResourceCard({ r }) {
  return (
    <div className="card resource-card">
      <div className="resource-topic">{r.topic}</div>
      <div className="video-embed">
        <iframe
          src={`https://www.youtube.com/embed/${r.videoId}`}
          title={r.title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
      <div className="resource-title">{r.title}</div>
      <p className="resource-desc">{r.description}</p>
    </div>
  );
}

export default function LessonDetail() {
  const { lessonId } = useParams();
  const lesson = getLessonById(lessonId);
  if (!lesson) {
    return (
      <div className="card" style={{ textAlign: 'center', padding: '3rem' }}>
        <h2>Lección no encontrada</h2>
        <Link to="/curso" className="btn btn-outline" style={{ marginTop: '1rem' }}>Volver al curso</Link>
      </div>
    );
  }
  const ordered = [...LESSONS].sort((a, b) => a.order - b.order);
  const idx = ordered.findIndex(l => l.id === lesson.id);
  const prev = ordered[idx - 1];
  const next = ordered[idx + 1];

  return (<div>
    <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.4rem' }}>
      Lección {String(lesson.order).padStart(2, '0')} de {ordered.length}
    </div>
    <h1 style={{ marginBottom: '0.3rem' }}>{lesson.title}</h1>
    <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>{lesson.subtitle}</p>

    {lesson.type === 'resources' ? (
      <>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }} dangerouslySetInnerHTML={{ __html: lesson.intro }} />
        <div className="resource-grid">
          {lesson.resources.map(r => <ResourceCard key={r.id} r={r} />)}
        </div>
      </>
    ) : (
      <>
        {lesson.videoId && (
          <div className="video-embed">
            <iframe
              src={`https://www.youtube.com/embed/${lesson.videoId}`}
              title={lesson.videoTitle}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        )}
        {lesson.videoId && <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)', textAlign: 'center', marginBottom: '2rem' }}>{lesson.videoTitle}</p>}

        {lesson.sections.map((s, i) => <Section key={i} s={s} />)}
      </>
    )}

    {lesson.checkYourself && (
      <div className="check-yourself">
        <strong>🧠 Pon a prueba si de verdad lo entendiste (método Feynman):</strong>
        <p>{lesson.checkYourself}</p>
      </div>
    )}

    <div className="lesson-nav">
      {prev ? <Link to={`/curso/${prev.id}`} className="btn btn-outline">← {prev.title}</Link> : <span />}
      {next ? <Link to={`/curso/${next.id}`} className="btn btn-accent">{next.title} →</Link> : <Link to="/curso" className="btn btn-accent">Volver al curso</Link>}
    </div>
  </div>);
}
