import React,{useState,useContext,useEffect} from 'react';
import {FirebaseContext,AuthContext} from '../../store/FirebaseContext'
import {PostContext} from '../../store/PostContext'
import {useHistory} from 'react-router-dom'
import Heart from '../../assets/Heart';
import SellButton from '../../assets/SellButton';
import SellButtonPlus from '../../assets/SellButtonPlus';
import './Post.css';

function Posts() {
 const [products,setProducts] =useState([])
 const {firebase} =useContext(FirebaseContext)
 const {setPostDetails} =useContext(PostContext)
 const {user} =useContext(AuthContext)
 const history =useHistory()
 const onSellClick =()=>{
    if(user){
      history.push('/create')
    }else{
      history.push('/login')
    }
  }
 useEffect(()=>{
   firebase.firestore().collection('products').get().then((snapshot)=>{
    const allPost = snapshot.docs.map((product)=>{
      return{
      ...product.data(),
      id:product.id
      }
    })
    setProducts(allPost)
   })
 },[firebase])
  return (
    <div className="postParentDiv">
      <div className="moreView">
        <div className="headings">
          <span>Quick Menu</span>
          <span>View more</span>
         
        </div> 
       <div className="cards">
         {products.map(product=>{
           return <div
            className="card"
         onClick={()=>{
           setPostDetails(product)
           history.push(`/view/${product.name}`)
         }} >
            <div className="favorite">
             <Heart></Heart>
            </div>
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
        </div> 
      </div>
      <div className="recommendations">
        <div className="heading">
          <span>Fresh recommendations</span>
        </div>
        <div className="cards">
          <div className="card">
            <div className="favorite">
              <Heart></Heart>
            </div>
            <div className="image">
              <img src="../../../Images/cooper.jpeg" alt="" />
            </div>
            <div className="content">
              <p className="rate">&#x20B9; 800000</p>
              <span className="kilometer">Four Wheeler</span>
              <p className="name"> MINI COOPER</p>
            </div>
            <div className="date">
              <span>29/4/2021</span>
            </div>
          </div>
          
          <div className="card">
            <div className="favorite">
              <Heart></Heart>
            </div>
            <div className="image">
              <img src="../../../Images/R15V3.jpg" alt="" />
            </div>
            <div className="content">
              <p className="rate">&#x20B9; 250000</p>
              <span className="kilometer">Two Wheeler</span>
              <p className="name"> YAMAHA R15V3</p>
            </div>
            <div className="date">
              <span>10/5/2021</span>
            </div>
          </div>
        </div>
      </div>
      <div className="float-btn">
         <div onClick={onSellClick} className="sellMenuu">
          <SellButton></SellButton>
          <div className="sellMenuContent">
            <SellButtonPlus></SellButtonPlus>
            <span>SELL</span>
          </div>
        </div> 
            </div>
    </div>
  );
}

export default Posts;
