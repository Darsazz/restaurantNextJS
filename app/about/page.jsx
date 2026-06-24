import Link from "next/link";
import AboutPage from "@/pages/AboutPage";

export const metadata = {
  title: "О ресторане | Nique Restaurant",
  description:
    "Узнайте больше о ресторане Nique: наша философия, атмосфера, кухня и команда.",
};


export default function About() {
  return (
    <>
      <AboutPage/>
    </>
  );
}