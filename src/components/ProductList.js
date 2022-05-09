import React, { useState, useEffect, useRef } from 'react'
import EmployeeService from '../services/EmployeeService';

import { useNavigate } from 'react-router-dom';
import Product from './Product';


const ProductList = () => {

  const [loading, setLoading] = useState(true)
  const [products, setProducts] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await EmployeeService.getProducts();
        setProducts(response.data)
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    fetchData();
  }, [])

  const deleteProduct = (e, id) => {
    e.preventDefault();
    EmployeeService.deleteProduct(id)
      .then((res) => {
        if (products) {
          setProducts((prevElement) => {
            return prevElement.filter((product) => product.id !== id);
          })
        }
      })
  }

  return (
    <div className="container mx-auto my-8">
      <div className="h-12">
        <button
          onClick={() => navigate("/addProduct")}
          className="rounded bg-slate-600 text-white px-6 py-2 font-semibold">
          Add Product
        </button>

      </div>
      <div className="flex justify-center">
        <table className='w-3/5'>
          <thead className='bg-gray-50'>
            <tr>
              <th className='text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6'>
                Url
              </th>
              <th className='text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6'>
                Name
              </th>
              <th className='text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6'>
                Amount
              </th>
              <th className='text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6'>
                Actions
              </th>
            </tr>
          </thead>
          {!loading && (
            <tbody className="bg-white">
              {products.map((product) => (
                <Product
                  product={product}
                  deleteProduct={deleteProduct}

                />
              ))}
            </tbody>
          )}
        </table>
      </div>
    </div>
  )
}

export default ProductList