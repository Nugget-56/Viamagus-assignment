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
  const [postsCache, setPostsCache] = useState<{[key: number]: Post[]}>({});

  let currentPage = start / 10 + 1;

  useEffect(() => {
    //Local cache in state
    if (postsCache[currentPage]) {
      setPosts(postsCache[currentPage]);
      console.log("Cache hit");
      return;
    }

    fetch(`https://jsonplaceholder.typicode.com/posts?_start=${start}&_limit=10`)
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
        setPostsCache((prev) => ({ ...prev, [currentPage]: data }));
      });
  }, [start]);

  function handleNext() {
    setStart(start + 10);
    //Scroll to top
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }

  function handlePrev() {
    if (start > 0) setStart(start - 10);
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }

  if (!posts) return (
    <div className="flex items-center justify-center min-h-screen text-black">
      Loading...
    </div>
  );

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
        <div className="grid grid-cols-1 gap-6 min-[550px]:grid-cols-2 lg:grid-cols-4 w-full">
          {posts.map((post: Post) => (
            <Link key={post.id} to={`/posts/${post.id}`}>
              <PostCard post={post} />
            </Link>
          ))}
        </div>
      </main>
      <footer className="sticky bottom-0 p-4 py-4 md:py-6 space-x-10 flex justify-center items-center bg-slate-100">
        <button 
          onClick={handlePrev} 
          disabled={start === 0}
          className="bg-gray-900 text-white hover:bg-gray-800 px-4 py-2 rounded-md disabled:opacity-50"
        >
          Previous
        </button>
        <div className="text-black text-xl bg-white px-6 py-2 border border-slate-400 rounded-md">
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