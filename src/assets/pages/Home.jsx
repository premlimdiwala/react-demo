import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Home() {
  const [emp, setEmp] = useState({});
  const [allemp, setAllemp] = useState([]);
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

  const getinputvalue = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    let ho = [...hobby];

    if (name === "hobby") {
      if (e.target.checked) {
        ho.push(e.target.value);
      } else {
        ho = ho.filter((v) => v !== e.target.value);
      }
    }
    setHobby(ho);
    setEmp({ ...emp, [name]: value, hobby: ho });
  };

  useEffect(() => {
    const savedEmp = JSON.parse(localStorage.getItem("emp"));
    if (savedEmp) {
      setAllemp(savedEmp);
    }
  }, []);

  const submitform = (e) => {
    e.preventDefault();
    const record = [...allemp, emp];
    setAllemp(record);
    localStorage.setItem("emp", JSON.stringify(record));
    setEmp({});
    setHobby([]);
    toast.success("Record Inserted Successfully!!!");
  };

  return (
    <div style={{ maxWidth: "600px", margin: "20px auto", padding: "20px", backgroundColor: "#f9f9f9", borderRadius: "10px", boxShadow: "0 0 10px rgba(0,0,0,0.1)", fontFamily: "'Arial', sans-serif" }}>
      <h1 style={{ textAlign: "center", color: "#333", marginBottom: "20px" }}>Employee Form</h1>

      <form onSubmit={submitform}>
        <table style={{ width: "100%", borderCollapse: "collapse", margin: "0 auto" }}>
          <tbody>
            <tr>
              <td style={{ padding: "10px", border: "1px solid #ddd" }}>Enter Name:</td>
              <td>
                <input
                  type="text"
                  placeholder="Enter Your Name"
                  name="name"
                  onChange={getinputvalue}
                  value={emp.name || ""}
                  required
                  style={{ padding: "8px", width: "100%", borderRadius: "5px", border: "1px solid #ccc" }}
                />
              </td>
            </tr>

            <tr>
              <td style={{ padding: "10px", border: "1px solid #ddd" }}>Enter Email:</td>
              <td>
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  name="email"
                  onChange={getinputvalue}
                  value={emp.email || ""}
                  required
                  style={{ padding: "8px", width: "100%", borderRadius: "5px", border: "1px solid #ccc" }}
                />
              </td>
            </tr>

            <tr>
              <td style={{ padding: "10px", border: "1px solid #ddd" }}>Enter Password:</td>
              <td>
                <input
                  type="password"
                  placeholder="Enter Your Password"
                  name="password"
                  onChange={getinputvalue}
                  value={emp.password || ""}
                  required
                  style={{ padding: "8px", width: "100%", borderRadius: "5px", border: "1px solid #ccc" }}
                />
              </td>
            </tr>

            <tr>
              <td style={{ padding: "10px", border: "1px solid #ddd" }}>Enter Your Gender:</td>
              <td>
                <label style={{ marginRight: "10px" }}>
                  <input
                    type="radio"
                    name="gender"
                    value="male"
                    onChange={getinputvalue}
                    checked={emp.gender === "male"}
                  />
                  Male
                </label>
                <label>
                  <input
                    type="radio"
                    name="gender"
                    value="female"
                    onChange={getinputvalue}
                    checked={emp.gender === "female"}
                  />
                  Female
                </label>
              </td>
            </tr>

            <tr>
              <td style={{ padding: "10px", border: "1px solid #ddd" }}>Hobby:</td>
              <td>
                {["music", "travel", "coding"].map((h) => (
                  <label key={h} style={{ marginRight: "10px" }}>
                    <input
                      type="checkbox"
                      name="hobby"
                      value={h}
                      onChange={getinputvalue}
                      checked={hobby.includes(h)}
                    />
                    {h.charAt(0).toUpperCase() + h.slice(1)}
                  </label>
                ))}
              </td>
            </tr>

            <tr>
              <td style={{ padding: "10px", border: "1px solid #ddd" }}>Enter Your City:</td>
              <td>
                <select
                  name="city"
                  onChange={getinputvalue}
                  style={{ padding: "8px", width: "100%", borderRadius: "5px", border: "1px solid #ccc" }}
                >
                  <option value="">---Select City---</option>
                  {city.map((v) => (
                    <option key={v} value={v}>
                      {v}
                    </option>
                  ))}
                </select>
              </td>
            </tr>

            <tr>
              <td colSpan="2" style={{ textAlign: "center", padding: "15px" }}>
                <button
                  type="submit"
                  style={{
                    backgroundColor: "#4CAF50",
                    color: "white",
                    padding: "10px 20px",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                    fontSize: "16px",
                  }}
                >
                  Submit
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>

      <ToastContainer />
    </div>
  );
}

export default Home;
