import axios from "axios";

export const getAllCars =()=>async dispatch=>{
    dispatch({type:'LOADING',payload:true})

    try{
        console.log("yeh")
        const cars = await axios.get('http://localhost:5000/api/cars/getallcars')
        dispatch({type:"GET_ALL_CARS",payload:cars.data})
        dispatch({type:'LOADING',payload:false})
    }
    catch(err){
        console.log(err)
        dispatch({type:'LOADING',payload:false})
    }
}