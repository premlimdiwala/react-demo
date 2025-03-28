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
      setEmp({ ...Employee, ["hobby"]: ho });
    } else {
      setEmp({ ...Employee, [name]: value });
      // setEmp({ ...emp, [name]: value });
    }
  };

  useEffect(() => {
    console.log(data);
    let empdata = JSON.parse(localStorage.getItem("emp"));
    setEmp(empdata[data.index]);
    setHobby(empdata[data.index]["hobby"]);
  }, [setEmp]);

  let submitdata = (e) => {
    e.preventDefault();
    console.log(Employee);
    let empdata = JSON.parse(localStorage.getItem("emp"));
    empdata[data.index] = Employee;
    console.log(empdata);
    localStorage.setItem("emp", JSON.stringify(empdata));
    navigate("/showData");
  };

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Update Form</h1>

      <form action="" method="post" onSubmit={(e) => submitdata(e)}>
        <table align="center" border={1}>
          <tr>
            <td>Enter Name : </td>
            <td>
              <input
                type="text"
                placeholder="Enter Your Name"
                name="name"
                required
                value={Employee.name ? Employee.name : ""}
                onChange={(e) => getinput(e)}
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
                required
                value={Employee.email ? Employee.email : ""}
                onChange={(e) => getinput(e)}
              />
            </td>
          </tr>
          <tr>
            <td>Enter Password : </td>
            <td>
              <input
                type="password"
                placeholder="Enter Your Email"
                name="password"
                required
                value={Employee.password ? Employee.password : ""}
                onChange={(e) => getinput(e)}
              />
            </td>
          </tr>
          <tr>
            <td>Enter Your Gender :</td>
            <td>
              <input
                type="radio"
                name="gender"
                value="male"
                onChange={(e) => getinput(e)}
                checked={Employee.gender == "male" ? "checked" : ""}
              />
              Male
              <input
                type="radio"
                name="gender"
                value="female"
                onChange={(e) => getinput(e)}
                checked={Employee.gender == "female" ? "checked" : ""}
              />
              Female
            </td>
          </tr>
          {/* hobby edit */}
          <tr>
            <td>Hobby :</td>
            <td>
              <input
                type="checkbox"
                name="hobby"
                onChange={(e) => getinput(e)}
                value="music"
                checked={hobby.includes("music") ? "checked" : ""}
              />
              Music
              <input
                type="checkbox"
                name="hobby"
                onChange={(e) => getinput(e)}
                value="travel"
                checked={hobby.includes("travel") ? "checked" : ""}
              />
              Travel
              <input
                type="checkbox"
                name="hobby"
                onChange={(e) => getinput(e)}
                value="coding"
                checked={hobby.includes("coding") ? "checked" : ""}
              />
              Coding
            </td>
          </tr>
          {/* city update */}
          <tr>
            <td>Enter Your City</td>
            <td>
              <select name="city" onChange={(e) => getinput(e)}>
                <option value="">---Select City---</option>
                {city.map((v, i) => {
                  return <option value={v}
                  selected={Employee.city===v ? "selected" : ""}
                  >{v}</option>;
                })}
              </select>
            </td>
          </tr>
          <tr>
            <td></td>
            <td>
              <button type="submit">Edit</button>
            </td>
          </tr>
        </table>
      </form>
    </div>
  );
}

export default Update;
