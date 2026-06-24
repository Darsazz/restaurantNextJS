
"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Header() {

  const pathname = usePathname()

  return (
    <header className="header">

      <Link
        href="/"
        className="header-logo"
      >
        nique.
      </Link>

      <div className="header-content">

        <h1 className="header-title">
          The pure taste of
          <span>Thailand</span>
        </h1>

        <p>
          Изысканные блюда,
          приготовленные по
          традиционным рецептам
          в лучших кулинарных
          традициях Азии
        </p>

      </div>

      <nav className="header-nav nav">

        <Link
          href="/"
          className={
            pathname === "/"
              ? "nav-link active"
              : "nav-link"
          }
        >
          Меню
        </Link>

        <Link
          href="/about"
          className={
            pathname === "/about"
              ? "nav-link active"
              : "nav-link"
          }
        >
          О ресторане
        </Link>

        <Link
          href="/blog"
          className={
            pathname.startsWith("/blog")
              ? "nav-link active"
              : "nav-link"
          }
        >
          Блог
        </Link>

        <Link
          href="/book"
          className={
            pathname === "/book"
              ? "nav-link primary active"
              : "nav-link primary"
          }
        >
          Забронировать стол
        </Link>

      </nav>

    </header>
  )
}

