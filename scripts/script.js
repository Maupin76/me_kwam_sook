import { menuItems } from './menuItems.js';

// document.getElementById('toggleButton').addEventListener('click', function() {
//     const content = document.getElementById('content');
//     if (content.style.maxHeight === '410px' || content.style.maxHeight === '') {
//         content.style.maxHeight = '100%'; 
//         this.textContent = 'Show Less -';
//     } else {
//         content.style.maxHeight = '410px';
//         this.textContent = 'Show More +';
//     }
// });

// Function to render menu items into a specific container
function renderMenuItems(category, containerId) {
  const container = document.getElementById(containerId);
  const filteredItems = menuItems.filter(item => item.category === category);

  container.innerHTML = filteredItems.map(item => `
    <div class="menu__item">
      <img src="${item.image}" alt="${item.alt}" class="menu__image" />
      <h4 class="menu__item-title">${item.title}</h4>
      <p class="menu__price">${item.price}</p>
      <p class="menu__description">${item.description}</p>
    </div>
  `).join('');
}

// Populate the menu sections
renderMenuItems('main', 'main-dishes');
renderMenuItems('soups', 'soups');
renderMenuItems('sides', 'sides');

