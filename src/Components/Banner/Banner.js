import React,{useContext} from 'react';
import './Banner.css';
import {CategoryContext} from '../../store/CategoryContext'
import {useHistory} from 'react-router-dom'
function Banner() {
  const {setCategoryDetails} =useContext(CategoryContext)
  const history =useHistory()
  return (
    <div className="bannerParentDiv">
      <div className="bannerChildDiv">
       
        <div className="banner">
          <img
            src="../../../Images/banner copy.png"
            alt=""
          />
        </div>
        <div className="bannerCategory">
    <span>Browse category</span>
    <div className="categoryCards">
    <div onClick={()=>{
      setCategoryDetails("Car")
      history.push('/search')
    }} className="categoryBox">
    <img width="50" height="50" src="https://statics.olx.in/olxin/category_icons/v4/category_5_2x.png" alt="car"></img>
    <p>cars</p>
    </div>
    <div onClick={()=>{
      setCategoryDetails("Mobile")
      history.push('/search')
    }} className="categoryBox">
    <img width="50" height="50" src="https://statics.olx.in/olxin/category_icons/v4/category_1411_2x.png" alt="mobile"></img>
    <p>mobiles</p>
    </div>
    <div onClick={()=>{
      setCategoryDetails("Bike")
      history.push('/search')
    }} className="categoryBox">
    <img width="50" height="50" src="https://statics.olx.in/olxin/category_icons/v4/category_2198_2x.png" alt="bike"></img>
    <p>bikes</p>
    </div>
    <div  onClick={()=>{
      setCategoryDetails("Speaker")
      history.push('/search')
    }} className="categoryBox">
    <img width="50" height="50" src="https://statics.olx.in/olxin/category_icons/v4/category_99_2x.png" alt="electronic"></img>
    <p>electronics</p>
    </div>
    <div onClick={()=>{
      setCategoryDetails("House")
      history.push('/search')
    }} className="categoryBox">
    <img width="50" height="50" src="https://statics.olx.in/olxin/category_icons/v4/category_3_2x.png" alt="properties"></img>
    <p>properties</p>
    </div>
    </div>
    </div>
      </div>
    </div>
  );
}

export default Banner;
