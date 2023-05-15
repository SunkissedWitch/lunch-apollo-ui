import React, { useState } from 'react'
import { _axios } from '../../services/axiosInstance'

const PollCard = ({ id, dateStart, dueDate, isClosed, available_restaurants: options }) => {
  const [answer, setAnswer] = useState(1)
  const handleChange = (event) => {
    console.log('event', event.target.value)
    setAnswer(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    onAnswer()
  }
  const onAnswer = async () => {
    try {
      const response = await _axios.post(`/polls/${id}/answer`, {
        answer
      })
      console.log('response', response)
      return response
    } catch (error) {
      console.log('Error:', error.message)
    }
  }

  return (
    <div className='flex flex-row justify-center align-top'>
      <div className='flex flex-col p-2 bg-neutral rounded-box text-neutral-content'>
        <div className='p-4'>
          <h3 className='text-bold'>Де ми сьогодні робимо замовлення?</h3>
        </div>
        <form onSubmit={handleSubmit}>
          <div className='p-4'>
            <ul onChange={handleChange} className='flex flex-col gap-3'>
              {options.map(option => (
                <li key={`${option.id}-${option.name}`} className='flex flex-row justify-start gap-3'>
                  <input id={`check-restaurant-${option.id}`} type='radio' value={option.id} className='radio radio-accent' checked={answer === option.id.toString()} />
                  <label htmlFor={`check-restaurant-${option.id}`} className='font-bold hover:text-accent hover:cursor-pointer'>{option.name}</label>
                </li>
              ))}
            </ul>
          </div>
          <div className='flex flex-row justify-center p-4'>
            <button type='submit' className='btn btn-accent w-full'>Голосую!</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default PollCard;
