import { NextResponse } from "next/server";

import sendBookingEmail from "@/lib/gmail/sendEmail";
import sendBookingTelegram from "@/lib/telegram/sendTelegram";

export async function POST(request) {
  
  try {

    // Получение данных

    const body = await request.json();

    const {
      name,
      contact,
      guests,
      date,
      time,
    } = body ?? {};



    // Проверка обязательных полей

    if (
      !name ||
      !contact ||
      !date ||
      !time
    ) {

      return NextResponse.json(
        {
          success: false,

          message:
            "Пожалуйста, заполните обязательные поля.",
        },

        {
          status: 400,
        }
      );
    }



    // Отправка Email и Telegram

    await Promise.all([

      sendBookingEmail({
        name,
        contact,
        guests,
        date,
        time,
      }),

      sendBookingTelegram({
        name,
        contact,
        guests,
        date,
        time,
      }),

    ]);



    // Ответ

    return NextResponse.json({
      success: true,

      message:
        "Бронь успешно отправлена.",
    });

  } catch (error) {

    console.error(
      "Booking form error:",
      error
    );

    return NextResponse.json(
      {
        success: false,

        message:
          "Не удалось отправить заявку.",
      },

      {
        status: 500,
      }
    );
  }
}