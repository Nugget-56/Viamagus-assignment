import { useState, useEffect } from "react";
import { PostCard } from "./PostCard";
import { Link } from "react-router";
import { Plus } from "lucide-react";

export interface Post {
  id: number;
  title: string;
  body: string;
}

export default function Posts() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [start, setStart] = useState(0);

  let currentPage = start / 10 + 1;

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts?_start=${start}&_limit=10`)
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, [start]);

  function handleNext() {
    setStart(start + 10);
  }

  function handlePrev() {
    if (start > 0) setStart(start - 10);
  }

  return (
    <div className="flex flex-col min-h-screen">
      <header className="flex justify-between items-center p-4 bg-[url('/cart/bg.png')] bg-cover">
        <h1 className="text-2xl font-bold">Blog posts</h1>
        <button className="bg-gray-900 text-white hover:bg-gray-800 px-4 py-2 rounded-md"> 
          <Link to="/create-post" className="flex items-center gap-2">
            Create New <Plus className="h-4 w-4"/>
          </Link> 
        </button>
      </header>
      <main className="flex-grow p-4">
        <div className="grid grid-cols-1 gap-6 min-[550px]:grid-cols-2 lg:grid-cols-5 w-full">
          {posts.map((post: Post) => (
            <Link key={post.id} to={`/posts/${post.id}`}>
              <PostCard post={post} />
            </Link>
          ))}
        </div>
      </main>
      <footer className="p-4 py-8 space-x-10 flex justify-center items-center bg-slate-200">
        <button 
          onClick={handlePrev} 
          disabled={start === 0}
          className="bg-gray-900 text-white hover:bg-gray-800 px-4 py-2 rounded-md disabled:opacity-50"
        >
          Previous
        </button>
        <div className="text-black text-xl">
          {currentPage}
        </div>
        <button 
          onClick={handleNext}
          disabled={posts.length < 10}
          className="bg-gray-900 text-white hover:bg-gray-800 px-4 py-2 rounded-md disabled:opacity-50"
        >
          Next
        </button>
      </footer>
    </div>
  );
}