import React, { useState } from 'react'

function Home() {
    const [emp,setEmp] = useState({});
    const [allemp,setAllemp] = useState([]);

    const getinputvalue = (e) =>{
        const name = e.target.name;
        const value = e.target.value;
        setEmp({...emp,[name]:value})
    }

    const submitform =(e)=>{
        e.preventDefault();
        const record =[...allemp,emp];
        setAllemp(record);
        localStorage.setItem("emp",JSON.stringify(record));
        setEmp({});
    }
  return (
    <div>
      
      <h1 style={{textAlign:"center"}}>Employee Form</h1>

      <form action="" method='post' onSubmit={(e)=>submitform(e)}>
        <table align='center' border={1}>
            <tr>
                <td>Enter Name : </td>
                <td><input type="text" placeholder='Enter Your Name' name='name' onChange={(e)=>getinputvalue(e)} value={emp.name ? emp.name :""} required/></td>
            </tr>
            <tr>
                <td>Enter Email : </td>
                <td><input type="email" placeholder='Enter Your Email' name='email' onChange={(e)=>getinputvalue(e)} value={emp.email ? emp.email :""} required/></td>
            </tr>
            <tr>
                <td>Enter Password : </td>
                <td><input type="password" placeholder='Enter Your Email' name='password' onChange={(e)=>getinputvalue(e)} value={emp.password ? emp.password :""} required/></td>
            </tr>
            <tr>
                <td></td>
                <td><button type='submit'>Submit</button></td>
            </tr>
        </table>
      </form>
    </div>
  )
}

export default Home
