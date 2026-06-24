const TELEGRAM_API_URL =
  "https://api.telegram.org";



export default async function sendBookingTelegram({
  name,
  contact,
  guests,
  date,
  time,
}) {

  const botToken =
    process.env.TELEGRAM_BOT_TOKEN;

  const chatId =
    process.env.TELEGRAM_CHAT_ID;



  if (!botToken || !chatId) {

    throw new Error(
      "TELEGRAM_BOT_TOKEN или TELEGRAM_CHAT_ID не заданы."
    );
  }



  const text = [

    "<b>🍜 Новая бронь — Nique Restaurant</b>",

    "",

    `<b>Имя:</b> ${escapeHtml(name)}`,

    `<b>Контакт:</b> ${escapeHtml(contact)}`,

    `<b>Гостей:</b> ${escapeHtml(guests)}`,

    `<b>Дата:</b> ${escapeHtml(date)}`,

    `<b>Время:</b> ${escapeHtml(time)}`,

  ].join("\n");



  const response = await fetch(
    `${TELEGRAM_API_URL}/bot${botToken}/sendMessage`,
    {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        chat_id: chatId,

        text,

        parse_mode: "HTML",
      }),
    }
  );



  if (!response.ok) {

    const details =
      await response.json().catch(() => null);

    throw new Error(

      details?.description ||

      "Ошибка отправки сообщения в Telegram."
    );
  }
}



function escapeHtml(value) {

  return String(value)

    .replace(/&/g, "&amp;")

    .replace(/</g, "&lt;")

    .replace(/>/g, "&gt;")

    .replace(/"/g, "&quot;")

    .replace(/'/g, "&#039;");
}