import React from 'react'
import { Outlet } from 'react-router-dom'
import ProfileBar from './ProfileBar'


const Profile = () => {
    return (
        <div className='bg-gray-100'>
            <div className="max-w-7xl mx-auto px-1 sm:px-3 lg:px-6 flex flex-col lg:flex-row">
                {/* Sidebar */}
                <div className="lg:w-1/5 border-r-2 mt-8">
                    <ProfileBar />
                </div>

                {/* Main Content */}
                <div className="lg:w-4/5">
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default Profile