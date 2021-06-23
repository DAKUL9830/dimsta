import React, {useState,useEffect} from 'react';
import './App.css';
import Post from './Post.js'
// import Me from './profile.png';
// import LV from './lasvegas.jpg';
import {db,auth} from './firebase.js'
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import {Button,Input} from '@material-ui/core';
import ImageUpload from './ImageUpload.js'
//import InstagramEmbed from 'react-instagram-embed';

function getModalStyle() {
  const top = 50;
  const left = 50;       

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 350,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function App() {
  const classes=useStyles();
  const [openSignIn,setOpenSignIn]=useState(false);
  const [modalStyle] = useState(getModalStyle);
  const [posts,setPosts]=useState([]);
  const [open,setOpen]=useState(false);
  const [username,setUsername]=useState('');
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const [user,setUser]=useState(null);
  //useEffect->  runs a pience of code based on specific condition
   useEffect(()=>{
     const unsubscribe=auth.onAuthStateChanged((authUser)=>{
        if(authUser){
          //user has logged in..
          console.log(authUser);
          setUser(authUser)
      }else{
        //user has logged out...
        setUser(null)
      }
     })
     return ()=>{
       unsubscribe();
     }
   },[user,username])

      
  useEffect(()=>{
    db.collection('posts').orderBy('timestamp','desc').onSnapshot(snapshot=>{
     //every time a new post add,this code fires
     setPosts(snapshot.docs.map(doc=>({
       id:doc.id,
       post:doc.data()
      })
    ));
    })
   
  },[]);

  const signUp=(event)=>{
 event.preventDefault();
auth.createUserWithEmailAndPassword(email,password).
then((authUser)=>{
   return authUser.user.updateProfile({
    displayName:username,
  })
})
.catch((error)=>alert(error.message))
setOpen(false)
  }

  const signIn=(event)=>{
    event.preventDefault();
   auth.signInWithEmailAndPassword(email,password)
    .catch((error)=>alert(error.message))
    setOpenSignIn(false)
     }
  return (
    <div className="App">
      {/* <div className='imageupl'>
      {user?.displayName ? (
      <ImageUpload username={user.displayName}/>
      ):(
      <h3>Sorry you need to log in to upload</h3>

      )}
      </div> */}
      
      
      <Modal
        open={open}
        onClose={() =>setOpen(false)}
       
      >
        <div style={modalStyle} className={classes.paper}>
      <form className='app__signUp'> 
        <center className="app__header">
        <h1>DIMSTA</h1>
        </center>
        
         <Input
         type='text'
         placeholder='username'
         value={username}
         onChange={(e)=>setUsername(e.target.value)}
         />
        
         <Input
          type='text'
          placeholder='email'
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
         />
         
         <Input
          type='password'
          placeholder='password'
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
         />
          
         <Button onClick={signUp}>Sign up</Button>
         </form> 
       </div>
      </Modal> 
      <Modal
        open={openSignIn}
        onClose={() =>setOpenSignIn(false)}
       
      >
        <div style={modalStyle} className={classes.paper}>
      <form className='app__signUp'> 
        <center className="app__header">
        <h1>DIMSTA</h1>
        </center>
        
         
        
         <Input
          type='text'
          placeholder='email'
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
         />
         
         <Input
          type='password'
          placeholder='password'
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
         />
          
         <Button onClick={signIn}>Sign in</Button>
         </form> 
       </div>
      </Modal> 
      <div className="app__header">
        <h1>DIMSTA</h1>
      
      {user?
      (<Button  onClick={()=>auth.signOut()}>Log out</Button>)
      :
      ( <div className="logIn">
      <Button  onClick={()=>setOpen(true)}>Sign up</Button>
      <Button  onClick={()=>setOpenSignIn(true)}>Sign in</Button>
      </div>
      )
        
       }
        </div>
       <div className='App_post'>
       {
        posts.map(({id,post})=>(
          <Post key={id} postId={id} user={user} username={post.username} caption={post.caption} imageURL={post.imageURL} />
        ))
      }
    
       
      {/* <InstagramEmbed
  url='https://www.instagram.com/p/CQCncbVHYzeQzBb4JcDGSLhX9T4XEDKeYb5rKw0/'
   clientAccessToken='123|456'
  maxWidth={320}
  hideCaption={false}
  containerTagName='div'
  protocol=''
  injectScript
  onLoading={() => {}}
  onSuccess={() => {}}
  onAfterRender={() => {}}
  onFailure={() => {}}
/> */}
  </div>
      <div className='imageupl'>
      {user?.displayName ? (
      <ImageUpload username={user.displayName}/>
      ):(
      <h3>Sorry you need to log in to upload</h3>

      )}
      </div>
      
    </div>
    
  );
}

export default App;
