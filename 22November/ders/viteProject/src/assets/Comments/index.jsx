import React from 'react'

function index({id,name,email,postId,body}) {
  return (
    <div>
        <ul>
        <li>{id}</li>
        <li>{name}</li>
        <li>{email}</li>
        <li>{postId}</li>
        <li>{body}</li>
        </ul>

        
    </div>
  )
}

export default index