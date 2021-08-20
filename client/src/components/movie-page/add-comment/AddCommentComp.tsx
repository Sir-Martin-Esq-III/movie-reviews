import { setMaxListeners } from 'process'
import React, { ReactElement,useState } from 'react'


interface Props {
    //Remove ?:any
    updateComments?:any    
}

export default function AddCommentComp({updateComments}: Props): ReactElement {
    const [comment, setcomment] = useState("")

    const submitHandler=(e: React.MouseEvent<HTMLButtonElement, MouseEvent>)=>{
        e.preventDefault()
        const commentObj={
            id:5,
            username:"Martin Wat",
            userRating:69420,
            ReviewContent:comment
        }
        updateComments(commentObj)
    }
    return (    
        <div className="reviews">
            <textarea value={comment} placeholder="Add your comment!" onChange={(e)=>setcomment(e.target.value)}></textarea>
            <button onClick={(e)=>{submitHandler(e)}}>Submit!</button>
            <p>{comment}</p>
        </div>
    )
}
