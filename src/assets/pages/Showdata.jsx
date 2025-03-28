import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Showdata() {
  const [allemp, setAllemp] = useState([]);
  const [search, setSearch] = useState(null);
  const [perPage, setPerPage] = useState(2);
  const [currentPage, setCurrentPage] = useState(2);

  useEffect(() => {
    let getdata = () =>{
    const allemp = JSON.parse(localStorage.getItem("emp"));
    const endIndex = currentPage * perPage;
    const firstIndex = endIndex-perPage;
    const newArray = allemp.slice(firstIndex,endIndex);
    setAllemp(newArray ? newArray : []);
  }
  getdata()
    // setAllemp(allemp);
  }, [setAllemp]);

  // const handleDelete = (index) => {
  //   const updatedEmp = allemp.filter((_, i) => i !== index);
  //   setAllemp(updatedEmp);
  //   localStorage.setItem("emp", JSON.stringify(updatedEmp));
  // };

  const handleDelete = (e, index) => {
    e.preventDefault();
    let oldEmp = [...allemp];
    oldEmp.splice(index, 1);
    setAllemp(oldEmp);
    localStorage.setItem("emp", JSON.stringify(oldEmp));
  };

  const sortingByName = (e) => {
    console.log(e.target.value);

    let allData = [...allemp];
    if (e.target.value == "asc") {
      allData.sort((a, b) => a.name.localeCompare(b.name));
    } else {
      allData.sort((a, b) => b.name.localeCompare(a.name));
    }
    setAllemp(allData);
  };
  return (
    <>
      <h1 style={{ textAlign: "center" }}>Show Data</h1>
      <input
        type="text"
        name="search"
        placeholder="Search Your Data..."
        onChange={(e) => setSearch(e.target.value)}
      />
      {/* SORTING */}
      <select name="sortingData" onChange={(e) => sortingByName(e)}>
        <option value="">---Select Sort---</option>
        <option value="asc">Ascending</option>
        <option value="desc">Descending</option>
      </select>
      <table align="center" border={1}>
        <tr>
          <td>Name</td>
          <td>Email</td>
          <td>Password</td>
          <td>Gender</td>
          <td>Hobby</td>
          <td>City</td>
          <td>Action</td>
        </tr>
        {allemp
          .filter((v, i) => {
            if (search === null) {
              return v;
            } else if (v.name.includes(search)) {
              return v;
            } else if (v.email.includes(search)) {
              return v;
            } else if (v.gender.includes(search)) {
              return v;
            }
          })
          .map((v, i) => {
            return (
              <tr>
                <td>{v.name}</td>
                <td>{v.email}</td>
                <td>{v.password}</td>
                <td>{v.gender}</td>
                <td>{v.hobby.toString()}</td>
                <td>{v.city}</td>
                <td>
                  <button onClick={(e) => handleDelete(e, i)}>Del</button>
                  <Link to={"/Updatedata/" + i}>Edit</Link>
                </td>
              </tr>
            );
          })}
      </table>
    </>
  );
}

export default Showdata;
