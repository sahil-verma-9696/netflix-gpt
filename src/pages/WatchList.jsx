import React from 'react'

import ListCard from '../components/watchlist/ListCard'
import { useSelector } from 'react-redux'

const WatchList = () => {
  const watchLists = useSelector(store=>store.movies?.watchLists)
  console.log(watchLists)
  
  return (
    <div className='flex flex-wrap py-4 px-8 gap-2 '>
      {
        watchLists?.map(list=><ListCard key={list.name} list={list}/>)
      }
    </div>
  )
}

export default WatchList
