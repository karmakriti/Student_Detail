import React, { useState } from 'react';
import Switch from '@mui/material/Switch';
import StudentCard from './StudentCard';
import './App.css';

const students = [
  {
    "id": 1,
    "name": "Alice Johnson",
    "age": 16,
    "grade": "10th",
    "subjects": ["Mathematics", "Science", "English"]
  },
  {
    "id": 2,
    "name": "Bob Smith",
    "age": 17,
    "grade": "11th",
    "subjects": ["History", "Physics", "Chemistry"]
  },
  {
    "id": 3,
    "name": "Charlie Brown",
    "age": 15,
    "grade": "9th",
    "subjects": ["Art", "Music", "Physical Education"]
  },
  {
    "id": 4,
    "name": "David Lee",
    "age": 16,
    "grade": "10th",
    "subjects": ["Computer Science", "Mathematics", "English"]
  },
  {
    "id": 5,
    "name": "Eva Mendes",
    "age": 17,
    "grade": "11th",
    "subjects": ["Biology", "Chemistry", "Physics"]
  },
  {
    "id": 6,
    "name": "Franklin Roosevelt",
    "age": 15,
    "grade": "9th",
    "subjects": ["Social Studies", "English", "Mathematics"]
  },
  {
    "id": 7,
    "name": "Grace Hopper",
    "age": 16,
    "grade": "10th",
    "subjects": ["Computer Science", "Physics", "Chemistry"]
  },
  {
    "id": 8,
    "name": "Harry Potter",
    "age": 17,
    "grade": "11th",
    "subjects": ["Magic", "Herbology", "Defense Against the Dark Arts"]
  },
  {
    "id": 9,
    "name": "Irene Adler",
    "age": 15,
    "grade": "9th",
    "subjects": ["Detective Studies", "Forensics", "Psychology"]
  },
  {
    "id": 10,
    "name": "John Doe",
    "age": 16,
    "grade": "10th",
    "subjects": ["Literature", "History", "Geography"]
  }
];

const StudentTable = () => {

  const [isCardView, setIsCardView] = useState(false);

  const handleSwitchChange = (event) => {
    setIsCardView(event.target.checked);
  };

  return (
    
    <div className="App">
      <h1>Student Details</h1>
      <p>Please switch to display in a card view.</p>
      <Switch checked={isCardView} onChange={handleSwitchChange} />
      {isCardView ? (
        <div className="card-container">
          {students.map((student) => (
            <StudentCard key={student.id} student={student} />
          ))}
           
        </div>
        
      ) : (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Age</th>
              <th>Grade</th>
              <th>Subjects</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student.id}>
                <td>{student.id}</td>
                <td>{student.name}</td>
                <td>{student.age}</td>
                <td>{student.grade}</td>
                <td>{student.subjects.join(', ')}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default StudentTable;
