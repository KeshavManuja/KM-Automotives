import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import DefaultLayout from "../Components/DefaultLayout";
import { getAllCars } from "../Redux/Actions/Action";
import { Button, Row, Col } from "antd";
import Loader from "../Components/Loader";
import { Link } from "react-router-dom";

function Home() {
  const { cars } = useSelector((state) => state.CarReducer);
  const {loading} = useSelector((state)=> state.AlertReducer);
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllCars());
  }, []);
  return (
    <DefaultLayout>
      {loading===true && (<Loader/>)}
      <Row justify="center" gutter={16} className="mt-5">
        {cars.map((car,i) => {
          return (
            <Col key={i} lg={5} sm={24} xs={24}>
              <div className="car box_shadow1 p-2">
                <img alt="carpic" src={car.image} className="carimg" />

                <div className="car-content d-flex align-items-center justify-content-between" >
                  <div>
                    <p> {car.name}</p>
                    <p>{car.rentPerHour} Rent per hour/-</p>
                  </div>

                  <div >
                  <button className="btn1 mr-2"><Link to={`/booking/${car._id}`}>Book Now</Link></button>
                  </div>
                </div>
              </div>
            </Col>
          );
        })}
      </Row>
    </DefaultLayout>
  );
}

export default Home;
