import { useEffect, useState } from 'react'
import { Post } from './PostsFeed';
import { useParams, Link } from "react-router";

export default function PostDetailed() {
  const [post, setPost] = useState<Post>()

  let { postID } = useParams();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postID}`)
      .then((res) => res.json())
      .then((data) => setPost(data));
  }, [postID]);

  if (!post) return (
    <div className="h-screen flex justify-center items-center">Loading...</div>
  );

  return (
    <div className="flex flex-col gap-4 h-screen w-full">
      <button className="absolute top-4 left-4 bg-gray-900 hover:bg-gray-800 text-white py-2 px-4 rounded"> 
        <Link to={"/posts"}>
          Back 
        </Link>
      </button>
      <header className="h-20 flex items-center justify-center bg-[url('/cart/bg.png')] bg-cover">
        <h1 className='text-2xl font-bold p-4'>Blog {post.id}</h1>
      </header>
      <div className="bg-white overflow-hidden mx-2 md:mx-10">
        <div className="px-4 py-5 sm:px-6">
          <h1 className="text-3xl font-bold text-gray-900">{post.title}</h1>
        </div>
        <div className="border-t border-gray-200">
          <div className="px-4 py-5 sm:p-6">
            <p className="text-gray-700">{post.body}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

