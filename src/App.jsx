import { useEffect } from "react";
import { useState } from "react";
import studentService from "./services/student.service";

const App = () => {
  const [student, setStudent] = useState([]);

  useEffect(() => {
    studentService
      .getAll()
      .then((Response) => {
        console.log("printing student data", Response.data);
        setStudent(Response.data);
      })
      .catch((error) => {
        console.log("something went wrong", error);
      });
  }, []);

  return (
    <>
      <h3>All Students</h3>
      <div>
        <table border={1} cellPadding={10}>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Date OF Birth</th>
          </tr>
          {student.map((student) => (
            <tr key={student.id}>
              <td>{student.first_name}</td>
              <td>{student.last_name}</td>
              <td>{student.date_of_birth}</td>
            </tr>
          ))}
        </table>
      </div>
    </>
  );
};

export default App;
