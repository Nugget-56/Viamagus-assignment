import { Post } from "./PostsFeed"

export function PostCard({ post }: { post: Post }) {
  return (
    <div className="flex flex-col gap-2 p-4 bg-white text-black rounded-md border border-slate-300 w-full min-h-48 overflow-hidden">
      <div className="font-bold text-xl mb-2 leading-6">
        {post.title}
      </div>
      <div className="text-base">
        {post.body}
      </div>
    </div>
  )
}