import React from 'react'
import { TMDB_MOVIE_BACK_DROP_POSTER } from '../../utils/constants'

const SideBar = ({movie,totalMovies}) => {
  return (
    <aside className='bg-purple-500 text-white bg-opacity-50 h-[calc(100vh-96px)] rounded-t-xl p-4 mx-4 sticky top-[96px]'>
      <div className="SideBar-img-wrapper w-60 h-40 bg-purple-700 rounded-xl overflow-hidden">
            <img className='size-full' src={TMDB_MOVIE_BACK_DROP_POSTER + movie.backdrop_path} alt="" />
      </div>

      <h1 className='mt-4 text-3xl font-bold [text-shadow:_0_2px_4px_black]'>{"Favourite"}</h1>
      <p className='mt-4'>total {totalMovies} movies</p>
      <h2 className='text-2xl mt-4 font-bold [text-shadow:_0_2px_4px_black]'>Discription</h2>
      <p className='text-wrap w-60 mt-4'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut possimus quia, alias commodi expedita non quo numquam sunt, animi sed ipsam iusto voluptates placeat quas laborum rem quam minus nulla culpa! Similique, itaque? Deleniti.</p>
    </aside>
  )
}

export default SideBar
