"use client";

import Book from "@/pages/Book";
import { useState } from "react";

export default function BookPage() {

  const [success, setSuccess] = useState(false);

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e) {

    e.preventDefault();

    setSuccess(false);
    setError("");
    setLoading(true)

    const name = e.target.name.value.trim();
    const contact = e.target.contact.value.trim();

    const nameRegex = /^[А-Яа-яЁё\s]+$/;

    const phoneRegex = /^\+?\d{10,15}$/;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const telegramRegex = /^@[A-Za-z0-9_]{5,}$/;



  if (!nameRegex.test(name)) {
    setError("Имя должно содержать только русские буквы");
    setLoading(false);
    return;
  }

    const isValidContact =
    phoneRegex.test(contact) ||
    emailRegex.test(contact) ||
    telegramRegex.test(contact);

  if (!isValidContact) {
    setError(
      "Введите телефон, email или Telegram (@username)"
    );
    setLoading(false);
    return;
  }


    const formData = {

      name,

      contact,
      guests: e.target.guests.value,

      date: e.target.date.value,

      time: e.target.time.value,
    };



    try {

      const response = await fetch(
        "/api/booking",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify(formData),
        }
      );



      const result =
        await response.json();



      if (result.success) {

  setSuccess(true);

  setTimeout(() => {
    setSuccess(false);
  }, 4000);

  e.target.reset();

  } else {

    setError(result.message || "Ошибка бронирования");

    setTimeout(() => {
      setError("");
    }, 4000);
  }

    } catch {

      setError("Не удалось отправить заявку");

      setTimeout(() => {
        setError("");
      }, 4000)
    } finally {
      setLoading(false)
    }
  }



  return (
    <Book
      success={success}
      error={error}
      loading={loading}
      onSubmit={handleSubmit}
    />
  );
}