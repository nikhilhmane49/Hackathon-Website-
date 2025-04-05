import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import ChatBotButton from './ChatBotButton'



export default function Layout() {
  return (
    <>

      <Outlet/>
      <ChatBotButton/>
      <Footer/>
    </>
  )
}