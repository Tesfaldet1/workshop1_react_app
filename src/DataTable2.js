import { useState } from "react";

const DataTable2 = () => {
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

  const [showDetails, setShowDetails] = useState(false);
  const [student, setStudent] = useState({
    id: 0,
    firstName: "",
    lastName: "",
    age: 0,
    birthDate: "",
    country: "",
    city: "",
  });

  const TableHeader = () => {
    return (
      <thead>
        <tr>
          <th>Id</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Age</th>
          <th>Action</th>
        </tr>
      </thead>
    );
  };

  const TableAction = (props) => {
    // js functions
    const showDataHandler = () => {
      console.log("STUDENT:", student);
      setStudent(props.student);
      setShowDetails(true);
    };

    return (
      <button
        type="button"
        className="btn btn-primary"
        onClick={showDataHandler}
      >
        Details
      </button>
    );
  };

  const TableRow = (props) => {
    if (!props.list && props.list.length == 0) {
      return (
        <tbody>
          <tr>
            <td colSpan="5">Data not Found</td>
          </tr>
        </tbody>
      );
    } else {
      return (
        <tbody>
          {props.list.map((student) => {
            const row = (
              <tr key={student.id}>
                <td>{student.id}</td>
                <td>{student.firstName}</td>
                <td>{student.lastName}</td>
                <td>{student.age}</td>
                <td>
                  <TableAction student={student} />
                </td>
              </tr>
            );
            return row;
          })}
        </tbody>
      );
    }
  };

  const ShowStudentDetails = () => {
    return (
      <>
        {showDetails && (
          <div className="card">
            <div className="card-header bg-info text-white">
              Student Information
            </div>
            <div className="card-body">
              <h5 className="card-title">
                {student.country} {student.city}
              </h5>
              <p className="card-text">Id: {student.id} </p>
              <p className="card-text">
                Name: {student.firstName} {student.lastName}
              </p>
              <p className="card-text">BirthDate: {student.birthDate} </p>
            </div>
            <div className="card-footer bg-dark">
              <button
                type="button"
                className="btn btn-outline-info"
                onClick={() => {
                  setStudent({});
                  setShowDetails(false);
                }}
              >
                Hide
              </button>
            </div>
          </div>
        )}
      </>
    );
  };

  return (
    <>
      <h1> List </h1>
      <table className="table table-striped">
        <TableHeader />
        <TableRow list={studentList} />
      </table>

      <div className="w-50 mx-auto">
        <ShowStudentDetails />
      </div>
    </>
  );
};
export default DataTable2;
