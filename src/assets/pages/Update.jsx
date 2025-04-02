import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function Update() {
  let data = useParams();
  const [Employee, setEmp] = useState({});
  let navigate = useNavigate();
  const [hobby, setHobby] = useState([]);
  const [city, setCity] = useState([
    "Surat",
    "Navsari",
    "Ahmedabad",
    "Bharuch",
    "Anand",
    "Mumbai",
    "Pune",
  ]);

  let getinput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    let ho = [...hobby];

    if (name === "hobby") {
      if (e.target.checked) {
        ho.push(e.target.value);
      } else {
        ho = ho.filter((v) => v !== e.target.value);
      }
    }
    setHobby(ho);
    setEmp({ ...Employee, [name]: value });
  };

  useEffect(() => {
    let empdata = JSON.parse(localStorage.getItem("emp"));
    setEmp(empdata[data.index]);
    setHobby(empdata[data.index]["hobby"]);
  }, [setEmp]);

  let submitdata = (e) => {
    e.preventDefault();
    let empdata = JSON.parse(localStorage.getItem("emp"));
    empdata[data.index] = Employee;
    localStorage.setItem("emp", JSON.stringify(empdata));
    navigate("/showData");
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: "#f5f5f5",
        padding: "20px",
      }}
    >
      <div
        style={{
          background: "#fff",
          borderRadius: "15px",
          boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)",
          padding: "30px",
          maxWidth: "400px",
          width: "100%",
          transition: "transform 0.3s",
        }}
        onMouseOver={(e) => (e.currentTarget.style.transform = "translateY(-5px)")}
        onMouseOut={(e) => (e.currentTarget.style.transform = "translateY(0)")}
      >
        <h2 style={{ textAlign: "center", color: "#333", marginBottom: "20px" }}>
          📝 Update Employee Info
        </h2>

        <form onSubmit={submitdata}>
          <div style={{ marginBottom: "20px" }}>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={Employee.name || ""}
              onChange={getinput}
              required
              style={{
                width: "100%",
                padding: "15px",
                borderRadius: "10px",
                border: "1px solid #ccc",
                outline: "none",
                transition: "all 0.3s ease",
                backgroundColor: "#fafafa",
                fontSize: "14px",
                boxSizing: "border-box",
              }}
              onFocus={(e) => (e.target.style.boxShadow = "0 0 8px #66a6ff")}
              onBlur={(e) => (e.target.style.boxShadow = "none")}
            />
          </div>

          <div style={{ marginBottom: "20px" }}>
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={Employee.email || ""}
              onChange={getinput}
              required
              style={{
                width: "100%",
                padding: "15px",
                borderRadius: "10px",
                border: "1px solid #ccc",
                outline: "none",
                transition: "all 0.3s ease",
                backgroundColor: "#fafafa",
                fontSize: "14px",
                boxSizing: "border-box",
              }}
              onFocus={(e) => (e.target.style.boxShadow = "0 0 8px #66a6ff")}
              onBlur={(e) => (e.target.style.boxShadow = "none")}
            />
          </div>

          <div style={{ marginBottom: "20px" }}>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={Employee.password || ""}
              onChange={getinput}
              required
              style={{
                width: "100%",
                padding: "15px",
                borderRadius: "10px",
                border: "1px solid #ccc",
                outline: "none",
                transition: "all 0.3s ease",
                backgroundColor: "#fafafa",
                fontSize: "14px",
                boxSizing: "border-box",
              }}
              onFocus={(e) => (e.target.style.boxShadow = "0 0 8px #66a6ff")}
              onBlur={(e) => (e.target.style.boxShadow = "none")}
            />
          </div>

          <div style={{ marginBottom: "20px" }}>
            <label style={{ fontWeight: "bold", display: "block", marginBottom: "5px" }}>
              Gender:
            </label>
            <div style={{ display: "flex", gap: "20px" }}>
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  onChange={getinput}
                  checked={Employee.gender === "male"}
                />
                Male
              </label>
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  onChange={getinput}
                  checked={Employee.gender === "female"}
                />
                Female
              </label>
            </div>
          </div>

          <div style={{ marginBottom: "20px" }}>
            <label style={{ fontWeight: "bold", display: "block", marginBottom: "5px" }}>
              Hobbies:
            </label>
            <div style={{ display: "flex", gap: "15px", flexWrap: "wrap" }}>
              {["music", "travel", "coding"].map((h) => (
                <label key={h} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <input
                    type="checkbox"
                    name="hobby"
                    value={h}
                    onChange={getinput}
                    checked={hobby.includes(h)}
                  />
                  {h.charAt(0).toUpperCase() + h.slice(1)}
                </label>
              ))}
            </div>
          </div>

          <div style={{ marginBottom: "20px" }}>
            <label style={{ fontWeight: "bold", display: "block", marginBottom: "5px" }}>
              City:
            </label>
            <select
              name="city"
              onChange={getinput}
              style={{
                width: "100%",
                padding: "15px",
                borderRadius: "10px",
                border: "1px solid #ccc",
                backgroundColor: "#fafafa",
                outline: "none",
                transition: "all 0.3s ease",
              }}
              onFocus={(e) => (e.target.style.boxShadow = "0 0 8px #66a6ff")}
              onBlur={(e) => (e.target.style.boxShadow = "none")}
            >
              <option value="">Select City</option>
              {city.map((v, i) => (
                <option key={i} value={v} selected={Employee.city === v}>
                  {v}
                </option>
              ))}
            </select>
          </div>

          <button
            type="submit"
            style={{
              background: "#66a6ff",
              color: "#fff",
              padding: "15px",
              borderRadius: "10px",
              border: "none",
              cursor: "pointer",
              width: "100%",
              fontWeight: "bold",
              transition: "0.3s",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
            }}
            onMouseOver={(e) => (e.currentTarget.style.background = "#89f7fe")}
            onMouseOut={(e) => (e.currentTarget.style.background = "#66a6ff")}
          >
            Update Information
          </button>
        </form>
      </div>
    </div>
  );
}

export default Update;
