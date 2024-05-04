

import AddEmployee from "./AddEmployee";
import EmpList from "./EmpList";

const Employee = () => {

    return (
        <>
            <h1>Employee Component</h1>
            <AddEmployee />
            <EmpList />
        </>
    );
};

export default Employee;
/*

import { useState } from "react";
const Employee=()=>{

    const salary=40000.58;
    const name='Sonu'
    const employee={
        id:10,
        name:'Sonu',
        salary:50000,
        isIndian:true,
        phones:[8373636,83737],
        //phone:'883883',
        phone:''
    }

    //let Firstname=''; not working
    // state
    const [Firstname,setFirstName]=useState(''); // works
    //evt=event
    const handleNameInput=(evt)=>{
        console.log(evt.target.name);
        console.log(evt.target.value);
        //Firstname=evt.target.value; // not working
        setFirstName(evt.target.value); // works
    };

    return (
        <>
        
        <h1>Employee component</h1>
        <p>Employee component</p>
        <p>Employee id is {employee.id}</p>
        <p>Employee name is {name}</p> 
        <p>Employee salary is ₹{salary}/-</p>
        <p>But the take home is ₹{salary-10000.45}/-</p>
        <>
            <p>Employee phone number is {employee.phones[0]}</p>
            {
            employee.phone && // if the phone value is given then the statement below will printed
            <p>Employee primary phone number is {employee.phone}</p>
            }
        </>

        { /* Dynamic values */ //}
/*       <form>
        <p>Employee name is {Firstname}</p>
        <input type="text" id="Firstname" name="Firstname" onClick={handleNameInput}/>
       </form>

       
        </>
    );
};

export default Employee;

*/