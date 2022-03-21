import React from 'react'

import {Row,Col,  Form , Input} from "antd"
import { Link } from 'react-router-dom'
import { useDispatch ,useSelector} from 'react-redux'
import { UserRegister } from '../Redux/Actions/UserActions';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import Loader from './Loader';
// ..
AOS.init();

function Register() {
  const dispatch = useDispatch()
  const {loading} = useSelector((state)=> state.AlertReducer);
  function onSubmit(values) {
    dispatch(UserRegister(values))
    // console.log(values)
  }
  return (
    
    <div className='login'>
         {loading===true && (<Loader/>)}

      <Row gutter={16}  className='d-flex align-items-center p-5'>
        <Col lg={16} >
          <img data-aos="slide-left" data-aos-duration="1000" src='https://www.wallpaperup.com/uploads/wallpapers/2014/01/09/220717/972047dab51b7459a32c55c2abc5af11.jpg' width="90%" alt='carImage'/>
          <i><h1 className='login-name'>KM Automotives</h1></i>
        </Col>

        <Col lg={8}>
          <Form layout='vertical' className='login-form p-5' onFinish={onSubmit}>
            <h1 >Register</h1>
            <hr/>
              <Form.Item name='username' label='Username' rules={[{ required: true, message: 'Please input your username!' }]}>
                <Input/>
              </Form.Item>

              <Form.Item name='password' label='Password' rules={[{ required: true, message: 'Please input your password!' }]}>
                <Input/>
              </Form.Item>

              <Form.Item name='confirm-password' label='Confirm-Password' rules={[{ required: true, message: 'Please input your password!' }]}>
                <Input/>
              </Form.Item>

              <button className='btn1 '>Register</button>
              {/* <br/> */}

              <Link to="/login" className='ml-4 mt-4 mb-5'>Click here to Login</Link>
          </Form>
        </Col>
      </Row>

    </div>
  )
}

export default Register