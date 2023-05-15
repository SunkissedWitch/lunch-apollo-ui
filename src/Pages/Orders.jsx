import React from 'react'
import { fetcher } from '../services/axiosInstance'
import useSWR from 'swr'

const OrderRow = ({ id, text, price, user: { username } }) => {
  return <tr key={id}>
    <td>
      {text}
    </td>
    <td className='font-mono'>
      {price}
    </td>
    <td>
      <span className="badge badge-ghost badge-sm font-mono">{username}</span>
    </td>
  </tr>
}

const Orders = () => {
  const { data: orders, error, isLoading } = useSWR('/orders', fetcher)

  if (error) return <div>failed to load</div>
  if (isLoading) return <div>loading...</div>

  return (
    <div>
      <div className="overflow-x-auto w-full shadow">
        <table className="table table-compact w-full">
          {/* head */}
          <thead>
            <tr>
              <th>Order</th>
              <th>Price</th>
              <th>User</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) =>
              <OrderRow key={`order-${index}`} {...order} />
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Orders;
