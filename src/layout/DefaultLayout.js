import React, { createContext } from 'react'
import AppContent from '../component/Content/Content'
import Header from '../component/Header/header'
import Sidebar from '../component/Sidebar/sidebar'
import { FunctionProvider } from '../context/FunctionContext'
import './DefaultLayout.css'


const DefaultLayout = () => {
  return (
      <FunctionProvider>
          <div className='layout'>
          <Sidebar />
          <div className="wrapper">
            <Header />
            <div className="body">
              <AppContent />
            </div>
          </div>
        </div>
      </FunctionProvider>


  )
}

export default DefaultLayout

