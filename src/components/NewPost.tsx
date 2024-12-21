import { useState } from "react";

export default function CreatePost() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");


  async function handleSubmit(e: any) {
    e.preventDefault();
    if (!title) return;
    await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({ title, body }),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    });
    alert("Post created successfully!");
   
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Create New Post</h1>
      <div>
        <label>Title (required):</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Description (max 1000 chars):</label>
        <textarea
          value={body}
          onChange={(e) => setBody(e.target.value)}
          maxLength={1000}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}