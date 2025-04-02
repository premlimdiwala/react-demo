import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Showdata() {
  const [allemp, setAllemp] = useState([]);
  const [search, setSearch] = useState(null);
  const [perPage, setPerPage] = useState(2);
  const [currentPage, setCurrentPage] = useState(2);

  useEffect(() => {
    const getdata = () => {
      const allemp = JSON.parse(localStorage.getItem("emp"));
      const endIndex = currentPage * perPage;
      const firstIndex = endIndex - perPage;
      const newArray = allemp.slice(firstIndex, endIndex);
      setAllemp(newArray ? newArray : []);
    };
    getdata();
  }, [setAllemp]);

  const handleDelete = (e, index) => {
    e.preventDefault();
    let oldEmp = [...allemp];
    oldEmp.splice(index, 1);
    setAllemp(oldEmp);
    localStorage.setItem("emp", JSON.stringify(oldEmp));
  };

  const sortingByName = (e) => {
    let allData = [...allemp];
    if (e.target.value === "asc") {
      allData.sort((a, b) => a.name.localeCompare(b.name));
    } else {
      allData.sort((a, b) => b.name.localeCompare(a.name));
    }
    setAllemp(allData);
  };

  return (
    <div style={{ maxWidth: "900px", margin: "20px auto", padding: "20px", backgroundColor: "#f9f9f9", borderRadius: "10px", boxShadow: "0 0 10px rgba(0,0,0,0.1)", fontFamily: "'Arial', sans-serif" }}>
      <h1 style={{ textAlign: "center", color: "#333", marginBottom: "20px" }}>Show Data</h1>

      <div style={{ display: "flex", justifyContent: "center", gap: "15px", marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="Search Your Data..."
          onChange={(e) => setSearch(e.target.value)}
          style={{ padding: "10px", width: "250px", border: "1px solid #ddd", borderRadius: "5px", outline: "none" }}
        />
        <select onChange={sortingByName} style={{ padding: "10px", border: "1px solid #ddd", borderRadius: "5px", backgroundColor: "#fff" }}>
          <option value="">---Select Sort---</option>
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
      </div>

      <table style={{ width: "100%", borderCollapse: "collapse", margin: "0 auto" }}>
        <thead>
          <tr style={{ backgroundColor: "#4CAF50", color: "white" }}>
            <th style={{ padding: "12px", border: "1px solid #ddd" }}>Name</th>
            <th style={{ padding: "12px", border: "1px solid #ddd" }}>Email</th>
            <th style={{ padding: "12px", border: "1px solid #ddd" }}>Password</th>
            <th style={{ padding: "12px", border: "1px solid #ddd" }}>Gender</th>
            <th style={{ padding: "12px", border: "1px solid #ddd" }}>Hobby</th>
            <th style={{ padding: "12px", border: "1px solid #ddd" }}>City</th>
            <th style={{ padding: "12px", border: "1px solid #ddd" }}>Action</th>
          </tr>
        </thead>
        <tbody>
          {allemp
            .filter((v) =>
              search
                ? v.name.includes(search) ||
                  v.email.includes(search) ||
                  v.gender.includes(search)
                : true
            )
            .map((v, i) => (
              <tr key={i} style={{ backgroundColor: i % 2 === 0 ? "#f2f2f2" : "white", transition: "background 0.3s" }}>
                <td style={{ padding: "12px", border: "1px solid #ddd" }}>{v.name}</td>
                <td style={{ padding: "12px", border: "1px solid #ddd" }}>{v.email}</td>
                <td style={{ padding: "12px", border: "1px solid #ddd" }}>{v.password}</td>
                <td style={{ padding: "12px", border: "1px solid #ddd" }}>{v.gender}</td>
                <td style={{ padding: "12px", border: "1px solid #ddd" }}>{v.hobby.toString()}</td>
                <td style={{ padding: "12px", border: "1px solid #ddd" }}>{v.city}</td>
                <td style={{ padding: "12px", textAlign: "center" }}>
                  <button
                    onClick={(e) => handleDelete(e, i)}
                    style={{ backgroundColor: "#e74c3c", color: "white", border: "none", padding: "8px 12px", borderRadius: "5px", cursor: "pointer", marginRight: "5px" }}
                  >
                    Delete
                  </button>
                  <Link
                    to={`/Updatedata/${i}`}
                    style={{ textDecoration: "none", backgroundColor: "#3498db", color: "white", padding: "8px 12px", borderRadius: "5px" }}
                  >
                    Edit
                  </Link>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default Showdata;
