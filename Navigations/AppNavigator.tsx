import React from 'react'
import Dashboard from '../pages/Dashboard';
function AppNavigator(props) {
  // console.log(props)
  return (
    <Dashboard user={props}/>
  )
}

export default AppNavigator