import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPosts, showPosts } from './postsSlice'

export default function Posts() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getPosts({ limit: 10 }))
  }, [dispatch])
  const allPosts = useSelector(showPosts)

  return (
    <div>
      <h1>Posts</h1>
      {allPosts.map((post) => {
        return (
          <div key={post.id}>
            <details>
              <summary>{post.title}</summary>
              {post.body}
            </details>
          </div>
        )
      })}
    </div>
  )
}
