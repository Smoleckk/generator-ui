import React from 'react'

const Buttons = ({saveEmployee,reset,handleExportWithComponent}) => {
  return (
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
                    <input type="button" onClick={handleExportWithComponent} value="PDF"
                        className='rounded text-white font-semibold bg-blue-400 hover:bg-blue-700 py-2 px-6' />
                </div>
  )
}

export default Buttons