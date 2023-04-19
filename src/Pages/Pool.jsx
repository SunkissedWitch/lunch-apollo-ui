import React from 'react'
import axios from '../services/axiosInstance'
import useSWR from 'swr'

const fetcher = async (url) => {
  const { data } = await axios.get(url)
  return data
}

const Pool = () => {
  const { data: users, error, isLoading } = useSWR('/users', fetcher)

  if (error) return <div>failed to load</div>
  if (isLoading) return <div>loading...</div>

  return (
    <div className='flex flex-col gap-3'>
      <div className='flex justify-center'>До кінця голосування</div>
      <div className="justify-center grid grid-flow-col gap-5 text-center auto-cols-max">
        <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
          <span className="countdown font-mono text-5xl">
            <span style={{ "--value": 20 }}></span>
          </span>
          хвилин
        </div>
        <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
          <span className="countdown font-mono text-5xl">
            <span style={{ "--value": 17 }}></span>
          </span>
          секунд
        </div>
      </div>
    </div>
  );
}

export default Pool;
