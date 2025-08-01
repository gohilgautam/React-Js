import { useState } from "react";
import "./App.css";

function App() {
  const [students, setStudents] = useState([
    { rollNo: 1, name: "John Doe", class: "10", section: "A", marks: 85 },
    { rollNo: 2, name: "Jane Smith", class: "9", section: "B", marks: 78 },
    { rollNo: 3, name: "Sam Wilson", class: "8", section: "C", marks: 66 },
    { rollNo: 4, name: "Alice Brown", class: "10", section: "D", marks: 92 },
    { rollNo: 5, name: "Bob Martin", class: "9", section: "A", marks: 74 },
    { rollNo: 6, name: "Sara Lee", class: "8", section: "B", marks: 81 },
    { rollNo: 7, name: "Jim Clark", class: "10", section: "C", marks: 59 },
    { rollNo: 8, name: "Mary Lopez", class: "9", section: "D", marks: 60 },
    { rollNo: 9, name: "Ryan Chen", class: "8", section: "A", marks: 95 },
    { rollNo: 10, name: "Lily Zhu", class: "10", section: "B", marks: 88 },
    { rollNo: 11, name: "Ben Khan", class: "9", section: "C", marks: 73 },
    { rollNo: 12, name: "Eva Patel", class: "8", section: "D", marks: 63 },
    { rollNo: 13, name: "Noah Kim", class: "10", section: "A", marks: 77 },
    { rollNo: 14, name: "Emma Singh", class: "8", section: "B", marks: 86 },
    { rollNo: 15, name: "Liam Allen", class: "8", section: "C", marks: 69 },
    { rollNo: 16, name: "Sophia Park", class: "9", section: "D", marks: 84 },
    { rollNo: 17, name: "Mason Fox", class: "10", section: "A", marks: 91 },
    { rollNo: 18, name: "Olivia Page", class: "9", section: "B", marks: 56 },
    { rollNo: 19, name: "Aiden Ray", class: "8", section: "C", marks: 75 },
    { rollNo: 20, name: "Chloe Roy", class: "9", section: "D", marks: 67 },
    { rollNo: 21, name: "Lucas Jain", class: "10", section: "A", marks: 80 },
    { rollNo: 22, name: "Grace Paul", class: "8", section: "B", marks: 89 },
    { rollNo: 23, name: "Ethan Gill", class: "9", section: "C", marks: 61 },
    { rollNo: 24, name: "Zoe Wong", class: "10", section: "D", marks: 77 },
    { rollNo: 25, name: "Jack Shaw", class: "9", section: "A", marks: 54 },
    { rollNo: 26, name: "Ella Das", class: "8", section: "B", marks: 79 },
    { rollNo: 27, name: "David King", class: "10", section: "C", marks: 84 },
    { rollNo: 28, name: "Mia Costa", class: "9", section: "D", marks: 88 },
    { rollNo: 29, name: "James Lee", class: "8", section: "A", marks: 70 },
    { rollNo: 30, name: "Scarlett Rao", class: "10", section: "B", marks: 90 },
    { rollNo: 31, name: "Henry Cruz", class: "9", section: "C", marks: 58 },
    { rollNo: 32, name: "Lucy Bhat", class: "8", section: "D", marks: 83 },
    { rollNo: 33, name: "Daniel Stone", class: "10", section: "A", marks: 61 },
    { rollNo: 34, name: "Ruby Seth", class: "8", section: "B", marks: 97 },
    { rollNo: 35, name: "Oscar Moon", class: "9", section: "C", marks: 65 },
    { rollNo: 36, name: "Vera Neal", class: "10", section: "D", marks: 72 },
    { rollNo: 37, name: "Leo Roy", class: "8", section: "A", marks: 62 },
    { rollNo: 38, name: "Paige Dale", class: "9", section: "B", marks: 68 },
    { rollNo: 39, name: "Wyatt Owen", class: "10", section: "C", marks: 76 },
    { rollNo: 40, name: "Ivy Long", class: "8", section: "D", marks: 87 },
    { rollNo: 41, name: "Miles Rege", class: "10", section: "A", marks: 93 },
    { rollNo: 42, name: "Nora Frank", class: "9", section: "B", marks: 71 },
    { rollNo: 43, name: "Eli Hill", class: "8", section: "C", marks: 77 },
    { rollNo: 44, name: "Camila Finn", class: "9", section: "D", marks: 82 },
    { rollNo: 45, name: "Jordan Shah", class: "10", section: "A", marks: 65 },
    { rollNo: 46, name: "Hazel Morse", class: "8", section: "B", marks: 80 },
    { rollNo: 47, name: "Caleb Paul", class: "9", section: "C", marks: 73 },
    { rollNo: 48, name: "Layla Peter", class: "10", section: "D", marks: 78 },
    { rollNo: 49, name: "Aaron Grant", class: "8", section: "A", marks: 85 },
    { rollNo: 50, name: "Stella Reddy", class: "9", section: "B", marks: 69 },
  ]);

  return (
    <div className="table-container">
      <h1 className="table-title">Students Data-Table</h1>
      <table
        className="student-table"
        role="grid"
        aria-describedby="table-description"
      >
        <thead>
          <tr>
            <th className="table-header sortable" aria-sort="none">
              Roll No <span className="sort-icon">⇅</span>
            </th>
            <th className="table-header sortable" aria-sort="none">
              Name <span className="sort-icon">⇅</span>
            </th>
            <th className="table-header sortable" aria-sort="none">
              Class <span className="sort-icon">⇅</span>
            </th>
            <th className="table-header sortable" aria-sort="none">
              Section <span className="sort-icon">⇅</span>
            </th>
            <th className="table-header sortable" aria-sort="none">
              Marks <span className="sort-icon">⇅</span>
            </th>
            <th className="table-header">Action</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr key={student.rollNo} className="table-row" tabIndex={-1}>
              <td className="table-cell">{student.rollNo}</td>
              <td className="table-cell">{student.name}</td>
              <td className="table-cell">{student.class}</td>
              <td className="table-cell">{student.section}</td>
              <td className="table-cell">{student.marks}</td>
              <td className="table-cell action-cell">
                <button
                  className="edit-btn"
                  aria-label={`Edit student ${student.name}`}
                  title={`Edit ${student.name}`}
                >
                  ✏️ Edit
                </button>
                <button
                  className="delete-btn"
                  aria-label={`Delete student ${student.name}`}
                  title={`Delete ${student.name}`}
                >
                  🗑️ Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
