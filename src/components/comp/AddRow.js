import React from 'react'

const AddRow = ({ disc, product, amount, price, sum, setProduct, setAmount, setPrice, addSalary }) => {
    return (
        <div className="grid grid-cols-4" >
            <input
                type="text"
                name='product'
                required
                placeholder='nazwa i/lub opis towaru usługi'
                value={product}
                onChange={(e) => setProduct(e.target.value)}
                className='h-10 px-2 py-2 '
            />
            <input
                type="text"
                name='amount'
                placeholder='np. 10'
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className='h-10 px-2 py-2'
            />
            <input
                type="text"
                name='price'
                placeholder='np. 2'
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className='h-10 px-2 py-2 '
            />

            <label className='px-2 py-2 '>
                {sum}
            </label>
            <div className="flex ">
                <input type="submit" onClick={addSalary} value="Add Row"
                    className='rounded text-white font-semibold bg-gray-400 hover:bg-gray-700 py-2 px-4' />
                <button
                    onClick={() => disc()}
                    //{setDiscount(!discount)}
                    className='mx-5 rounded text-white font-semibold bg-yellow-400 hover:bg-yellow-700 py-2 px-6'>
                    Discount
                </button>
            </div>

        </div>
    )
}

export default AddRow