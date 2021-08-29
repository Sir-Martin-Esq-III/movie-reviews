import React, { useState, useEffect, useContext } from 'react'
import AddCommentComp from './add-comment/AddCommentComp'
import { loggedInContext } from '../../LoggedInContext'


interface Props {
    reviews:[]
    loggedIn:boolean
    sendCommentsToServer: (newComment:string[][])=>void
}

export const Comments:React.FC<Props> = ({reviews,sendCommentsToServer,loggedIn}) => {

    const {currentUser}=useContext(loggedInContext)
    //Need to fix that any
    const [comments, setcomments] = useState<string[][]>(reviews)
    useEffect(() => {
        setcomments(reviews)
    }, [reviews])


    useEffect(() => {
        sendCommentsToServer(comments)
    }, [comments])


     const updateComments=(comment:string)=>{
        if (currentUser!==undefined){
        setcomments([...comments,[currentUser,comment]])
        }
     }
    
    return (
        <div className="review-container">
                {comments.length<1&&<h3>Huh, There are now reviews here, Be the first?</h3>}
                {comments.map((rev)=>
                    <div className="reviews" key={rev[0]}>
                        <div className="reviewLeft">
                            <h3>{rev[0]}</h3>
                        </div>
                        <div className="reviewsRight">
                            <p>{rev[1]}</p>
                        </div>
                    </div>
                )}
                {/* PLEASE REMOVE THIS WITH SOMETHING DECENT FOR ONCE */}
                <h1>{loggedIn?<AddCommentComp updateComments={updateComments}/>:"please log in to comment"}</h1>
            </div> 
    )
}

export default Comments
