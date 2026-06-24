"use client";

export default function Book({ success, error, loading, onSubmit }) {
    return ( 
        <main className="main">
      <div className="container">

        <div className="book">

          <section className="book-form">

            <div className="book-form__header">

              <h1 className="title-1">
                Забронировать столик
              </h1>

              <p className="book-form__subtitle">
                В нашем ресторане царит непринужденная и уютная атмосфера.
                Чтобы отразить её, мы придерживаемся спокойного сервиса и
                внимания к деталям.
              </p>



              {success && (
                <div className="book-alert book-alert--success">

                  <strong className="book-alert__title">
                    Бронь подтверждена
                  </strong>

                  <p className="book-alert__text">
                    Мы закрепили за вами столик и отправили подтверждение.
                  </p>

                </div>
              )}



              {error && (
                <div className="book-alert book-alert--error">

                  <strong className="book-alert__title">
                    Ошибка бронирования
                  </strong>

                  <p className="book-alert__text">
                    {error}
                  </p>

                </div>
              )}

            </div>



            <form
              className="book-form__body"
              onSubmit={onSubmit}
            >

              <label className="book-form__field">

                <span className="book-form__label">
                  Имя
                </span>

                <input
                  className="book-form__input"
                  type="text"
                  name="name"
                  placeholder="Имя"
                  required
                />

              </label>



              <label className="book-form__field">

                <span className="book-form__label">
                  Телефон / Email / Telegram
                </span>

                <input
                  className="book-form__input"
                  type="text"
                  name="contact"
                  placeholder="Контактные данные"
                  required
                />

              </label>



              <label className="book-form__field">

                <span className="book-form__label">
                  Количество гостей
                </span>

                <input
                  className="book-form__input"
                  type="number"
                  min="1"
                  max="12"
                  name="guests"
                  defaultValue={2}
                />

              </label>



              <div className="book-form__row">

                <label className="book-form__field">

                  <span className="book-form__label">
                    Дата
                  </span>

                  <input
                    className="book-form__input"
                    type="date"
                    name="date"
                    required
                  />

                </label>



                <label className="book-form__field">

                  <span className="book-form__label">
                    Время
                  </span>

                  <input
                    className="book-form__input"
                    type="time"
                    name="time"
                    required
                  />

                </label>

              </div>



              <button
                disabled={loading}
                className="book-form__submit"
                type="submit"
              >
                {loading ? "Отправка..." : "Забронировать"}
              </button>

            </form>

          </section>

        </div>

      </div>
    </main>
     );
}
 