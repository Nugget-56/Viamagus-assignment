import { Post } from "../utils/types"

export function PostCard({ post }: { post: Post }) {
  return (
  <div className="flex flex-col justify-between p-4 group bg-slate-400 ">   
    <div className="font-bold text-lg leading-snug">
        {post.title}
    </div>
    <div>
      {post.body}
    </div>  
  </div>
  )
}