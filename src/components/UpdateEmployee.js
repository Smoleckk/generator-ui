import React, { useState, useEffect, useRef } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import EmployeeService from '../services/EmployeeService';
import { PDFExport, savePDF } from '@progress/kendo-react-pdf'
import Company from './comp/Company';
import Label from './comp/Label';
import Invoice from './comp/Invoice';
import LabelRow from './comp/LabelRow';
import Summary from './comp/Summary';
import Buttons from './comp/Buttons';
import AddRow from './comp/AddRow';
import logo from "./rocket.jpg"

const UpdateEmployee = () => {

    const { id } = useParams();
    const [product, setProduct] = useState("")
    const [amount, setAmount] = useState(1)
    const [price, setPrice] = useState(0)
    const [sum, setSum] = useState(0)
    const [finalPrice, setfinalPrice] = useState(0)

    const [vat, setVat] = useState(20)
    const [rabat, setRabat] = useState(0)
    const [number, setNumber] = useState('#')

    const [employee, setEmployee] = useState({
        id: id,
        firstName: "",
        lastName: "",
        emailId: "",
        issueDate: "",
        payDate: "",
        vat: "",
        rabat: "",
        finalPrice:"",
        salaries: []

    })

    useEffect(() => {
        setSum(price * amount)
    }, [price, amount]);
    useEffect(() => {
        setEmployee({ ...employee, finalPrice: finalPrice });
    }, [finalPrice]);
    const navigate = useNavigate();

    const handleChange = (e) => {
        const value = e.target.value;
        setEmployee({ ...employee, [e.target.name]: value });
        // setEmployee({ ...employee, users:users})
    }
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await EmployeeService.getEmployeeById(employee.id);
                console.log("response")
                console.log(response.data.finalPrice)
                setEmployee(response.data);
                setfinalPrice(response.data.finalPrice)
                console.log(employee)
                console.log("response--")
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
        //setfinalPrice(employee.finalPrice)
        console.log("++++" + employee.firstName)
    }, []);

    const updateEmployee = (e) => {
        //  e.preventDefault()
        EmployeeService.updateEmployee(employee, id)
            .then((response) => {
                navigate("/employeeList")
            })
            .catch((error) => {
                console.log(error)
            })

    }
    const addSalary = () => {
        setEmployee({ ...employee, salaries: [...employee.salaries, { id: Math.random(), salary: product, amount: amount, price: price, sum: sum }] });
        setfinalPrice(prevState => parseInt(prevState) + parseInt(sum))

    };


    const deleteSalary = (e, salarId) => {
        // e.preventDefault();
        console.log(salarId)
        if (salarId > 1) {
            console.log("here")
            EmployeeService.deleteSalary(salarId)
                //EmployeeService.updateEmployee(employee, id)
                .then((res) => {
                    if (employee) {
                        console.log(salarId + "   ")
                        //  employee.salaries.splice()
                        console.log(employee)
                        console.log(employee.salaries.salary)
                        var filtered = employee.salaries.filter(function (value, index, arr) {
                            console.log(value.id + " -> " + salarId)
                            return value.id != salarId;
                        });
                        setEmployee({ ...employee, salaries: filtered });

                        // setToggle(prevState => !prevState);

                        console.log("--------")
                        console.log(employee.salaries)
                        console.log(filtered)
                        employee.salaries.map((employ) => {
                            if (employ.id === salarId) {
                                console.log("emplou->>" + finalPrice)
                                setfinalPrice(finalPrice - parseInt(employ.sum))
                            }
                        }
                        )
                    }
                })
        } else {
            if (employee) {
                employee.salaries.map((employ) => {
                    if (employ.id === salarId) {
                        console.log("emplou->>" + finalPrice)
                        setfinalPrice(finalPrice - parseInt(employ.sum))
                    }
                }
                )
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

    }
    const pdfExportComponent = useRef(null);

    const handleExportWithComponent = (event) => {
        pdfExportComponent.current.save();
    }
    return (
        <div className='flex flex-wrap-reverse justify-center  '>


            {/* margin={{ top: 20, left: 100, right: 30, bottom: 40 }}  ref={contentArea}  */}
            <div className="py-8 ">
                <PDFExport ref={pdfExportComponent} paperSize="A4"  >
                    <div className="pdf-page size-a4"  >


                        {/* <Company handleChange={handleChange} employee={employee} logo={logo} number={number} setNumber={setNumber} /> */}
                        <Company
                            handleChange={handleChange}
                            employee={employee}
                            logo={logo}
                            number={number}
                            setNumber={setNumber}
                        // products={products}
                        />

                        <Label />

                        <LabelRow deleteSalary={deleteSalary} employee={employee} />

                        <Summary handleChange={handleChange} employee={employee} finalPrice={finalPrice} rabat={rabat} vat={vat} setRabat={setRabat} setVat={setVat} />
                        {/*  */}
                        <div className="grid grid-cols-9 mt-32">
                            <div class="col-start-5 col-end-9 border-t-2">
                                <label className='px-2  '>
                                    Podpis i pieczatka
                                </label>
                            </div>
                        </div>
                    </div>
                </PDFExport>

            </div>



            <div className="py-8 px-10   ">
                <div className="">
                    <button
                        onClick={updateEmployee}
                        className='rounded text-white font-semibold bg-green-400 hover:bg-green-700 py-2 px-6'>
                        Update
                    </button>
                    <button
                        onClick={() => navigate("/employeeList")}
                        className='rounded text-white font-semibold bg-red-400 hover:bg-red-700 py-2 px-6'>
                        Cancel
                    </button>
                    <input type="button" onClick={handleExportWithComponent} value="PDF"
                        className='rounded text-white font-semibold bg-blue-400 hover:bg-blue-700 py-2 px-6' />
                </div>
                <Label />

                <AddRow product={product} amount={amount} price={price} sum={sum}
                    setProduct={setProduct} setAmount={setAmount} setPrice={setPrice} addSalary={addSalary} />
            </div>
        </div>

    )
}

export default UpdateEmployee