import React from "react";
import '../style/userinfo.css';
function UserInfo ({user}){
    return(
        <div>

        <div className="container">
        <div className="usercard2"> 
        <img className="imageofuser2" src={user.imageUrl} alt="user"/>
        <p className="user2name">Name: {user.name}</p>
        <p className="user2email">Email: {user.email}</p>
        <p className="user2role">Role: {user.role}</p>
        </div>
        </div>

       

        </div>
        
        
    );

    
}
export default UserInfo;