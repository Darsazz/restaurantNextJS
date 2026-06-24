import Image from "next/image"


const Slug = ({ post }) => {

  return ( 
    <main className="main">

      <div className="container">

        <div className="content-page">


          <h1 className="title-1">
            {post.title}
          </h1>


          <Image
            className="content-img"
            src={post.articleImage}
            alt={post.title}
            width={900}
            height={500}
          />


          <h2 className="title-1">
            {post.articleTitle}
          </h2>


          <div className="content-text">

            {post.content.map((item) => {


              if (item.tag === "h3") {
                return (
                  <h3 key={item.id}>
                    {item.value}
                  </h3>
                )
              }


              if (item.tag === "p") {
                return (
                  <p key={item.id}>
                    {item.value}
                  </p>
                )
              }


              return null

            })}

          </div>


        </div>

      </div>

    </main>
  );
}


export default Slug;