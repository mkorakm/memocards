// main.js — выпадающие списки "Фильтры" / "Сортировка" и работа каталога

(function () {
  var dropdowns = document.querySelectorAll('.dropdown');

  function closeAll(except) {
    dropdowns.forEach(function (dd) {
      if (dd !== except) {
        dd.classList.remove('is-open');
        dd.querySelector('.dropdown__btn').setAttribute('aria-expanded', 'false');
      }
    });
  }

  var grid = document.querySelector('[data-catalog]');
  var counter = document.querySelector('[data-count]');

  function selected(name) {
    return document.querySelector('[data-dropdown="' + name + '"] .is-selected').dataset.value;
  }

  // фильтрация по теме + сортировка карточек каталога
  function applyCatalog() {
    if (!grid) return;
    var filter = selected('filter');
    var sort = selected('sort');
    var cards = Array.prototype.slice.call(grid.children);

    cards.sort(function (a, b) {
      if (sort === 'name') return a.dataset.title.localeCompare(b.dataset.title, 'ru');
      if (sort === 'popular') return Number(b.dataset.pop) - Number(a.dataset.pop);
      return Number(b.dataset.date) - Number(a.dataset.date); // новые
    });

    var shown = 0;
    cards.forEach(function (card) {
      var visible = filter === 'all' || card.dataset.category === filter;
      card.hidden = !visible;
      if (visible) shown++;
      grid.appendChild(card);
    });
    if (counter) counter.textContent = 'Найдено: ' + shown;
  }

  dropdowns.forEach(function (dd) {
    var btn = dd.querySelector('.dropdown__btn');

    btn.addEventListener('click', function (e) {
      e.stopPropagation();
      var open = !dd.classList.contains('is-open');
      closeAll(dd);
      dd.classList.toggle('is-open', open);
      btn.setAttribute('aria-expanded', String(open));
    });

    dd.querySelectorAll('.dropdown__item').forEach(function (item) {
      item.addEventListener('click', function () {
        dd.querySelectorAll('.dropdown__item').forEach(function (i) {
          i.classList.remove('is-selected');
        });
        item.classList.add('is-selected');
        dd.querySelector('.dropdown__value').textContent = item.textContent.trim();
        closeAll();
        applyCatalog();
      });
    });
  });

  document.addEventListener('click', function () { closeAll(); });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeAll();
  });

  applyCatalog();
})();
