import Found from "@/pages/NotFound";
import Link from "next/link";

export const metadata = {
  title: "Страница не найдена | Nique Restaurant",
  description:
    "К сожалению, такой страницы не существует. Вернитесь на главную страницу ресторана Nique.",
};

export default function NotFound() {
  return (
    <Found/>
  );
}