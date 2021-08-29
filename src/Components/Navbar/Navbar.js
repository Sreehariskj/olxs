import React,{useContext} from 'react'
import {AuthContext,FirebaseContext} from '../../store/FirebaseContext'
import Menu from '../../assets/Menu';
import OlxLogo from '../../assets/OlxLogo';
import './Navbar.css'
import {useHistory} from 'react-router-dom'
export default function Nav(){
  const history=useHistory()
  const loginLink=()=>{
    history.push('/login')
  }
  const {user}=useContext(AuthContext)
  const {firebase}=useContext(FirebaseContext)
  const onSellClick=()=>{
    if(user){
      history.push('/create')
    }else{
      history.push('/login')
     
    }
  }
   const onMyAdsClick=()=>{
    if(user){
      history.push('/myads')
    }else{
      history.push('/login')
     
    }
  }
  const onChatsClick=()=>{
    if(user){
      history.push('/chat')
    }else{
      history.push('/login')
     
    }
  }
  
  return(
    <div className="navBody">
    <div className="navChild" onClick={()=>history.push('/')}>
    <Menu />{"    "}
    <OlxLogo/>
    </div>
    <div className="navProfile">
     <img width="78rem" height="78rem" src="https://statics.olx.in/external/base/img/avatar_empty_state.png" alt="avatar"></img>
     <div className="loginColn">
     <h5>{user ? `Hello, ${user.displayName}` :'Enter to your account'}</h5>
     
    {user ?<h6>View and edit profile</h6> : <h6 onClick={loginLink}>Log in to your account</h6>}
   
     </div>
    </div>
      <hr />
      <div className="navOpt">
      
     <div onClick={onSellClick} className="option">
       <i class="fa fa-camera fa-2x" aria-hidden="true"></i>
       <span>Start selling</span></div>
     <div onClick={onMyAdsClick} className="option">
    <i  class="fa fa-sticky-note fa-2x" aria-hidden="true"></i>
       <span>My Ads</span></div>
 
     <div onClick={onChatsClick} className="option">
   <i class="fa fa-comment fa-2x" aria-hidden="true"></i>
       <span>Chats</span></div>
   <a href="https://help.olx.in/hc/en-us">  
   <div  className="option">
  <i class="fa fa-question-circle fa-2x" aria-hidden="true"></i>
       <span>Help</span></div>   </a>
     
          {user ? <button onClick={()=>{
            firebase.auth().signOut()
            history.push('/')
          }}>LogOut</button> : <button onClick={loginLink}>Login</button>} 
      </div>
    </div>
    )
}
