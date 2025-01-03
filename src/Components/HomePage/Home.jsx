import React from 'react'
import Banner from './Banner'
import BookCategories from './BookCategories'
import useDynamicTitle from '../Hooks/useDynamicTitle'
import AboutUs from './AboutUs'
import JoinBookClub from './JoinBookClub'

const Home = () => {
  useDynamicTitle("Home | Academia Library")

  return (
    <div>
        <Banner/>
        <BookCategories/>
        <AboutUs/>
        <JoinBookClub/>
    </div>
  )
}

export default Home