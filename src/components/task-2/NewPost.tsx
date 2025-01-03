import React, { useState } from "react";
import { useNavigate } from "react-router";
import { toast } from 'sonner'

export default function CreatePost() {
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [error, setError] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const navigate = useNavigate()

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!title) {
      setError("Title is required");
      return;
    }
    setIsSubmitting(true);
    await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({ title, body }),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    });
    setIsSubmitting(false);
    navigate('/posts');
    toast.success("Post created successfully!");
  }

  return (
    <div className="flex flex-col items-center min-h-screen p-4 bg-gray-100">
      <button className="absolute top-4 left-4 bg-gray-900 hover:bg-gray-800 text-white py-2 px-4 rounded" onClick={() => navigate('/posts')}> 
        Back to posts 
      </button>
      <h1 className="text-3xl font-bold m-4 mb-6 mt-20">Create New Post</h1>
      <form onSubmit={handleSubmit} className="mt-4 max-w-md w-full space-y-4">
        <div>
          <label htmlFor="title" className="text-gray-700">
            Title
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className={`mt-1 p-2 w-full h-12 text-lg rounded-md border ${error ? 'border-red-600' : 'border-gray-400'} shadow-sm`}
          />
          {error && <div className="text-red-500 mt-1">{error}</div>}
        </div>
        <div>
          <label htmlFor="body" className="text-gray-700">
            Body
          </label>
          <textarea
            id="body"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            maxLength={1000}
            rows={5}
            className="mt-1 p-2 w-full min-h-32 text-lg rounded-md border border-gray-400 shadow-sm"
          />
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-gray-900 hover:bg-gray-800 text-white font-semibold py-2 px-4 rounded disabled:opacity-50"
        >
          {isSubmitting ? 'Submitting...' : 'Submit'}
        </button>
      </form>
    </div>
  );
}