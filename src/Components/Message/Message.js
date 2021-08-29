import React from 'react'
 
 function Message({message,user}){
   const {uid,text} =message
   const messageClass = uid === user.uid ? "send" :"received"
   return(
     <div className={`message ${messageClass}`}>
     <p>{text}</p>
     </div>
     )
 }
 export default Message;