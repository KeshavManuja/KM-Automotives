import { message } from "antd";
import axios from "axios";
import { useNavigate } from "react-router";

export const UserLogin = (userdata)=>async dispatch=> {
    // console.log(userdata)
    dispatch({type:'LOADING',payload:true})

    try{
        // console.log("yeh")
        let payload={name:userdata.username,password:userdata.password}
        const res = await axios.post('/api/users/login',payload)
        
        localStorage.setItem("current_user",JSON.stringify(res.data))
        message.success('Login Success')
        setTimeout(() => {
            window.location.href='/'
         
        }, 500);
        dispatch({type:'LOADING',payload:false})
    }
    catch(err){
        console.log(err)
        message.error('Something went wrong')
        dispatch({type:'LOADING',payload:false})
    }
}

export const UserRegister=(reqObj)=>async dispatch=>{
    console.log(reqObj)
    let payload={name:reqObj.username,password:reqObj.password}
    dispatch({type: 'LOADING' , payload:true})
    console.log(payload)
    try {
        await axios.post('/api/users/register' , payload)
        message.success('Registration successfull')
        setTimeout(() => {
            window.location.href='/login'
         
        }, 500);
       
        dispatch({type: 'LOADING' , payload:false})
        
    } catch (error) {
        console.log(error)
        message.error('Something went wrong')
        dispatch({type: 'LOADING' , payload:false})
    }
}