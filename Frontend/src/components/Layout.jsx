import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import ChatBotButton from './ChatBotButton'


export default function Layout() {
  return (
    <>
      <Header/>
      <Outlet/>
      <ChatBotButton/>
      <Footer/>
    </>
  )
}