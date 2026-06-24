import Image from "next/image";
import { menu } from "@/data/menu";

const MainPage = () => {
    return ( 
        <main className="main" id="menu">
		<div className="container">
			<nav className="main-nav">
				<a className="main-nav-link" href="#starters">Стартеры</a>
				<a className="main-nav-link" href="#breakfast">Завтраки</a>
				<a className="main-nav-link" href="#dinner">Основные блюда</a>
				<a className="main-nav-link" href="#drinks">Напитки</a>
			</nav>

			<div className="sections-wrapper">

				<section className="section" id="starters">
					<h2 className="section-title">Стартеры</h2>
					<ul className="section-list">
  {menu.starters.map((item) => (
    <li
      key={item.id}
      className={`item ${item.vegan ? "item--vegan" : ""} ${
        item.special ? "item--special" : ""
      }`}
      data-label={item.label}
    >
    <Image
        src={item.image}
        alt={item.title}
        width={120}
        height={120}
        className="item-img"
        />

      <div className="item-desc">
        <div className="item-header">
          <h3 className="item-title">{item.title}</h3>

          <div className="item-price">
            {item.oldPrice && <span>{item.oldPrice}</span>}
            {item.price}
          </div>
        </div>

        <p className="item-text">{item.text}</p>
      </div>
    </li>
  ))}
</ul>
		</section>

		<section className="section" id="breakfast">
					<h2 className="section-title">Завтраки</h2>
					<ul className="section-list">
					{menu.breakfast.map((item) => (
						<li
						key={item.id}
						className={`item ${item.vegan ? "item--vegan" : ""} ${
							item.special ? "item--special" : ""
						}`}
						data-label={item.label}
						>
						<Image
						src={item.image}
						alt={item.title}
						width={120}
						height={120}
						className="item-img"
						unoptimized
						/>

						<div className="item-desc">
							<div className="item-header">
							<h3 className="item-title">{item.title}</h3>

							<div className="item-price">
								{item.oldPrice && <span>{item.oldPrice}</span>}
								{item.price}
							</div>
							</div>

							<p className="item-text">{item.text}</p>
						</div>
						</li>
					))}
					</ul>
		</section>


				<section className="section" id="dinner">
				<h2 className="section-title">Основные блюда</h2>

				<ul className="section-list">
					{menu.dinner.map((item) => (
					<li
						key={item.id}
						className={`item ${item.vegan ? "item--vegan" : ""} ${
						item.special ? "item--special" : ""
						}`}
						data-label={item.label}
					>
					<Image
						src={item.image}
						alt={item.title}
						width={120}
						height={120}
						className="item-img"
						unoptimized
					/>

						<div className="item-desc">
						<div className="item-header">
							<h3 className="item-title">{item.title}</h3>

							<div className="item-price">
							{item.oldPrice && <span>{item.oldPrice}</span>}
							{item.price}
							</div>
						</div>

						<p className="item-text">{item.text}</p>
						</div>
					</li>
					))}
				</ul>
				</section>

				<section className="section" id="drinks">
				<h2 className="section-title">Напитки</h2>

				<ul className="section-list">
					{menu.drinks.map((item) => (
					<li
						key={item.id}
						className={`item ${item.vegan ? "item--vegan" : ""} ${
						item.special ? "item--special" : ""
						}`}
						data-label={item.label}
					>
					<Image
						src={item.image}
						alt={item.title}
						width={120}
						height={120}
						className="item-img"
						unoptimized
					/>

						<div className="item-desc">
						<div className="item-header">
							<h3 className="item-title">{item.title}</h3>

							<div className="item-price">
							{item.oldPrice && <span>{item.oldPrice}</span>}
							{item.price}
							</div>
						</div>

						<p className="item-text">{item.text}</p>
						</div>
					</li>
					))}
				</ul>
				</section>


			</div>
		</div>
	</main>
     );
}
 
export default MainPage;