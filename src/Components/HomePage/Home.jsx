import React from 'react'
import Banner from './Banner'
import BookCategories from './BookCategories'
import useDynamicTitle from '../Hooks/useDynamicTitle'
import AboutUs from './AboutUs'

const Home = () => {
  useDynamicTitle("Home | Academia Library")

  return (
    <div>
        <Banner/>
        <BookCategories/>
        <AboutUs/>
    </div>
  )
}

export default Home