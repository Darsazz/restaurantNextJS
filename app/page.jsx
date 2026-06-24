import MenuObserver from "@/components/MenuObserver";
import MainPage from "@/pages/MainPage";



export const metadata = {
  title: "Меню | Nique Restaurant",
  description:
    "Меню ресторана Nique: стартеры, завтраки, основные блюда и напитки.",
};


export default function Home() {

  return (
    <>
      <MenuObserver />

      <MainPage />

    </>
  );
}