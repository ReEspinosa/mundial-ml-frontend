import React from 'react';
import { LESSONS } from '../data/lessons';
import LessonCard from '../components/LessonCard';

export default function Curso() {
  const ordered = [...LESSONS].sort((a, b) => a.order - b.order);
  return (<div>
    <h1 style={{marginBottom:'0.3rem'}}>Mini-curso de Machine Learning</h1>
    <p style={{color:'var(--text-secondary)',marginBottom:'1.5rem'}}>
      4 lecciones cortas, explicadas con el método Feynman: primero la idea en lenguaje simple, después la fórmula completa, y al final cómo se conecta con los modelos que ya usa este sitio.
    </p>
    <div className="data-note">
      <strong>Cómo estudiar esto:</strong> sigue el orden. Cada lección construye sobre la anterior — la Lección 4, por ejemplo, se entiende mucho mejor después de haber visto la Lección 2.
    </div>
    <div className="matches-grid">
      {ordered.map(l => <LessonCard key={l.id} lesson={l} />)}
    </div>
  </div>);
}
