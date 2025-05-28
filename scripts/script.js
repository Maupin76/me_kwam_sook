import { menuItems } from './menuItems.js';

// Function to render menu items into a specific container
function renderMenuItems(category, containerId) {
  const container = document.getElementById(containerId);
  const filteredItems = menuItems.filter(item => item.category === category);

  container.innerHTML = filteredItems.map(item => `
    <li class="menu__item">
      <img src="${item.image}" alt="${item.alt}" class="menu__item-image" />
      <h4 class="menu__item-title">${item.title}</h4>
      <p class="menu__price">${item.price}</p>
      <p class="menu__description">${item.description}</p>
    </li>
  `).join('');
}

// Populate the menu sections
renderMenuItems('main', 'main-dishes');
renderMenuItems('soups', 'soups');
renderMenuItems('sides', 'sides');

