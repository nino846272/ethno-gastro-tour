# Gastro-Ethno Tour – Osh

Лендинг гастро-этно тура в Оше (Кыргызстан): одностраничный сайт с описанием программы, впечатлений, отзывов и контактов для бронирования.

**Сайт:** [https://gastro-etno-tour.vercel.app/](https://gastro-etno-tour.vercel.app/)

## О проекте

Gastro-Ethno Tour — культурный однодневный тур в горах южного Кыргызстана. На сайте представлены:

- **Hero** — главный экран с описанием тура и ключевыми показателями
- **Experience** — что ждёт участников (Сулайман-Тоо, юрта, стрельба из лука, музыка, традиционная кухня)
- **Yurt Promo** — мастер-класс по сборке юрты
- **Itinerary** — программа дня по шагам
- **Reviews** — отзывы путешественников
- **Contact** — Telegram, WhatsApp, Instagram, email и адрес

Сайт поддерживает **русский** и **английский** языки. Выбранный язык сохраняется в `localStorage`.

## Стек

- [React 19](https://react.dev/) + [Vite 8](https://vite.dev/)
- [Tailwind CSS 4](https://tailwindcss.com/)
- [React Router](https://reactrouter.com/)
- [Lucide React](https://lucide.dev/) — иконки
- [Vercel Analytics](https://vercel.com/docs/analytics) и Speed Insights

## Запуск локально

```bash
npm install
npm run dev
```

Сборка для продакшена:

```bash
npm run build
npm run preview
```

Линтер:

```bash
npm run lint
```

## Структура

```
src/
├── components/   # UI-секции (Header, Hero, Experience, …)
├── config/       # Внешние ссылки
├── context/      # LanguageContext (i18n)
├── data/         # Отзывы и статистика
├── locales/      # ru.json, en.json
└── pages/        # HomePage
public/           # Статика, robots.txt, sitemap.xml
```

## Деплой

Проект развёрнут на [Vercel](https://vercel.com/). После push в репозиторий деплой выполняется автоматически.
