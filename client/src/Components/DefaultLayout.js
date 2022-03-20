import React from 'react'

function DefaultLayout(props) {
  return (
    <div>
        <div className='header box_shadow1'>
            <div className='d-flex justify-content-between'>
                <h2>KM Automotives</h2>
               
            </div>
        </div>

        <div className='content'>
            {props.children}
        </div>
    </div>
  )
}

export default DefaultLayout