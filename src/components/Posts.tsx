import { useState, useEffect } from "react";
import { Post } from "../utils/types";
import { PostCard } from "./PostCard";

export default function Posts() {
  const [posts, setPosts] = useState([]);
  const [start, setStart] = useState(0);

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
      <header className="p-4 bg-gray-200">
        <h1 className="text-2xl font-bold">Post List</h1>
      </header>
      <main className="flex-grow p-4">
        <div className="grid grid-cols-1 gap-6 min-[550px]:grid-cols-2 lg:grid-cols-3 w-full">
          {posts.map((post: Post) => (
            <div key={post.id}>
              <PostCard post={post} />
            </div>
          ))}
        </div>
      </main>
      <footer className="p-4 space-x-4 flex justify-center">
        <button onClick={handlePrev} disabled={start === 0}>Previous</button>
        <button onClick={handleNext}>Next</button>
        <a href="/create-post">Create New Post</a>
      </footer>
    </div>
  );
}