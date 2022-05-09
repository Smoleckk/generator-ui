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
        <tr key={employee.id} className="shadow border-b rounded" style={{ backgroundColor: backColor ? '#FFB6C1' : '#fff', }}>

            <td className='text-left px-6 py-2 whitespace-nowrap'>
                <div className="text-sm" >{employee.firstName}</div>
            </td>
            <td className='text-left px-6 py-2 whitespace-nowrap'>
                <div className="text-sm ">{employee.lastName}</div>
            </td>
            <td className='text-left px-6 py-2whitespace-nowrap'>
                <div className="text-sm ">{employee.emailId}</div>

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
            </td>

        </tr>
    )
}

export default Employee