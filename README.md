# 📖 Сайт бронирования номеров

## О чём проект? 
📖 Сайт бронирования номеров - многостраничный сайт, созданный из компонентов

## Зачем этот проект?
Проект - практика верстки многостраничного отзывчевого сайта, состоящего из самописных компонентов

Сайт создан под Google Chrome

Практика навыков:
  - Создание сборки webpack
  - Создание универсальных компонентов с дальнейшим их использованием
  - Алгоритмы на JQuery
  - Создание собственных скриптов: [календарь](./src/cards/calendar/), [превью комнаты](./src/cards/room-card/), [навигация](./src/components/pagination/), [меню гостей](./src/components/dropdown-guests/), [меню комнат](./src/components/dropdown-rooms/)
  - Простые CSS анимации
  - Общая логика страницы, SessionStorage

## Демо
[Ссылка на сайт](https://mohiroo.github.io/task-2/)


## Процесс создания
**Этап 1** - создание универсальных елементов (поле ввода, кнопки, слайдеры...)

**Этап 2** - создание универсальных блоков (форма регистрации, календарь...)

**Этап 3** - создание страниц из универсальных блоков (приветствие, каталог номеров, описание номеров, регистрация/вход, страница ошибки)

Под каждый элемент этапа создается собственная папка, где находится весь код элемента

## Используемые библиотеки
1. [HtmlWebpackPlugin](https://www.npmjs.com/package/html-webpack-plugin)
2. [CleanWebpackPlugin](https://www.npmjs.com/package/clean-webpack-plugin)
3. [MiniCssExtractPlugin](https://www.npmjs.com/package/mini-css-extract-plugin)
4. [simple-pug-loader](https://www.npmjs.com/package/simple-pug-loader)
5. [css-loader](https://www.npmjs.com/package/css-loader)
6. [sass-loader](https://www.npmjs.com/package/sass-loader)
7. [normalize.css](https://www.npmjs.com/package/normalize.css)
8. [jQuery](https://www.npmjs.com/package/jquery)
9. [ion-rangeslider](https://www.npmjs.com/package/ion-rangeslider)
10. [jquery-mask-plugin](https://www.npmjs.com/package/jquery-mask-plugin)
11. [echarts](https://www.npmjs.com/package/echarts)
12. [webpack](https://www.npmjs.com/package/webpack)
13. [webpack-cli](https://www.npmjs.com/package/webpack-cli)
14. [webpack-dev-server](https://www.npmjs.com/package/webpack-dev-server)

## Инструкции по сборке и запуску проекта
Все элементы (компоненты, карточки, страницы) ноходятся в папке `src`

2 версии проекта
  1. [**HTML, CSS, JS**](./docs)
  2. [**Pug, SCSS, JS**](./src)  

Запуск проекта c помощью Webpack:
  1. Клонирование проекта `https://github.com/Mohiroo/task-2.git`  
    - `npm run d` - создание версии разработчика  
    - `npm run p` - создание версии для сайта  
    - `npm run s` - создание локального сайта
