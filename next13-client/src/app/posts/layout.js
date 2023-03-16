// /posts route
// imports...
import { use } from 'react'
import Link from 'next/link'

//functions...
async function getPosts() {
  let posts = await fetch('https://dummyjson.com/posts?limit=4')

  return posts.json()
}

// html export
export default function Layout({ children }) {
  let { posts } = use(getPosts())
  // let posts = use(getPosts())
  // console.log(posts)

  // return <div> Post page </div>
  return (
  <div>
    <ul>
      {posts.map((p) => (
        <li key={p.id}>
          <Link href={`/posts/${p.id}`}>{p.title}</Link>
        </li>
      ))}
    </ul>

    <br/>
    <div>{children}</div>
  </div>
  );
}
  