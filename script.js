const searchInput = document.querySelector('#event-search');
const clearButton = document.querySelector('#clear-search');
const resultCount = document.querySelector('#result-count');
const emptyMessage = document.querySelector('#empty-message');
const eventCards = [...document.querySelectorAll('.grid article')];

function updateEventResults() {
  const searchText = searchInput.value.trim().toLocaleLowerCase('tr-TR');
  let visibleCount = 0;

  eventCards.forEach((card) => {
    const title = card.querySelector('h2').textContent.trim().toLocaleLowerCase('tr-TR');
    const matches = title.includes(searchText);
    card.hidden = !matches;
    if (matches) visibleCount += 1;
  });

  resultCount.textContent = `${visibleCount} etkinlik gösteriliyor.`;
  emptyMessage.hidden = visibleCount !== 0;
}

searchInput.addEventListener('input', updateEventResults);
clearButton.addEventListener('click', () => {
  searchInput.value = '';
  updateEventResults();
  searchInput.focus();
});

updateEventResults();