'use client';
import { useEffect, useState } from 'react';
import { FaTrashCan } from "react-icons/fa6";

const Cart = () => {
  const [cartItems, setCartItems] = useState<any[]>([]);
  const [total, setTotal] = useState(0.0);

  useEffect(() => {
    const addedItems = localStorage.getItem('cartItems');
    if (addedItems) {
      setCartItems(JSON.parse(addedItems));
    
      
    }
  }, []);

  useEffect(() => {
    const calculatedTotal = cartItems.reduce(
      (sum: number, item: any) => sum + parseFloat(item.price), 0);
    setTotal(calculatedTotal);
  },[cartItems])

  const removeFromCart = (item: any) => {
    const updatedCartItems = cartItems.filter((cartItem) => cartItem !== item);
    setCartItems(updatedCartItems);
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
  };

  return (
    <div className='container p-3 mx-auto scroll-mt-[100px] font-poppins mt-7'>
      <div className='flex flex-col items-center'>
         <div>
        <p className='font-bold text-2xl'>Total: ${total.toFixed(2)}</p>
      </div>

      {cartItems.map((item, index) => (
        <div key={index} className='flex flex-row justify-between bg-amber-300  rounded-full w-100 text-black px-5 py-2 m-1'>
          <div>
            <p className='font-medium'>{item.name}</p>
            <p>${item.price}</p>
          </div>
          <button type='button' className='cursor-pointer bg-amber-500 hover:bg-white rounded-full p-4' onClick={() => removeFromCart(item)}>
              <FaTrashCan className='text-red-600 m-0 p-0' />
          </button>
          
        </div>
      ))}
     
      </div>
    </div>
  );
};

export default Cart;
