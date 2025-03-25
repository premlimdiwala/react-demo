import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function Update() {
  let data = useParams();
  const [emp, setEmp] = useState({});
  let navigate = useNavigate();

  let getinput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setEmp({ ...emp, [name]: value });
  };

  useEffect(() => {
    console.log(data);
    let empdata = JSON.parse(localStorage.getItem("emp"));
    setEmp(empdata[data.index]);
  }, [setEmp]);

  let submitdata = (e) => {
    e.preventDefault();
    console.log(emp);
    let empdata = JSON.parse(localStorage.getItem("emp"));
    empdata[data.index] = emp;
    console.log(empdata);
    localStorage.setItem("emp",JSON.stringify(empdata))
    navigate("/showData")
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
                value={emp.name ? emp.name : ""}
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
                value={emp.email ? emp.email : ""}
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
                value={emp.password ? emp.password : ""}
                onChange={(e) => getinput(e)}
              />
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
