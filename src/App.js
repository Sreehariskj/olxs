import React,{useEffect,useContext} from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom'
import {AuthContext,FirebaseContext} from './store/FirebaseContext'
import Post from './store/PostContext'
import Category from './store/CategoryContext'
import './App.css';
/**
 * ?  =====Import Components=====
 */
import Home from './Pages/Home';
import Signup from './Pages/Signup'
import Login from './Pages/Login'
import Create from './Pages/Create'
import ViewPost from './Pages/ViewPost'
import MyAds from './Pages/MyAds'
import Chats from './Pages/Chats'
import Search from './Pages/Search'
import Nav from './Components/Navbar/Navbar'
import Messager from './Components/Messager/Messager'

function App() {
  const {setUser} =useContext(AuthContext)
  const {firebase}=useContext(FirebaseContext)
  useEffect(()=>{
    firebase.auth().onAuthStateChanged((user)=>setUser(user))
  })
  return (
    <div>
    <Category>
    <Post>
    <Router>
    <Route exact path='/'>
      <Home />
    </Route>
     <Route  path='/.'>
      <Nav />
    </Route>
      <Route path='/signup'>
      <Signup />
    </Route>
      <Route path='/login'>
      <Login />
    </Route>
      <Route path='/create'>
      <Create />
    </Route>
     <Route path='/view'>
      <ViewPost />
    </Route>
     <Route path='/myads'>
      <MyAds />
    </Route>
     <Route exact path='/chat'>
      <Chats/>
    </Route>
     <Route path='/chat/user'>
      <Messager/>
    </Route>
    <Route path='/search'>
      <Search/>
    </Route>
    </Router>
    </Post>
    </Category>
    </div>
  );
}

export default App;
