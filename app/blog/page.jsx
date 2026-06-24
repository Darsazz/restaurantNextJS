
import Link from "next/link"
import posts from "@/data/posts"
import Blog from "@/pages/Blog"

export const metadata = {
  title: "Блог | Nique Restaurant",
  description:
    "Новости, события и интересные истории ресторана Nique.",
};


export default function BlogPage() {
  return (
    <>
      <Blog/>
    </>
  )
}
