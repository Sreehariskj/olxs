import React from 'react'
import {useHistory} from 'react-router-dom'
import './Chats.css'

function Chats(){
  const history=useHistory()
  return (
    <div className="chat-body">
    <div className="chat-head">
    <div className="left">
      <div onClick={()=>history.push('/.')} className="first">
    <i class="fa fa-arrow-left fa-2x" aria-hidden="true"></i>
    </div>
     <div className="second">
    <span>Chats</span>
    </div>
    </div>
     <div className="right">
      <div className="first">
    <i class="fa fa-search fa-2x" aria-hidden="true"></i>
    </div>
     <div className="second">
    <span>Edit</span>
    </div>
    
    </div>
    </div>
    <div onClick={()=>history.push('chat/user')} className="chat-card">
      <div className="first">
       <img width="50rem" height="50rem" src="https://statics.olx.in/external/base/img/avatar_4.png" alt="ime"/>
       <span>Sreehari</span>
      </div>
      <div className="second">
       <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
      </div>
    </div>
      <hr/>
    </div>
    )

}
export default Chats;