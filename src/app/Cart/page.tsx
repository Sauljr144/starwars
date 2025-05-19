'use client'
import { useEffect, useState } from "react"

const Cart = () => {
  const [cartItems, setCartItems] = useState<any[]>([])

  useEffect(() => {
    const addedItems = localStorage.getItem('cartItems')
    if (addedItems) {
      setCartItems(JSON.parse(addedItems))
    }
  }, [])

  return (

    <div>{cartItems.map((item, index) =>(
      <div key={index}>
        <div>
          <p>{item.name}</p>
          <p>{item.price}</p>
        </div>
      </div>
    ))}</div>
  )
}

export default Cart