import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import EmployeeService from '../services/EmployeeService';

const Product = ({ product, deleteProduct }) => {

    const [amount, setAmount] = useState(0)

    const [product2, setProduct2] = useState({
        id: "",
        url: "",
        name: "",
        amount: ""
    });

    const [backColor, setBackColor] = useState(false)

    const navigate = useNavigate();

    const handleChange = (e) => {
        const value = e.target.value;
        setProduct2({ ...product2, [e.target.name]: value });
        // setEmployee({ ...employee, users:users})
    }
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await EmployeeService.getProductById(product.id);
                setProduct2(response.data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, []);
    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const response = await EmployeeService.getProductById(product.id);
    //             setProduct2(response.data);
    //         } catch (error) {
    //             console.log(error);
    //         }
    //     };
    //     fetchData();
    // }, [product2]);
    // useEffect(() => {
    //    // setEmployee({ ...employee, finalPrice: finalPrice });
    //     setProduct2({...product2, })
    // }, [finalPrice]);

    const updateProduct = (prod, id) => {
        EmployeeService.updateProduct(prod, id)
            .then((response) => {
               // window.location.reload(false);
                setEdit(true)
            })
            .catch((error) => {
                console.log(error)
            })

    }
    const [edit, setEdit] = useState(true)


    return (
        <tr key={product.id} className="shadow border-b rounded" style={{ backgroundColor: backColor ? '#FFB6C1' : '#fff', }}>

            {!edit && (
                <td className='text-left px-6 py-2 whitespace-nowrap'>
                    {/* <div className="text-sm text-gray-500" >{product.url}</div> */}
                    <input type="text"
                        name='url'
                        placeholder='np. 1'
                        value={product2.url}
                        onChange={(e) => handleChange(e)}
                        className='w-12 text-sm' />
                </td>


            )}
            {!edit && (
                <td className='text-left px-6 py-2 whitespace-nowrap'>
                    {/* <div className="text-sm text-gray-500">{product.name}</div> */}
                    <input type="text"
                        name='name'
                        placeholder='np. 1'
                        value={product2.name}
                        onChange={(e) => handleChange(e)}
                        className='w-16 text-sm' />
                </td>


            )}
            {!edit && (
                <td className='text-left px-6 py-2whitespace-nowrap'>
                    {/* <div className="text-sm text-gray-500">{product.amount}</div> */}
                    {/* {employee.salaries.map((salar) => (salar.salary))} */}
                    <input type="text"
                        name='amount'
                        placeholder='np. 1'
                        value={product2.amount}
                        onChange={(e) => handleChange(e)}
                        className='w-10 text-sm' />

                </td>
            )}

            {edit && (
                <td className='text-left px-6 py-2 whitespace-nowrap'>
                    <div className="text-sm " >{product2.url}</div>

                </td>


            )}
            {edit && (
                <td className='text-left px-6 py-2 whitespace-nowrap'>
                    <div className="text-sm ">{product2.name}</div>

                </td>


            )}
            {edit && (
                <td className='text-left px-6 py-2 whitespace-nowrap'>
                    <div className="text-sm ">{product2.amount}</div>
                    {/* {employee.salaries.map((salar) => (salar.salary))} */}


                </td>
            )}







            <td className=' px-6 py-2 whitespace-nowrap font-medium text-sm'>
                {/* <a
                    onClick={(e, id) => editEmployee(e, employee.id)}
                    className='text-indigo-600 hover:text-indigo-800 px-4 hover:cursor-pointer'>
                    Edit
                </a> */}
                <a
                    onClick={(e, id) => deleteProduct(e, product.id)}
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
                    onClick={(e) => updateProduct(product2, product2.id)}
                    className='text-indigo-600 hover:text-indigo-800 px-4 hover:cursor-pointer'>
                    Check
                </a> */}
                {edit && (<a
                    // onClick={(e) => setBackColor(!backColor)}
                   
                 onClick={() => setEdit(false)}
                    className='text-indigo-600 hover:text-indigo-800 px-4 hover:cursor-pointer'>
                    Edit
                </a>)}
                {!edit && (<a
                    // onClick={(e) => setBackColor(!backColor)}
                    onClick={() => updateProduct(product2, product2.id)}
                    className='text-indigo-600 hover:text-indigo-800 px-4 hover:cursor-pointer'>
                    Save
                </a>)}

            </td>

        </tr>
    )
}

export default Product