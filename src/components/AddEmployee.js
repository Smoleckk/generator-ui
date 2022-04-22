import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
//import { useNavigate } from "react-router-dom";
import EmployeeService from '../services/EmployeeService';

const AddEmployee = () => {

    // const [users, setUsers] = useState([
    //     {
    //         id: "",
    //         name: "Joe",
    //     }
    // ]);

    const [car, setCar] = useState("")

    const [employee, setEmployee] = useState({
        id: "",
        firstName: "",
        lastName: "",
        emailId: "",
        salaries: []
        //{ name: "", car: "" }
    })

    const navigate = useNavigate();

    const handleChange = (e) => {
        const value = e.target.value;
        setEmployee({ ...employee, [e.target.name]: value });
        // setEmployee({ ...employee, users:users})
    }
    //const navigaye = useNavigate();

    const saveEmployee = (e) => {
        e.preventDefault();
        setEmployee({ ...employee, salaries: [...employee.salaries, { id: "", salary: car }] });
        EmployeeService.saveEmployee(employee).then((response) => {
            console.log(response);
            navigate("/employeeList")
            //  navigaye("/employeeList");
        }).catch((error) => {
            console.log(error);
        });

    };
    const onClick2 = (e) => {
        setEmployee({ ...employee, salaries: [...employee.salaries, { id: Math.random(), salary: car }] });
    };

    const reset = (e) => {
        e.preventDefault();

        setEmployee({
            id: "",
            firstName: "",
            lastName: "",
            emailId: "",
            salaries: []
        })
        setCar("")
    }


    const deleteSalary = (e, salarId) => {
        if (employee) {
            console.log(salarId + "   ")
            console.log(employee)
            console.log(employee.salaries.salary)
            var filtered = employee.salaries.filter(function (value, index, arr) {
                console.log(value.id + " -> " + salarId)
                return value.id != salarId;
            });
            setEmployee({ ...employee, salaries: filtered });
        }

    }

    return (

        <div className='flex max-w-2xl mx-auto shadow border-b'>
            <div className="px-8 py-8">
                <div className="font-thasdin text-2xl tracking-wider">
                    <h1>Add New Employee</h1>
                </div>
                <div className="item-center justify-center h-14 w-full my-4">
                    <label className='block text-gray-600 text-small font-normal'>
                        First Name
                    </label>
                    <input
                        type="text"
                        name='firstName'
                        value={employee.firstName}
                        onChange={(e) => handleChange(e)}
                        className='h-10 w-96 border mt-2 px-2 py-2'
                    />
                </div>
                <div className="item-center justify-center h-14 w-full my-4">
                    <label className='block text-gray-600 text-small font-normal'>
                        Last Name
                    </label>
                    <input
                        type="text"
                        name='lastName'
                        value={employee.lastName}
                        onChange={(e) => handleChange(e)}
                        className='h-10 w-96 border mt-2 px-2 py-2'
                    />
                </div>
                <div className="item-center justify-center h-14 w-full my-4">
                    <label className='block text-gray-600 text-small font-normal'>
                        Email
                    </label>
                    <input
                        type="email"
                        name='emailId'
                        value={employee.emailId}
                        onChange={(e) => handleChange(e)}
                        className='h-10 w-96 border mt-2 px-2 py-2'
                    />
                </div>

                <input type="button" onClick={onClick2} value="Add Salary"
                    className='rounded text-white font-semibold bg-yellow-400 hover:bg-yellow-700 py-2 px-6' />

                <div className="item-center justify-center h-14 w-full my-4">
                    <label className='block text-gray-600 text-small font-normal'>
                        Salary
                    </label>
                    <input
                        type="text"
                        name='name'
                        value={car}
                        onChange={(e) => setCar(e.target.value)}
                        className='h-10 w-96 border mt-2 px-2 py-2'
                    />
                </div>
                <div className="">
                    {(
                        <div className="">
                            {employee.salaries.map((salar) => (
                                <div>
                                    {salar.salary}
                                    {salar.id}

                                    <a
                                        onClick={(e, id) => deleteSalary(e, salar.id)}
                                        //console.log(employee.id)
                                        className='text-indigo-600 hover:text-indigo-800 px-4 hover:cursor-pointer'>
                                        Delete
                                    </a>
                                </div>

                            ))}
                        </div>
                    )}
                </div>



                <div className="item-center justify-center h-14 w-full my-4 space-x-4 pt-4">
                    <button
                        onClick={saveEmployee}
                        className='rounded text-white font-semibold bg-green-400 hover:bg-green-700 py-2 px-6'>
                        Save
                    </button>
                    <button
                        onClick={reset}
                        className='rounded text-white font-semibold bg-red-400 hover:bg-red-700 py-2 px-6'>
                        Clear
                    </button>
                </div>
            </div>
        </div>
    )
}

export default AddEmployee