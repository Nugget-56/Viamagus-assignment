import { Link } from "react-router";

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center gap-4 h-screen bg-[#121212] text-white">
      <h1>Home</h1>
      <p>
        Viamagus assignment - Aayush Singh
      </p>
      <nav>
        <ul className="flex flex-col space-y-6 mt-20 underline">  
          <li>
            <Link to="/login">Task 1 - Login Page</Link>
          </li>
          <li>
            <Link to="/posts">Task 2 - Posts</Link>
          </li>
          <li>
            <Link to="/cart">Task 3 - Shopping Cart</Link>
          </li>
        </ul>   
      </nav>
    </div>
  );
}