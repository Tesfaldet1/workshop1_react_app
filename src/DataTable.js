import { useState } from "react";

const DataTable = () => {
  const [studentList, setStudentList] = useState([
    {
      id: 1,
      firstName: "Tesfaldet",
      LastName: "Weldemicheal",
      age: "33",
      birthdate: "1989",
      country: "Eritrea",
      city: "Senafe",
    },
    {
      id: 1,
      firstName: "Fiory",
      LastName: "Weldemicheal",
      age: "36",
      birthdate: "1987",
      country: "Eritrea",
      city: "Senafe",
    },
    {
      id: 1,
      firstName: "Shishay",
      LastName: "Weldemicheal",
      age: "31",
      birthdate: "1991",
      country: "Eritrea",
      city: "Senafe",
    },
    {
      id: 1,
      firstName: "Nanu Kahase",
      LastName: "Weldemicheal",
      age: "20",
      birthdate: "2002",
      country: "Eritrea",
      city: "Senafe",
    },
  ]);
  const [student, setStudent] = useState({});
  const [showDetails, setShowDetails] = useState(false);
  const TableHeader = () => {
    return (
      <thead>
        <tr>
          <th>ID</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Age</th>
          <th>Birthdate</th>
          <th>Country</th>
          <th>City</th>
          <th>Action</th>
        </tr>
      </thead>
    );
  };
  const TableAction = ({ id }) => {
    const handleShowDetails = () => {
      const selectedStudent = studentList.find((student) => student.id === id);
      setStudent(selectedStudent);
      setShowDetails(true);
    };
    const handleHideDetails = () => {
      setShowDetails(false);
    };
    return (
      <>
        <button onClick={handleShowDetails}>Details</button>
        {showDetails && (
          <>
            <ShowStudentDetails student={student} />
            <button onClick={handleHideDetails}>Hide</button>
          </>
        )}
      </>
    );
  };
  const ShowStudentDetails = ({ student }) => {
    return (
      <div>
        <p>ID: {student.id}</p>
        <p>First Name: {student.firstName}</p>
        <p>Last Name: {student.lastName}</p>
        <p>Age: {student.age}</p>
        <p>Birthdate: {student.birthdate}</p>
        <p>Country: {student.country}</p>
        <p>City: {student.city}</p>
      </div>
    );
  };

  const TableRow = ({ props }) => {
    return (
      <tr>
        <td>{props.id}</td>
        <td>{props.firstName}</td>
        <td>{props.lastName}</td>
        <td>{props.age}</td>
        <td>{props.birthdate}</td>
        <td>{props.country}</td>
        <td>{props.city}</td>
        <td>
          <TableAction id={props.id} />
        </td>
      </tr>
    );
  };
  return (
    <div className="card">
      <table className="table table-dark table-striped">
        <TableHeader />
        <tbody className="card-body">
          {studentList.map((props) => (
            <TableRow key={props.id} props={props} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
