import React from 'react'
import AppHeader from '../AppLayout'

const AppLayout = props => {
  return (
    <div>
      <AppHeader />
      {props.children}
    </div>
  )
}

export default AppLayout
