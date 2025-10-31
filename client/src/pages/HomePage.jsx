import React from 'react'
import { useEffect } from 'react'
import { useProductStore } from '../store/useProductStore'

function HomePage() {
const {products,loading,error,fetchProducts}=useProductStore();
useEffect(()=>{
    fetchProducts();
},[fetchProducts]);

console.log("products",products);

  return (
    <div>
      
    </div>
  )
}     
export default HomePage
