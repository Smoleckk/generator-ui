import React from 'react'

const Summary = ({ discount,employee, handleChange, finalPrice, rabat, vat, setRabat, setVat }) => {
    return (
        <div className="grid grid-cols-9 mt-4">
            <div class="col-start-5 col-end-9 border-b-2">
                <label className='px-2  '>
                    Suma czesciowa bez podatkow
                </label>
            </div>
            <div className="col-start-9 col-end-10 border-b-2">
                <label className=''>
                    {finalPrice}$
                </label>
            </div>
            {!discount && (
                <div className="col-start-5 col-end-7 border-b-2 ">
                    <label className=' px-2 w-46  '>
                        Rabat
                    </label>
                </div>
            )}
            {!discount && (
                <div className="col-start-7 col-end-9  border-b-2 ">
                    <input
                        type="text"
                        name='rabat'
                        placeholder='0%'
                        value={employee.rabat}
                        onChange={(e) => handleChange(e)}
                        className=' w-12  overflow-hidden resize-none'
                    />
                </div>
            )}
            {!discount && (
                <div className="col-start-9 col-end-10  border-b-2 ">
                    <label className='  '>
                        {employee.rabat * finalPrice * 0.01}$
                    </label>

                </div>
            )}

            <div className="col-start-5 col-end-7  border-b-2 ">
                <label className=' px-2 w-46  '>
                    VAT
                </label>
            </div>

            <div className="col-start-7 col-end-9  border-b-2 ">
                <input
                    type="text"
                    name='vat'
                    placeholder='0%'
                    value={employee.vat}
                    onChange={(e) => handleChange(e)}
                    className=' w-12  overflow-hidden resize-none'
                />
            </div>

            <div className="col-start-9 col-end-10  border-b-2 ">
                <label className=' '>
                    {employee.vat * (finalPrice - (employee.rabat * finalPrice * 0.01)) * 0.01}$
                </label>

            </div>

            <div className="col-start-9 col-end-10 ">
                <label className=''>
                    {finalPrice - (employee.rabat * finalPrice * 0.01) + employee.vat * (finalPrice - (employee.rabat * finalPrice * 0.01)) * 0.01}$
                </label>

            </div>

        </div>
    )
}

export default Summary