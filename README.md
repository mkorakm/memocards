# MemoCards — вёрстка (Спринт 3)

Вёрстка экранов **Главная**, **Колоды**, **Соревнования**, **Профиль** на HTML + **Flexbox** + **SASS**.
Адаптивно: телефон / планшет (от 700px) / компьютер (от 1000px).

## Структура

```
memocards/
├── index.html          # Главная
├── decks.html          # Колоды
├── competitions.html   # Соревнования
├── profile.html        # Профиль
├── scss/               # исходники SASS
│   ├── _variables.scss   # палитра, размеры, тени
│   ├── _mixins.scss      # flex(), card-surface, tag-color, cols
│   ├── _base.scss        # сброс, шапка, нижняя панель, кнопки
│   ├── _components.scss  # hero, карточки, теги, ряды/сетки
│   ├── _catalog.scss     # выпадающие списки "Фильтры"/"Сортировка"
│   ├── _profile.scss     # профиль и меню на всю высоту
│   ├── _responsive.scss  # медиазапросы
│   └── styles.scss       # точка входа
├── css/styles.css      # скомпилированный CSS (подключён в HTML)
└── js/main.js          # выпадающие списки, фильтр и сортировка каталога
```

## Сборка CSS из SCSS

```
npm install -g sass
sass scss/styles.scss css/styles.css
sass --watch scss/styles.scss:css/styles.css   # автосборка
```

## Что где сделано на Flexbox

- шапка и нижняя панель — полосы на всю ширину, содержимое по общей сетке `.container`;
- `.card-row` — ряд карточек со скроллом (последняя видна не целиком — подсказка);
- `.card-grid` — сетка с переносом: 1 / 2 / 4 колонки;
- `.toolbar` + `.dropdown` — панель каталога с выпадающими списками (работают через js/main.js);
- `.menu-list` (профиль) — `flex-wrap` + `align-content: stretch`: пункты занимают всю высоту экрана.

## Запуск и GitHub

Открыть `index.html` в браузере. Заливка:

```
git init
git add .
git commit -m "Верстка экранов MemoCards (Flexbox + SASS)"
git branch -M main
git remote add origin https://github.com/<логин>/memocards.git
git push -u origin main
```
