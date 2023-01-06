import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Header } from '../common/Header'
import Home from '../components/home/Home'
import { SideContent } from '../components/side/SideContent'

export const Pages = () => {
  return (
    <>
      <div className="main-div">
        <div className="side">
          <SideContent />
        </div>
        <main>
          <BrowserRouter>
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </BrowserRouter>
        </main>
      </div>
    </>
  )
}
