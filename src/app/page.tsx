'use client';
import Button from '@/components/atomic/atoms/Button';
import HerosTable from '@/components/atomic/molecules/HerosTable';
import PlanetsTable from '@/components/atomic/molecules/PlanetsTable';
import StarshipsTable from '@/components/atomic/molecules/StarshipsTable';
import { useState } from 'react';

export default function Home() {
  const [tableType, setTableType] = useState('planets');
  const [cartItems, setCartItems] = useState<any[]>([]);

  const addToCart = (item: any) => {
    setCartItems((prev) => [...prev, item]);
    localStorage.setItem('cartItems', JSON.stringify([...cartItems, item]));
  };

  return (
    <div className='container p-3 mx-auto scroll-mt-[100px] font-poppins mt-7'>
      <span className='text-lg font-starwars'>Welcome, Ezra!</span>
      <h1 className='text-5xl mb-5 font-starwars'>Posters</h1>
      <div className=' mb-8'>
        <Button name='Planets' onClick={() => setTableType('planets')} />
        <Button name='Ships' onClick={() => setTableType('ships')} />
        <Button name='Heros' onClick={() => setTableType('heros')} />
      </div>
      {tableType === 'planets' && <PlanetsTable addToCart={addToCart}/>}
      {tableType === 'ships' && <StarshipsTable addToCart={addToCart}/>}
      {tableType === 'heros' && <HerosTable addToCart={addToCart}/>}
    </div>
  );
}
