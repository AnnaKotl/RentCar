# Проєкт "Car Rental"

Привіт, це Котляр Анна, студентка ІТ-школи GoIT. 

Я розгорнула проєкт "Car Rental" на платформі GitHub Pages, використовуючи Vite. 

Нижче подано короткий опис та інструкції для роботи з застосунком.


# Опис проєкту:

"Car Rental" - це веб-застосунок для компанії, яка надає послуги з прокату автомобілів в Україні. 


# Сторінки:

- Домашня сторінка:

Містить загальний опис послуг компанії.

Стилізація та оформлення виконані згідно з власним розсудом.

- Каталог автівок:

Виводить каталог автівок різної комплектації.

Фільтрація за маркою, ціною за годину та кількістю кілометрів.

Рендеринг 12 оголошень на першій сторінці, і додаткові - за кліком на "Load more".

- Улюблені оголошення:

Перегляд оголошень, які користувач додав до улюблених.

Можливість видалення оголошень зі списку улюблених.

Відображення фіксованих результатів дій користувача при оновленні сторінки.


# Технічне завдання:

Реалізовано картку оголошення з кнопкою "улюблене" та можливістю вивчення деталей.

Пагінація здійснюється на бекенді та відображає 12 оголошень на сторінці.

Використано Redux для ефективної роботи із станом додатку.

Для запитів використовується бібліотека Axios.

Додано фільтрацію за марками автомобілів зі ззовнішнього файла makes.json.

Створено маршрутизацію за допомогою React Router зі сторінками: "/", "/catalog", "/favorites".

На сторінках каталогу та улюблених реалізована фіксація результатів при оновленні сторінки.


# Бекенд:

Для роботи з оголошеннями використано власний персональний бекенд на Mockapi.

Створено ресурс adverts з необхідними полями та об'єктом оголошення.

Додано adverts.json для наповнення колекції.


# Додаткове завдання:

dropdown із цінами за годину оренди авто (крок 10$) - показати оголошення з автівками, ціна за оренду яких належить до діапазону цін, обраних користувачем
група inputів для визначення діапазону пробігу, в межах якого користувач шукатиме оголошення


# Критерії виконання:

Верстка фіксована в рх, семантична та валідна.

Обов’язкове використання Redux.

Для запитів використовується бібліотека Axios.

Пагінація реалізована на бекенді.

Немає помилок в консолі браузера.

Інтерактивність працює відповідно до технічного завдання.

Код відформатовано та не містить невикористовуваного коду.

В репозиторії має бути описаний README.md.

Проєкт задеплоїний на github pages або netlify.com.
