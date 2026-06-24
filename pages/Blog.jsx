
import Link from "next/link"
import posts from "@/data/posts"
import Image from "next/image";

const Blog = () => {

  return ( 

    <main className="main">

      <div className="container">

        <div className="blog">

          {posts.map(post => (

            <section
              className="post"
              key={post.id}
            >


              <Link
                href={`/blog/${post.slug}`}
                className="post__link"
              />


              <div className="post__image-wrapper">

                <Image
                    className="post__image"
                    src={post.image}
                    alt={post.title}
                    width={600}
                    height={400}
                    />

              </div>


              <div className="post__content">


                <p className="post__date">
                  {post.date}
                </p>


                 <h2 className="post__title">
                  {post.title}
                </h2>


                <p className="post__text">
                  {post.short}
                </p>


              </div>


            </section>

          ))}


        </div>


      </div>


    </main>

  );

}


export default Blog;