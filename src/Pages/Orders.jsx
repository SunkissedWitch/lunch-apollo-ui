import React from 'react'
import axios from '../services/axiosInstance'
import useSWR from 'swr'

const fetcher = async (url) => {
  const { data } = await axios.get(url)
  return data
}

const OrderRow = ({ id, text, price, user: { username } }) => {
  return <tr key={id}>
    <td>
      <div className="flex items-center space-x-3">
        <div>
          <div className="font-bold">{text}</div>
          <div className="text-sm opacity-50">{price}</div>
        </div>
      </div>
    </td>
    <td>
      <span className="badge badge-ghost badge-sm font-mono">{username}</span>
    </td>
    <th className='text-right'>
      <button className="btn btn-primary btn-sm">details</button>
    </th>
  </tr>
}

const Orders = () => {
  const { data: orders, error, isLoading } = useSWR('/orders', fetcher)
  console.log('[orders]: ', error, isLoading, orders)

  if (error) return <div>failed to load</div>
  if (isLoading) return <div>loading...</div>

  return (
    <div>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>Order</th>
              <th>User</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => 
              <OrderRow {...order} />
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Orders;
