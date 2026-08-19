// Assignment 1.4: Array of Objects (Student List)
// 📝 Task
// Create a student list with the following features:
// Each student has { id, name, marks }.
// Display the list of students.
// Add a button Increase Marks that increases marks of a specific student by 10.

// import React, { useState } from "react";

// function StudentList() {
//   const [students, setStudents] = useState([
//     { id: 1, name: "Sumit", marks: 75 },
//     { id: 2, name: "Sourabh", marks: 85 },
//     { id: 3, name: "Ankit", marks: 65 },
//   ]);

//   const increaseMarks = (id) => {
//     // TODO: update only that student's marks
//     // Hint: use .map()
//   };

//   return (
//     <div style={{ padding: "20px" }}>
//       <h2>Student List</h2>
//       <ul>
//         {students.map((student) => (
//           <li key={student.id}>
//             {student.name} - {student.marks} marks
//             <button onClick={() => increaseMarks(student.id)}>
//               Increase Marks
//             </button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default StudentList;

import React, { useState } from 'react'

function StudentList() {
  const [students, setStudents] = useState([
    { id: 1, name: 'Sumit', marks: 75 },
    { id: 2, name: 'Sourabh', marks: 85 },
    { id: 3, name: 'Ankit', marks: 65 },
  ])

  const increaseMarks = (id) => {
    // TODO: update only that student's marks
    // Hint: use .map()
    setStudents(
      students.map((item) =>
        item.id === id ? { ...item, marks: item.marks + 10 } : item
      )
    )
  }

  return (
    <div style={{ padding: '20px' }}>
      <h2>Student List</h2>
      <ul>
        {students.map((student) => (
          <li key={student.id}>
            {student.name} - {student.marks} marks
            <button onClick={() => increaseMarks(student.id)}>
              Increase Marks
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default StudentList
