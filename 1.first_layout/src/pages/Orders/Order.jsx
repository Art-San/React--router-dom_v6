import React from 'react'
import { useParams } from 'react-router-dom'

const Order = () => {
  const { id } = useParams()
  console.log(123, id)

  return (
    <div>
      <h1>Order Details for Order ID: {id}</h1>
      {/* Здесь можно добавить логику для загрузки и отображения деталей заказа */}
    </div>
  )
}

export default Order
