// post/[id] dynamic route
import { use } from 'react'

async function getPost(id) {
    let post = await fetch(`https://dummyjson.com/posts/${id}`)

    return post.json()
}

export default function Page({params}) {
    let post = use(getPost(params.id))

    return <div>
        <p>{post.title}</p>
        <br/>
        <p>{post.body}</p>
        </div>
}