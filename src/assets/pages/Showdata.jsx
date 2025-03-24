import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Showdata() {

  const [allemp,setAllemp] = useState([]);
  useEffect(()=>{
    const allemp = JSON.parse(localStorage.getItem("emp"));
    setAllemp(allemp);
  },[setAllemp])

  const handleDelete = (index) => {
    const updatedEmp = allemp.filter((_, i) => i !== index);
    setAllemp(updatedEmp);
    localStorage.setItem("emp", JSON.stringify(updatedEmp));
  };
  return (
    <>
      <h1 style={{textAlign:"center"}}>
        Show Data
      </h1>
      <table align='center' border={1}>
       <tr>
        <td>Name</td>
        <td>Email</td>
        <td>Password</td>
        <td>Action</td>
       </tr>
       {allemp.map((v,i)=>{
        return(
          <tr>
            <td>{v.name}</td>
            <td>{v.email}</td>
            <td>{v.password}</td>
            <td><button onClick={(e)=>handleDelete(i)}>Del</button>
            <Link to={"/Updatedata/" + i}>Edit</Link>
            </td>
          </tr>
        )
       })}
      </table>
    </>

  )
}

export default Showdata
