import React ,{useEffect} from "react";
import axios from "axios";

 function  Admin(){

 useEffect(async() =>{
    const response = await axios.get("http://localhost:3001/theaters")
    console.log(response.data)
},[])


    
    return(<>

<button className=" btn btn-primary" >Add theater</button>

 
    </>)
}
export default Admin;