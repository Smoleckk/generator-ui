import React from 'react'
import Invoice from './Invoice'

const Company = ({ products, handleChange, employee, logo, number, setNumber }) => {

    const onItemSelect = (item) => {
        console.log(item.name)
    }


    return (
        <div className="grid grid-cols-2">
            <div className="col-start-0 col-end-2 ">
                <div className="grid grid-cols-3 ">
                    <div class="col-start-1 col-end-3 ">

                        {/* <select className="">
                            <option>Filter by genres...</option>
                            {products.map(item => (
                                <option
                                onClick={() => onItemSelect(item)}
                                >
                                    {item.name}
                                </option>
                            ))}
                      
                        </select> */}

                        <textarea
                            type="text"
                            name='firstName'
                            placeholder='Dane odbiorcy'
                            value={employee.firstName}
                            onChange={(e) => handleChange(e)}
                            className='h-28 w-full   overflow-hidden resize-none'
                        />
                        
                    </div>

                    <div class="col-start-1 col-end-3 mt-4">
                        <textarea
                            type="text"
                            name='lastName'
                            placeholder='Dane nadawcy'
                            value={employee.lastName}
                            onChange={(e) => handleChange(e)}
                            className='h-28 w-full  overflow-hidden resize-none'
                        />

                    </div>
                </div>
            </div>

            <div className="col-start-2 col-end-3 ">
                <div className="grid grid-cols-4 ">

                    <div class="col-start-3 col-end-5 ">
                        <img src={logo} alt="logo" className='h-28' />
                    </div>
                    <div class="col-start-1 col-end-5 border-b-2 mt-4">
                        <label className='  mt-2 px-2 py-2'>
                            FAKTURA
                        </label>
                    </div>

                    <div class="col-start-1 col-end-3 ">
                        <input type="text"
                            value={"Faktura"}
                            className='w-full px-2 ' />
                    </div>

                    <div class="col-start-3 col-end-5 ">
                        <input
                            type="text"
                            name='emailId'
                            placeholder='InvoiceNumber'
                            value={employee.emailId}
                            onChange={(e) => handleChange(e)}
                            // value={number}
                            // onChange={(e) => setNumber(e.target.value)}
                            className='w-full px-2 ' />
                    </div>

                    <div class="col-start-1 col-end-3 ">
                              <label className='w-full px-2 '>
                           Data wystawie
                        </label>
                    </div>
                    <div class="col-start-3 col-end-5 ">
                        {/* <input type="date"
                            className='w-full px-2 ' /> */}
                        <input type="date"
                            name='issueData'
                            placeholder='issueData'
                            value={employee.issueData}
                            onChange={(e) => handleChange(e)}
                            className='w-full px-2 ' />
                    </div>
                    <div class="col-start-1 col-end-3 ">
                    <label className='w-full px-2 '>
                           Data platnosci
                        </label>
                    </div>
                    <div class="col-start-3 col-end-5 ">
                    <input type="date"
                            name='payDate'
                            placeholder='payDate'
                            value={employee.payDate}
                            onChange={(e) => handleChange(e)}
                            className='w-full px-2 ' />
                    </div>
                    <div class="col-start-1 col-end-5 mt-2 border-b-2 ">
                    </div>
                    <div class="col-start-1 col-end-5 border-b-2 ">
                    </div>
                </div>
            </div>
        </div>


    )
}

export default Company