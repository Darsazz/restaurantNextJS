
import "@/styles/main.css"

import Header from "@/components/Header"
import Footer from "@/components/Footer"

export const metadata = {
  title: "Nique Restaurant",

  description:
    "Nique Restaurant — авторская кухня, уютная атмосфера, меню, события и бронирование столиков.",

  keywords: [
    "Nique Restaurant",
    "ресторан",
    "меню",
    "бронирование столика",
    "азиатская кухня"
  ],

  openGraph: {
    title: "Nique Restaurant",

    description:
      "Ресторан Nique — блюда, мероприятия и бронирование столиков.",

    images: [
      "/img/blog/01.jpg"
    ],

    type: "website",
  },
}


export default function RootLayout({
  children
}) {
  return (
    <html lang="en">

      <body>

        <div className="site-wrapper">

          <Header />

          {children}

          <Footer />

        </div>

      </body>

    </html>
  )
}
