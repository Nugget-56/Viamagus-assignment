import { Link } from "react-router";

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center gap-4 h-screen bg-[#121212] text-white">
      <h1>Home Page</h1>
      <nav>
        <ul className="flex space-x-4">
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/posts">Posts</Link>
          </li>
          <li>
            <Link to="/cart">Shopping Cart</Link>
          </li>
        </ul>   
      </nav>
    </div>
  );
}