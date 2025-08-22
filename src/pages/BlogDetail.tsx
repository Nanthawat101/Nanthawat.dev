import React from 'react'
import { blogPosts } from '../data/blogs'
import CommentsWidget from '../components/CommentsWidget'

export default function BlogDetail({ id }: { id: string }) {
  const post = blogPosts.find(x => x.id === id)
  if (!post) return (
    <article className="prose prose-neutral max-w-none">
      <a href="#/blogs" className="no-underline text-sm">← Back to Blog</a>
      <h1>Post not found</h1>
    </article>
  )
  return (
    <article className="prose prose-neutral max-w-none">
      <a href="#/blogs" className="no-underline text-sm">← Back to Blog</a>
      <h1>{post.title}</h1>
      <p className="text-neutral-500 text-sm">{new Date(post.date).toLocaleDateString()} · {post.read} read</p>
      {post.cover && <img src={post.cover} alt="Cover" className="rounded-2xl w-full" />}\n      <p>{post.body}</p>
      <CommentsWidget slug={post.id} />
    </article>
  )
}
