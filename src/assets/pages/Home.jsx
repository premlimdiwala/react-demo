import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";

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
    const newArray = [];
    let ho = [...hobby];

    if (name === "hobby") {
      console.log(e.target.checked);
      if (e.target.checked) {
        ho.push(e.target.value);
      } else {
        ho = ho.filter((v, i) => v !== e.target.value);
        console.log(ho);
      }
    }
    setHobby(ho);
    console.log(ho);
    if (name == "hobby") {
      setEmp({ ...emp, ["hobby"]: ho });
    } else {
      setEmp({ ...emp, [name]: value });
    }
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
    toast.success("Record Inserted Successfuly!!!");
  };
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Employee Form</h1>

      <form action="" method="post" onSubmit={(e) => submitform(e)}>
        <table align="center" border={1}>
          <tr>
            <td>Enter Name : </td>
            <td>
              <input
                type="text"
                placeholder="Enter Your Name"
                name="name"
                onChange={(e) => getinputvalue(e)}
                value={emp.name ? emp.name : ""}
                required
              />
            </td>
          </tr>
          <tr>
            <td>Enter Email : </td>
            <td>
              <input
                type="email"
                placeholder="Enter Your Email"
                name="email"
                onChange={(e) => getinputvalue(e)}
                value={emp.email ? emp.email : ""}
                required
              />
            </td>
          </tr>
          <tr>
            <td>Enter Password : </td>
            <td>
              <input
                type="password"
                placeholder="Enter Your Password"
                name="password"
                onChange={(e) => getinputvalue(e)}
                value={emp.password ? emp.password : ""}
                required
              />
            </td>
          </tr>
          {/* Gender */}
          <tr>
            <td>Enter Your Gender :</td>
            <td>
              <input
                type="radio"
                name="gender"
                value="male"
                onChange={(e) => getinputvalue(e)}
                checked={emp.gender == "male" ? "checked" : ""}
              />
              Male
              <input
                type="radio"
                name="gender"
                value="female"
                onChange={(e) => getinputvalue(e)}
                checked={emp.gender == "female" ? "checked" : ""}
              />
              Female
            </td>
          </tr>
          {/* Hobby */}
          <tr>
            <td>Hobby :</td>
            <td>
              <input
                type="checkbox"
                name="hobby"
                onChange={(e) => getinputvalue(e)}
                value="music"
                checked={hobby.includes("music") ? "checked" : ""}
              />
              Music
              <input
                type="checkbox"
                name="hobby"
                onChange={(e) => getinputvalue(e)}
                value="travel"
                checked={hobby.includes("travel") ? "checked" : ""}
              />
              Travel
              <input
                type="checkbox"
                name="hobby"
                onChange={(e) => getinputvalue(e)}
                value="coding"
                checked={hobby.includes("coding") ? "checked" : ""}
              />
              Coding
            </td>
          </tr>
          {/* city option */}
          <tr>
            <td>Enter Your City</td>
            <td>
              <select name="city" onChange={(e) => getinputvalue(e)}>
                <option value="">---Select City---</option>
                {city.map((v, i) => {
                  return <option value={v}>{v}</option>;
                })}
              </select>
            </td>
          </tr>
          <tr>
            <td></td>
            <td>
              <button type="submit">Submit</button>
            </td>
          </tr>
        </table>
      </form>
      <ToastContainer />
    </div>
  );
}

export default Home;
