import React from 'react'

const SelectWatchListElement = ({watachList}) => {
  return (
    <div className=' flex justify-between border-2 border-purple-500 rounded-md px-2 mt-2 cursor-pointer'>
      {
        watachList?.name??"Undefine"
      }
    </div>
  )
}

export default SelectWatchListElement
