import Link from "next/link";

const Found = () => {
    return ( 
        <main className="main">
      <div className="container">

        <section className="not-found">

          <span className="not-found__code">
            404
          </span>

          <h1 className="not-found__title">
            Страница не найдена
          </h1>

          <p className="not-found__text">
            Похоже, этот раздел исчез в дымке тайских специй
            или был перемещён.
          </p>

          <Link
            href="/"
            className="not-found__button"
          >
            Вернуться в меню
          </Link>

        </section>

      </div>
    </main>
     );
}
 
export default Found;