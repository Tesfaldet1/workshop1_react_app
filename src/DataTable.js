import { useState } from "react";

const DataTable = () => {
  const [studenList, setStudenList] = useState([
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
  return (
    <table>
      <tr>
        <th>ID </th>
        <th>FirstName</th>
        <th>LastName</th>
        <th>Age</th>
        <th>Birthdate</th>
        <th>Country</th>
        <th>City</th>
      </tr>
      <tbody>
        <tr>
          <td>1</td>
          <td>Tesfaldet</td>
          <td>Weldemicheal</td>
          <td>33</td>
          <td>1989-12-10</td>
          <td>Eritrea</td>
          <td>sernafe</td>
        </tr>
      </tbody>
    </table>
  );
};

export default DataTable;
