import React,{useState,useContext,useEffect} from 'react';
import {FirebaseContext,AuthContext} from '../../store/FirebaseContext'

import {PostContext} from '../../store/PostContext'
import {useHistory} from 'react-router-dom'
import './MyAds.css';

function MyAds() {
 const [products,setProducts] =useState([])
 const {firebase} =useContext(FirebaseContext)
 const {setPostDetails} =useContext(PostContext)
 const history =useHistory()
 const {user}=useContext(AuthContext)
 useEffect(()=>{
if(user){
   const userId=user.uid
 
   firebase.firestore().collection('products').where('userId','==',userId).get().then((snapshot)=>{
    const allPost = snapshot.docs.map((product)=>{
      return{
      ...product.data(),
      id:product.id
      }
    })
    setProducts(allPost)
   })}
 },[user,firebase])
  return (
    <div className="adParentDiv">
      <div className="section">
        <div className="heading">
          <h3>My Ads</h3>
        </div>
       {products && <div className="cards">
         {products.map(product=>{
           return <div
            className="card"
         onClick={()=>{
           setPostDetails(product)
           history.push('/view')
         }} >
           
            <div className="image">
              <img src={product.url} alt="" />
            </div>
            <div className="content">
              <p className="rate">&#x20B9; {product.price}</p>
              <span className="kilometer">{product.category}</span>
              <p className="name"> {product.name}</p>
            </div>
            <div className="date">
              <span>{product.createdAt} </span>
            </div>
           
          </div>
         })
         }
        </div> }
      </div>
  
    </div>
  );
}

export default MyAds;