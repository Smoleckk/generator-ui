import React from 'react'

const LabelRow = ({deleteSalary,employee}) => {
  return (
  
        <div className="">
            {employee.salaries.map((salar) => (
                <div className="divbutton  border-b-2 grid">
                    <div className="myDIV grid grid-cols-4 h-5">
                        <label className='px-2  h-4 w-46  '>
                            {salar.salary}
                        </label>
                        <label className='px-2  h-4 w-46  '>
                            {salar.amount}
                        </label>
                        <label className='px-2 h-4 w-46  '>
                            {salar.price}
                        </label>
                        <label className='px-2  h-4 w-46  '>
                            {salar.sum}
                        </label>
                    </div>
                    <a
                        onClick={(e, id) => deleteSalary(e, salar.id)}
                        className='cursor-pointer button text-red-600 hover:text-red-800 absolute right-10 '>
                        x
                    </a>
                </div>


            ))}
        </div>

  )
}

export default LabelRow