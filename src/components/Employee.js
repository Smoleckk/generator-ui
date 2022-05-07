import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import EmployeeService from '../services/EmployeeService';

const Employee = ({ employee, deleteEmployee }) => {

    const navigate = useNavigate();

    const [backColor, setBackColor] = useState(false)

    const editEmployee = (e, id) => {
        e.preventDefault();
        navigate(`/editEmployee/${id}`);

    }
    const [employee2, setEmployee2] = useState({
        id: "",
        firstName: "",
        lastName: "",
        emailId: "",
        salaries: []
        //{ name: "", car: "" }
    })

    const handleChange = (e) => {
        const value = e.target.value;
        setEmployee2({ ...employee, [e.target.name]: value });
    }
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await EmployeeService.getEmployeeById(employee.id);
                setEmployee2(response.data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, []);

    const updateEmployee = (empl, id) => {
        EmployeeService.updateEmployee(empl, id)
            .then((response) => {
                window.location.reload(false);
            })
            .catch((error) => {
                console.log(error)
            })

    }




    return (
        // <div key={employee.id} className="flex flex-col justify-between px-3 py-2 border-2 m-2 w-52 h-32 shadow  rounded-2xl">
        //     <div className="">
        //         {employee.firstName.substring(0,60)}
        //     </div>
        //     <div className="flex justify-center ">
        //     <a
        //         onClick={(e, id) => editEmployee(e, employee.id)}
        //         className='m-2 shadow rounded border text-gray-600 hover:text-gray-800 px-4 hover:cursor-pointer'>
        //         EDIT
        //     </a>
        //     <a
        //         onClick={(e, id) => deleteEmployee(e, employee.id)}
        //         className='m-2 shadow rounded border text-gray-600 hover:text-gray-800 px-4 hover:cursor-pointer'>
        //         DELETE
        //         </a>
        //     </div>
        // </div>

        <tr key={employee.id} className="shadow border-b rounded" style={{ backgroundColor: backColor ? '#FFB6C1' : '#fff', }}>

            <td className='text-left px-6 py-2 whitespace-nowrap'>
                <div className="text-sm" >{employee.firstName}</div>
            </td>
            <td className='text-left px-6 py-2 whitespace-nowrap'>
                <div className="text-sm ">{employee.lastName}</div>
            </td>
            <td className='text-left px-6 py-2whitespace-nowrap'>
                 <div className="text-sm ">{employee.emailId}</div>
               {/* {employee.salaries.map((salar) => (salar.salary))} */}
                      {/* <input type="text"
                    name='emailId'
                    placeholder='inv'
                    value={employee2.emailId}
                    onChange={(e) => handleChange(e)}
                    className='w-10 px-2 ' /> */}
            
            </td>
            <td className=' px-6 py-2 whitespace-nowrap font-medium text-sm'>
                <a
                    onClick={(e, id) => editEmployee(e, employee.id)}
                    className='text-indigo-600 hover:text-indigo-800 px-4 hover:cursor-pointer'>
                    Edit
                </a>
                <a
                    onClick={(e, id) => deleteEmployee(e, employee.id)}
                    className='text-indigo-600 hover:text-indigo-800 px-4 hover:cursor-pointer'>
                    Delete
                </a>
                {/* <input type="text"
                    name='emailId'
                    placeholder='inv'
                    value={employee2.emailId}
                    onChange={(e) => handleChange(e)}
                    className='w-10 px-2 ' />*/}
                {/* <a 
                    // onClick={(e) => setBackColor(!backColor)}
                    onClick={(e) => updateEmployee(employee2, employee2.id)}
                    className='text-indigo-600 hover:text-indigo-800 px-4 hover:cursor-pointer'>
                    Check
                </a> */}

            </td>

        </tr>
    )
}

export default Employee