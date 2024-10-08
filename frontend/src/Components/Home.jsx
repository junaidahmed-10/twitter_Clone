import React, { useEffect } from 'react'
import LeftSideBar from './LeftSideBar'
// import Feed from './Feed'
import RightSideBar from './RightSideBar'
import { Outlet, useNavigate } from 'react-router-dom'
// import useGetProfile from '../Hooks/useGetProfile'
import { useSelector } from 'react-redux'
import useOtherUser from '../Hooks/useOtherUser'
import useGetMyTweets from '../Hooks/useGetMyTweets'


function Home() {

  const { user, otherUsers } = useSelector(store => store.user)
  const navigate = useNavigate()


  useEffect(()=>{
    if (!user) {
      navigate('/login')
    }
  }, [])

  //Custom Hokos
  useOtherUser(user?._id)
  useGetMyTweets(user?._id)

  return (
    <div className='flex justify-between mx-auto w-[85%]'>
      <LeftSideBar />
      {/* <Feed /> */}
      <Outlet />
      <RightSideBar otherUsers={otherUsers}/>
    </div>
  )
}

export default Home