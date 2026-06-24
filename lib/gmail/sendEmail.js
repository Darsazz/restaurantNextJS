import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({

  host: "smtp.gmail.com",

  port: 465,

  secure: true,

  auth: {
    user: process.env.GMAIL_SMTP_USER,

    pass: process.env.GMAIL_SMTP_PASSWORD,
  },

});



export default async function sendBookingEmail({
  name,
  contact,
  guests,
  date,
  time,
}) {

  const mailOptions = {

    from:
      `"Nique Restaurant" <${process.env.GMAIL_SMTP_USER}>`,

    to:
      process.env.CONTACT_RECIPIENT ??
      process.env.GMAIL_SMTP_USER,

    subject:
      "Новая бронь столика — Nique Restaurant",



    text: [

      `Имя: ${name}`,

      `Контакт: ${contact}`,

      `Количество гостей: ${guests}`,

      `Дата: ${date}`,

      `Время: ${time}`,

    ].join("\n"),



    html: `
      <table
        style="
          width:100%;
          max-width:520px;
          font-family:Arial,sans-serif;
          border-collapse:collapse;
        "
      >

        <tr>
          <td
            style="
              padding:20px;
              background:#0d0d0d;
              color:#ffffff;
            "
          >

            <h2
              style="
                margin:0;
                font-size:24px;
              "
            >
              Новая бронь столика
            </h2>

          </td>
        </tr>

        <tr>
          <td
            style="
              padding:24px;
              background:#171717;
              color:#f3f3f3;
            "
          >

            <p><strong>Имя:</strong> ${name}</p>

            <p><strong>Контакт:</strong> ${contact}</p>

            <p><strong>Гостей:</strong> ${guests}</p>

            <p><strong>Дата:</strong> ${date}</p>

            <p><strong>Время:</strong> ${time}</p>

          </td>
        </tr>

      </table>
    `,
  };



  const info =
    await transporter.sendMail(mailOptions);

  console.log(info);
}