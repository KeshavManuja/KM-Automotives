import React from 'react'
import { useSelector } from 'react-redux'
import DefaultLayout from '../Components/DefaultLayout'

function Home() {
  const {cars} = useSelector(state=>state.CarReducer)
  return (
    <DefaultLayout>
        <h2>Home</h2>
        <h1>The length of cars array is {cars.length}</h1>
    </DefaultLayout>
  )
}

export default Home