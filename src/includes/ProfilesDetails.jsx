import { useContext } from "react";
import{ myContext} from "../App";

function ProfilesDetails()
{
    const {fullName,username,age,profileImg}=useContext(myContext);

    return <div>
        <h1>ProfileDetails</h1>
        <h1>FullName:{fullName}</h1>
        <h2>username:{username}</h2>
        <h2>age:{age}</h2>
        <img src={profileImg} width="500px"></img>
    </div>
}
export default ProfilesDetails;