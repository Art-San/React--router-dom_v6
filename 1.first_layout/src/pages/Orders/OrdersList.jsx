import React from 'react'
import { Link } from 'react-router-dom'
import './OrdersList.css' // Импортируйте ваш CSS-файл

const orders = [
  { id: '1', title: 'Грузчики' },
  { id: '2', title: 'Грузчики и газель' },
  { id: '3', title: 'Грузчики и газель' }
]

const OrdersList = () => {
  return (
    <div className="orders-list">
      {orders.map((order) => (
        <div key={order.id} className="order-item">
          <h1>
            <Link to={`/orders/${order.id}`}>{order.title}</Link>
          </h1>
        </div>
      ))}
    </div>
  )
}

export default OrdersList
