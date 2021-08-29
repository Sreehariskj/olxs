import React,{useState,useContext,useEffect} from 'react'
import {FirebaseContext} from '../../store/FirebaseContext'
import {PostContext} from '../../store/PostContext'
import {CategoryContext} from '../../store/CategoryContext'
import {useHistory} from 'react-router-dom'
import Heart from '../../assets/Heart'
import './Search.css'

export default function Search(){
  const [search,setSearch] =useState('')
  const [products,setProducts] =useState([])
  const [filtered,setFiltered] =useState([])
  const {firebase} =useContext(FirebaseContext)
  const {setPostDetails} =useContext(PostContext)
  const {categoryDetails,setCategoryDetails} =useContext(CategoryContext)
  const history =useHistory()
  
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
  useEffect(()=>{
    if(categoryDetails){
    setSearch(categoryDetails)
  }
    setFiltered(products.filter(product=>
    
    product.category.toLowerCase().includes(search.toLowerCase()) ||
      product.name.toLowerCase().includes(search.toLowerCase())
    ))
  },[search,products,categoryDetails])

 return(
    <div className="search-body">
    <div className="search-head">
      <i class="fa fa-arrow-left fa-2x" aria-hidden="true" onClick={()=>{
      
      history.push('/')}}></i>
    <span>Search</span>
    </div>
    <div className="search-box">
    <input type="text" placeholder="Search for your favorite car" value={search}
    onChange={(e)=>setSearch(e.target.value)} onClick={()=>setCategoryDetails(null)}
    ></input>
    </div>
   {search &&  <div className="filter">
    <div className="filterCards">
     {!categoryDetails && filtered.length === 0 ? <div><span>Oops... we didn't find anything that matches this search :</span>
     <img width="100" src="https://statics.olx.in/external/base/img/noResults.png" alt=""></img>
     </div> :filtered.map(product =>{
        return <div className="filterCard"
        onClick={()=>{
        setPostDetails(product)
        history.push(`/view/${product.name}`)}}>
            
            <div className="image">
              <img src={product.url} alt="" />
            </div>
            <div className="contents">
            <div className="favorite">
              <Heart></Heart>
            </div>
              <div className="content">
              <h5 className="rate">&#x20B9; {product.price}</h5>
              <span className="kilometer">{product.category}</span>
              <p className="name">{product.name}</p>
              </div>
            <div className="date">
              <span>{product.createdAt}</span>
            </div>
            </div>
          </div>})}
          </div>
    </div>}
    </div>
    )
}