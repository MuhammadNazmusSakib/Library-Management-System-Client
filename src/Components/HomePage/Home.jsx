import React from 'react'
import Banner from './Banner'
import BookCategories from './BookCategories'
import useDynamicTitle from '../Hooks/useDynamicTitle'
import AboutUs from './AboutUs'
import JoinBookClub from './JoinBookClub'
import CulturalAndArtisticLibrary from './CulturalAndArtisticLibrary'

const Home = () => {
  useDynamicTitle("Home | Academia Library")

  return (
    <div>
        <Banner/>
        <AboutUs/>
        <JoinBookClub/>
        <CulturalAndArtisticLibrary/>
        <BookCategories/>
    </div>
  )
}

export default Home