import React from 'react';
import './StudentCard.css';

const StudentCard = ({ student }) => {
  return (
    <div className="card">
          <h2>{student.name}</h2>
          <p>Please switch to display in a grid view.</p>
      <p><strong>Age:</strong> {student.age}</p>
      <p><strong>Grade:</strong> {student.grade}</p>
      <p><strong>Subjects:</strong> {student.subjects.join(', ')}</p>
    </div>
  );
};

export default StudentCard;
