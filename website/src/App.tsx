import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Global } from '@emotion/react'
import { routes } from '@routes/index'
import { globalStyles } from '@styles/global'
import { BASENAME } from './constants'

const basename = process.env.NODE_ENV === 'development' ? '' : BASENAME

const App: React.FC = () => {
  const router = createBrowserRouter(routes, {
    basename,
  })

  return (
    <>
      <Global styles={globalStyles} />
      <RouterProvider router={router} />
    </>
  )
}

export default App
