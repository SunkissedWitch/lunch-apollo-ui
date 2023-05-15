import React from 'react'
import { fetcher } from '../services/axiosInstance'
import useSWR from 'swr'

const UserRow = ({ email, username, office = 'Default', orders: totalOrders = '0' }) => {
  return <tr>
    <td>
      <div className="flex items-center space-x-3">
        <div>
          <div className="font-bold">{username}</div>
          <div className="text-sm opacity-50">{email}</div>
        </div>
      </div>
    </td>
    <td>
      <span className="badge badge-ghost badge-sm font-mono">{totalOrders}</span>
    </td>
    <th className='text-right'>
      <button className="btn btn-primary btn-sm">details</button>
    </th>
  </tr>
}

const Users = () => {
  const { data: users, error, isLoading } = useSWR('/users', fetcher)

  if (error) return <div>failed to load</div>
  if (isLoading) return <div>loading...</div>

  return (
    <div>
      <div className="overflow-x-auto w-full shadow">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>Name</th>
              <th>Total Orders</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) =>
              <UserRow key={`user-${index}`} {...user} />
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Users;
