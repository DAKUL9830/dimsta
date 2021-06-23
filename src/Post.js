//import React from 'react';
//import Me from './profile.png';
import React, {useState,useEffect} from 'react';
import  './Post.css';
import {db} from './firebase.js'
import Avatar from "@material-ui/core/Avatar";
import myAvatar from './myava.jpg';
import firebase from 'firebase'


const Post = ({postId,user,username,caption,imageURL}) => {
    const [comments,setComments]=useState([]);
    const [comment,setComment]=useState('');

    useEffect(()=>{
        let unsubscribe;
        if(postId){
            unsubscribe=db
            .collection("posts")
            .doc(postId)
            .collection("comments")
            .orderBy("timestamp","desc")
            .onSnapshot((snapshot)=>{
             setComments(snapshot.docs.map((doc)=>
            doc.data()
          
        ));
        })
      }
      return()=>{
        unsubscribe() 
      }
      },[postId]);

      const postComment=(event)=>{
          event.preventDefault()
          db.collection("posts").doc(postId).collection("comments").add({
              timestamp:firebase.firestore.FieldValue.serverTimestamp(),
              text:comment,
              username:user.displayName
          });
          setComment('');

      }
    
    return (
        <div className="Post">
            <div className="Post__header">
            <Avatar
            className="Post__avatar"
            scr={myAvatar}
            alt="my Avatar"
            
            />
            <h2>{username}</h2>

           </div>
            <img className="Post__image" src={imageURL} alt='Me...'/>
    <h4 className="Post__text"><strong>{username}</strong> {caption}</h4>
         <div className="post_Comments">
           {
               comments.map((comment)=>(
                   <p>
               <strong> {comment.username} </strong>{comment.text}
               </p>
                   ))
           }
         </div>
         {user&& (
          <form className="post_CommentBox">
             {/* <div  className="post_input"> */}
                <input
                className="post_input"
                type="text"
                placeholder="Add a comment..."
                value={comment}
                onChange={(e)=>setComment(e.target.value)}
                />
             
             
                 <button  
                 className="post_button"
                 disabled={!comment}
                 type="submit"
                 onClick={postComment}
                 >Post </button>
                 
            


          </form>

         )} 
        </div>
    )
}

export default Post
