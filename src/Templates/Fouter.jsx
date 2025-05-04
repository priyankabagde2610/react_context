import {useContext} from "react";
import {myContext} from "../App";

function Fouter()
{
    const{fullName,userId,emailId,contactNo}=useContext(myContext);

    return <div style={{backgroundColor:"black",color:"white"}}>
        <h1>Fouter</h1>
        <h1>FullName: {fullName}</h1>
        <h1>userId: {userId}</h1>
        <h2>emailId:{emailId}</h2>
        <h2>contactNo:{contactNo}</h2>
        
    </div>
}

export default Fouter;