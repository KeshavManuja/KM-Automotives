import React from 'react'
import { useSearchParams } from 'react-router-dom';
import DefaultLayout from '../Components/DefaultLayout'

function BookingCar() {
  const [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams)
  // console.log(match)
  return (
    <DefaultLayout>
      <h2>BookingCar</h2>
      {/* <h2>{match.params.carid}</h2> */}
      
      </DefaultLayout>
  )
}

export default BookingCar