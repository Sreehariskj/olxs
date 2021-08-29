import React,{useEffect,useState,useContext} from 'react';
import {PostContext} from '../../store/PostContext'
import {FirebaseContext} from '../../store/FirebaseContext'
import './View.css';
function View() {
  const [userDetails,setUserDetails]=useState()
  const {postDetails}=useContext(PostContext)
  const {firebase} =useContext(FirebaseContext)
  useEffect(()=>{
    if(postDetails){
    const {userId}=postDetails
    firebase.firestore().collection('user').where('id','==',userId).get().then((res)=>{
      res.forEach(doc=>{
        setUserDetails(doc.data())
      })
    })}
  },[postDetails,firebase])
  return (
    <div className="viewParentDiv">
      {postDetails && <div className="imageShowDiv">
       <img
          src={postDetails.url}
          alt=""
        />
      </div>}
      <div className="rightSection">
       {postDetails && <div className="productDetails">
          <p>&#x20B9; {postDetails.price} </p>
          <span>{postDetails.name}</span>
          <p>{postDetails.category}</p>
          <span>{postDetails.createdAt}</span>
        </div> }
        {userDetails && <div className="contactDetails">
          <p>Seller details</p>
          <p>{userDetails.username}</p>
          <p>{userDetails.phone}</p>
        </div> }
      </div>
    </div>
  );
}
export default View;
