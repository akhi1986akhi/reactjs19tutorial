import React from 'react'
import { Link, Route,Routes  } from 'react-router-dom'
import Profile from './Profile'
import Settings from './Settings'


export default function Dashboard() {
  return (
    <>
    
    <ul>
        <li>
            <Link to="/dashboard/profile">Profile</Link>
           
        </li>
        <li> <Link to="/dashboard/settings">Settings</Link></li>
    </ul>

    <Routes>

        <Route path="profile" element={<Profile/>}></Route>
        <Route path="settings" element={<Settings/>}></Route>
    </Routes>
    </>
  )
}
