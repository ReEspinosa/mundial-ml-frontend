import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function LessonCard({ lesson }) {
  const nav = useNavigate();
  return (
    <div className="card lesson-card" onClick={() => nav(`/curso/${lesson.id}`)}>
      <div className="lesson-card-num">{String(lesson.order).padStart(2, '0')}</div>
      <div className="lesson-card-body">
        <div className="teams">{lesson.title}</div>
        <div className="meta">{lesson.subtitle}</div>
      </div>
    </div>
  );
}
