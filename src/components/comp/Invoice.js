import React from 'react'

const Invoice = ({number,setNumber}) => {
  return (
    <div className="grid grid-cols-9 ">
    <div class="col-start-6 col-end-10 border-b-2 ">
        <label className='  mt-2 px-2 py-2'>
            FAKTURA
        </label>
    </div>

    <div class="col-start-6 col-end-8 ">
        <input type="text"
            value={"Faktura"}
            className='w-full px-2 ' />
    </div>
    <div class="col-start-8 col-end-10 ">
        <input type="text"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            className='w-full px-2 ' />
    </div>
    <div class="col-start-6 col-end-8 ">
        <input type="text"
            value={"Data wystawienia"}
            className='w-full px-2 ' />
    </div>
    <div class="col-start-8 col-end-10 ">
        <input type="date"
            className='w-full px-2 ' />
    </div>
    <div class="col-start-6 col-end-8 ">
        <input type="text"
            value={"Data platnosci"}
            className='w-full px-2 ' />
    </div>
    <div class="col-start-8 col-end-10 ">
        <input type="date"
            className='w-full px-2 ' />
    </div>
    <div class="col-start-6 col-end-10 mt-2 border-b-2 ">
    </div>
    <div class="col-start-6 col-end-10 border-b-2 ">
    </div>
</div>
  )
}

export default Invoice