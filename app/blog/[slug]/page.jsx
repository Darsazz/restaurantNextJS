import posts from "@/data/posts"
import Slug from "@/pages/Slug"

import { notFound } from "next/navigation"

export async function generateMetadata({ params }) {

  const { slug } = await params


  const post = posts.find(
    item => item.slug === slug
  )


  if (!post) {
    return {
      title: "Пост не найден"
    }
  }


  return {
    title: `${post.title} | Nique Restaurant`,
    description: post.short,
  }

}



export default async function PostPage({
  params
}) {

  const { slug } = await params


  const post = posts.find(
    item => item.slug === slug
  )


  if (!post) {
    notFound()
  }


  return (
    <Slug post={post}/>
  )
}