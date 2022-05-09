import React, { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom';
import EmployeeService from '../services/EmployeeService';
import { PDFExport } from '@progress/kendo-react-pdf'
import Company from './comp/Company';
import Label from './comp/Label';
import LabelRow from './comp/LabelRow';
import Summary from './comp/Summary';
import Buttons from './comp/Buttons';
import AddRow from './comp/AddRow';
import logo from "./rocket.jpg"

const AddEmployee = () => {

    const [product, setProduct] = useState("")
    const [amount, setAmount] = useState(1)
    const [price, setPrice] = useState(0)
    const [sum, setSum] = useState(0)
    const [finalPrice, setfinalPrice] = useState(0)

    const [vat, setVat] = useState(20)
    const [rabat, setRabat] = useState(0)
    const [number, setNumber] = useState('#')
    const [discount, setDiscount] = useState(true)


    const [employee, setEmployee] = useState({
        id: "",
        firstName: "",
        lastName: "",
        emailId: "",
        issueData: "",
        payDate: "",
        vat: "",
        rabat: "",
        finalPrice: "",
        image: "",
        salaries: []

    })

    const [loading, setLoading] = useState(true)
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await EmployeeService.getProducts();
                setProducts(response.data)
                console.log(response.data)
            } catch (error) {
                console.log(error);
            }
            setLoading(false);
        };
        fetchData();
    }, [])

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
    }

    const saveEmployee = (e) => {
        console.log("vat" + vat + "rabat" + rabat)
        setEmployee({
            ...employee, salaries: [...employee.salaries, { id: "", salary: product, amount: amount, price: price, sum: sum }],

        });
        EmployeeService.saveEmployee(employee).then((response) => {
            console.log(response);
            navigate("/employeeList")

        }).catch((error) => {
            console.log(error);
        });

    };
    const addSalary = () => {
        setEmployee({ ...employee, salaries: [...employee.salaries, { id: Math.random(), salary: product, amount: amount, price: price, sum: sum }] });
        setfinalPrice(prevState => prevState + parseInt(sum))
        setProduct("")
        setPrice(0)
        setAmount(1)
        setSum(price * amount)

    };


    const reset = (e) => {
        e.preventDefault();

        setEmployee({
            id: "",
            firstName: "",
            lastName: "",
            emailId: "",
            issueData: "",
            payDate: "",
            vat: "",
            rabat: "",
            finalPrice: "",
            salaries: []
        })
        setProduct("")
        setPrice("")
        setAmount("")
        setSum("")
    }
    const disc = (e) => {
        setEmployee({
            ...employee, rabat: ""
        })
        setDiscount(!discount)
    }

    const deleteSalary = (e, salarId) => {
        if (employee) {
            console.log(salarId + "   ")
            console.log(employee)

            employee.salaries.map((employ) => {
                if (employ.id === salarId) {
                    console.log("emplou->>" + finalPrice)
                    setfinalPrice(finalPrice - parseInt(employ.sum))
                }
            }
            )
            var filtered = employee.salaries.filter(function (value, index, arr) {
                console.log(value.id + " -> " + salarId)
                return value.id != salarId;
            });
            setEmployee({ ...employee, salaries: filtered });
        }

    }

    const pdfExportComponent = useRef(null);

    const handleExportWithComponent = (event) => {
        pdfExportComponent.current.save();
    }

    const onItemSelect = (item) => {
        setProduct(item.name)
        setPrice(item.amount)
    }
    const hiddenFileInput = useRef(null);
    return (

        <div className='flex flex-wrap-reverse justify-center'>
            <div className="py-8 col-start-2 col-end-4">
                <PDFExport ref={pdfExportComponent} paperSize="A4"  >
                    <div className="pdf-page size-a4"  >


                        <Company
                            handleChange={handleChange}
                            employee={employee}
                            logo={logo}
                            number={number}
                            setNumber={setNumber}
                        />

                        <Label />

                        <LabelRow deleteSalary={deleteSalary} employee={employee} />

                        <Summary discount={discount} handleChange={handleChange} employee={employee} finalPrice={finalPrice} rabat={rabat} vat={vat} setRabat={setRabat} setVat={setVat} />
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

            <div className="py-8 px-10 col-start-5 col-end-7  ">
                <div >
                    <input type="text" />
                    <select class="form-select appearance-none block px-3 py-1.5 text-base font-normal text-gray-700 bg-white 
                    bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0
                    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Default select example">

                        {products.map(item => (
                            <option
                                onClick={() => onItemSelect(item)}
                            >
                                {item.name}
                            </option>
                        ))}

                    </select>
                </div>

                <Label />

                <AddRow disc={disc} product={product} amount={amount} price={price} sum={sum}
                    setProduct={setProduct} setAmount={setAmount} setPrice={setPrice} addSalary={addSalary}
                    products={products}
                />
                <Buttons saveEmployee={saveEmployee} reset={reset} handleExportWithComponent={handleExportWithComponent} />
            </div>

        </div>

    )
}

export default AddEmployee