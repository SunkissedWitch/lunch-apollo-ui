import React from 'react'
import axios from '../services/axiosInstance'
import useSWR from 'swr'
import PollCard from '../Components/Poll/PollCard'
import dayjs from 'dayjs'

const fetcher = async (url) => {
  const { data } = await axios.get(url)
  return data
}

const Poll = () => {
  const { data: polls, error, isLoading } = useSWR('/polls', fetcher)

  if (error) return <div>failed to load</div>
  if (isLoading) return <div>loading...</div>
  console.log('polls', polls)
  if (polls?.length === 1) {
    const [firstPoll] = polls
    const { dueDate } = firstPoll
    console.log('dueDate', dayjs(dueDate).diff(dayjs(), 'minutes'))
    return (
      <>
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
        <div className='flex flex-col gap-3 mt-3'>
          <PollCard {...firstPoll}/>
        </div>
      </>
    );  
  }

  // ToDo: додати стилі + логіку вибору та відображення конкретного опитування у випадку, коли на день існує декілька опитувань.
  return(
    <div className='bg-neutral p-4 rounded-md text-white mx-auto w-fit'>
      <div className='text-center'>
        <p>За сьогодні є кілька опитуваннь. Яке саме ви хочете подивитись?</p>
        <ul>
          {polls.map(poll => (
            <li key={`poll-id-${poll.id}`} onClick={() => console.log('pollId', poll.id)}>{poll.id} - до {poll.dueDate}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Poll;
