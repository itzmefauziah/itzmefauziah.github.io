
const slider = document.querySelector('.slider');
const nextBtn = document.querySelector('.nav.next');
const prevBtn = document.querySelector('.nav.prev');
const cards = document.querySelectorAll('.card');

const cardWidth = cards[0].offsetWidth + 20; // card width + gap

// Scroll Buttons
nextBtn.addEventListener('click', () => {
  slider.scrollBy({ left: cardWidth, behavior: 'smooth' });
});

prevBtn.addEventListener('click', () => {
  slider.scrollBy({ left: -cardWidth, behavior: 'smooth' });
});

// Active Card Highlight
function updateActiveCard() {
  const sliderCenter = slider.scrollLeft + slider.offsetWidth / 2;
  let closestCard = null;
  let closestDistance = Infinity;

  cards.forEach(card => {
    const cardCenter = card.offsetLeft + card.offsetWidth / 2;
    const distance = Math.abs(sliderCenter - cardCenter);
    if(distance < closestDistance) {
      closestDistance = distance;
      closestCard = card;
    }
  });

  cards.forEach(card => card.classList.remove('active'));
  if(closestCard) closestCard.classList.add('active');
}

// Run on scroll
slider.addEventListener('scroll', updateActiveCard);

// Initialize
updateActiveCard();
