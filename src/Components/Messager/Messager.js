import React,{useContext,useState,useRef} from 'react'
import {FirebaseContext,AuthContext} from '../../store/FirebaseContext'
import {useCollectionData} from 'react-firebase-hooks/firestore'
import Message from '../Message/Message'
import './Messager.css'
function Messager() {
  const [message,setMessage]=useState("")
  const {firebase} =useContext(FirebaseContext)
  const {user} =useContext(AuthContext)
  const firestore =firebase.firestore()
  const messagesRef=firestore.collection('messages')
  const query=messagesRef.orderBy('createdAt').limit(25)
  const [messages]=useCollectionData(query,{idField:"id"})
  const dummy=useRef()
  const sendMessage=async (e)=>{
    e.preventDefault()
    
    await messagesRef.add({
      user:user.displayName,
      text: message,
      createdAt: new Date().toLocaleString(),
      uid:user.uid
    })
    
    setMessage("")
    dummy.current.scrollIntoView({behavior:'smooth'})
  }
  
    return (
        <div className="messager-body">
            <div className="header">
             <div className="first">
               <img width="35px" height="35px" src="https://statics.olx.in/external/base/img/avatar_4.png" alt="profile"/>
              <span>Sreehari</span>
            </div>
            <div className="second">
             <i class="fa fa-flag-checkered" aria-hidden="true"></i>
             <i class="fa fa-phone" aria-hidden="true"></i>
             <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
            </div>
            </div>
            <div className="chat-window">
              {messages && messages.map((msg)=><Message key={msg.id} message={msg} user={user}/>)}
              <span ref={dummy}></span>
            </div>
           <form onSubmit={sendMessage}>
      
              <i class="fa fa-paperclip" aria-hidden="true"></i>
              <input value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type a message"/>
             <button> <i class="fa fa-paper-plane " aria-hidden="true"></i> </button>
            
           </form>
        </div>
    )
}

export default Messager