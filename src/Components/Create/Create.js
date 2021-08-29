import React, { Fragment,useState,useContext } from 'react';
import './Create.css';
import Header from '../Header/Header';
import {useHistory} from 'react-router-dom'
import {FirebaseContext,AuthContext} from '../../store/FirebaseContext'
const Create = () => {
  const [name,setName]=useState('')
  const [category,setCategory]=useState('')
  const [price,setPrice]=useState('')
  const [image,setImage]=useState(null)
  const {firebase} =useContext(FirebaseContext)
  const {user} =useContext(AuthContext)
  const history =useHistory()
  const date=new Date()
  const handleSubmit=()=>{
   if (name&&category&&price) {firebase.storage().ref(`image/${image.name}`).put(image).then(({ref})=>{
      ref.getDownloadURL().then((url)=>{
        console.log(url) 
        firebase.firestore().collection('products').add({
          name,category,
          price,url,
          userId:user.uid,
          createdAt:date.toDateString()
        })
        history.push('/')
      })
    })}else{
      alert("text field not completed")
    }
  }
  return (
    <Fragment>
      <Header />
      <card>
        <div className="center">
        <div className="centerDiv">
         
            <label htmlFor="fname">Name</label>
           
            <input
              className="input"
              type="text"
              value={name}
              onChange={(e)=>
                setName(e.target.value)
              }
              id="fname"
              name="Name"
              defaultValue="John"
            />
            <br />
            <label htmlFor="fname">Category</label>
            <br />
            <input
              className="input"
              type="text"
              value={category}
              onChange={(e)=>
                setCategory(e.target.value)
              }
              id="fname"
              name="category"
              defaultValue="John"
            />
            <br />
            <label htmlFor="fname">Price</label>
            <br />
            <input className="input" type="number" id="fname"       value={price}
              onChange={(e)=>
                setPrice(e.target.value)
              } name="Price" />
            <br />
          
          <br />
          <img alt="post" width="120px" height="120px" src={image ? URL.createObjectURL(image):''}></img>
       
            <br />
            <div className="inputField">
            <input onChange={(e)=>
              setImage(e.target.files[0])
            }
            type="file" />
            </div>
            <br />
            <button onClick={handleSubmit} className="uploadBtn">upload and Submit</button>
      
        </div>
        </div>
        
      </card>
      
    </Fragment>
  );
};

export default Create;
