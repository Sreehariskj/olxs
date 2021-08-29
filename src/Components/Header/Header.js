import React,{useContext} from 'react';
import {AuthContext,FirebaseContext} from '../../store/FirebaseContext'
import {useHistory} from 'react-router-dom'
import './Header.css';
import OlxLogo from '../../assets/OlxLogo';
import Search from '../../assets/Search';
import Arrow from '../../assets/Arrow';
import Menu from '../../assets/Menu';
import SellButton from '../../assets/SellButton';
import SellButtonPlus from '../../assets/SellButtonPlus';

function Header() {
  const {user} =useContext(AuthContext)
  const {firebase} =useContext(FirebaseContext)
  const history= useHistory()
  const onSellClick =()=>{
    if(user){
      history.push('/create')
    }else{
      history.push('/login')
    }
  }
  const changePage=()=>{
    history.push('/.')
  }
  return (
    <div className="headerParentDiv">
      <div className="headerChildDiv">
      <div onClick={changePage} className="navbar">
      
        <div className="first-section">
          <Menu></Menu>{"    "}
          <OlxLogo></OlxLogo>
          </div>
        </div>
       
        <div onClick={()=>
        history.push('/search')} className="productSearch">
          <div className="input">
            <input
              type="text"
              placeholder="Find car,mobile phone and more..."
            />
          </div>
          <div className="searchAction">
            <Search color="#ffffff"></Search>
          </div>
        </div>
        <div className="language">
          <span> ENGLISH </span>
          <Arrow></Arrow>
        </div>
       <div className="logOut">
          {user && <span onClick={()=>{
            firebase.auth().signOut()
            history.push('/')
          }}>LogOut</span>} </div>
       <div onClick={onSellClick} className="sellMenu">
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

export default Header;
 