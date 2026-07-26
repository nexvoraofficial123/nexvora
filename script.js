/* ============================================================
   NEXVORA Store — script.js
   ============================================================ */

'use strict';

/* ------ PRODUCT DATA ------ */
const PRODUCTS = [
  {
    id: 1, name: 'Linen Oversize Shirt',
    category: 'clothing',
    price: 3200, oldPrice: 4500,
    badge: 'sale', rating: 4.8, reviews: 124,
    image: 'images/products/shirt.jpg'
  },
  {
    id: 2, name: 'Wireless Earbuds Pro',
    category: 'electronics',
    price: 8900, oldPrice: null,
    badge: 'new', rating: 4.9, reviews: 87,
    image: 'images/products/earbuds.jpg'
  },
  {
    id: 3, name: 'Linen Throw Pillow Set',
    category: 'home',
    price: 2100, oldPrice: null,
    badge: null, rating: 4.6, reviews: 52,
    image: 'images/products/pillow.jpg'
  },
  {
    id: 4, name: 'Rose Hip Face Serum',
    category: 'beauty',
    price: 1850, oldPrice: 2400,
    badge: 'sale', rating: 4.7, reviews: 209,
    image: 'images/products/serum.jpg'
  },
  {
    id: 5, name: 'Braided Leather Strap Watch',
    category: 'accessories',
    price: 5600, oldPrice: null,
    badge: 'hot', rating: 4.5, reviews: 38,
    image: 'images/products/watch.jpg'
  },
  {
    id: 6, name: 'Cotton Cargo Trousers',
    category: 'clothing',
    price: 2800, oldPrice: 3600,
    badge: 'sale', rating: 4.4, reviews: 77,
    image: 'images/products/trousers.jpg'
  },
  {
    id: 7, name: 'Portable Blender',
    category: 'electronics',
    price: 3400, oldPrice: null,
    badge: 'new', rating: 4.6, reviews: 61,
    image: 'images/products/blender.jpg'
  },
  {
    id: 8, name: 'Soy Wax Candle Bundle',
    category: 'home',
    price: 1200, oldPrice: null,
    badge: null, rating: 4.9, reviews: 142,
    image: 'images/products/candles.jpg'
  },
  {
    id: 9, name: 'Vitamin C Brightening Cream',
    category: 'beauty',
    price: 2200, oldPrice: 2800,
    badge: 'hot', rating: 4.8, reviews: 313,
    image: 'images/products/cream.jpg'
  },
  {
    id: 10, name: 'Rattan Woven Tote Bag',
    category: 'accessories',
    price: 3100, oldPrice: null,
    badge: null, rating: 4.3, reviews: 29,
    image: 'images/products/tote.jpg'
  },
  {
    id: 11, name: 'Structured Blazer',
    category: 'clothing',
    price: 7200, oldPrice: 9500,
    badge: 'sale', rating: 4.7, reviews: 55,
    image: 'images/products/blazer.jpg'
  },
  {
    id: 12, name: 'Ceramic Planter Set',
    category: 'home',
    price: 1600, oldPrice: null,
    badge: 'new', rating: 4.5, reviews: 44,
    image: 'images/products/planter.jpg'
  }
];

/* ------ STATE ------ */
let cart      = JSON.parse(localStorage.getItem('nexvora_cart') || '[]');
let wishlist  = JSON.parse(localStorage.getItem('nexvora_wishlist') || '[]');
let activeFilter = 'all';
let activeSortVal = 'default';

/* ------ UTILS ------ */
function saveCart() {
  localStorage.setItem('nexvora_cart', JSON.stringify(cart));
}
function saveWishlist() {
  localStorage.setItem('nexvora_wishlist', JSON.stringify(wishlist));
}
function formatPrice(n) {
  return 'Rs. ' + n.toLocaleString('en-LK');
}
function discount(price, old) {
  if (!old) return null;
  return Math.round(((old - price) / old) * 100) + '% OFF';
}
function starsHTML(rating) {
  let html = '<svg class="stars" viewBox="0 0 80 16" fill="none" xmlns="http://www.w3.org/2000/svg">';
  for (let i = 1; i <= 5; i++) {
    const cls = i <= Math.round(rating) ? 'star' : 'star star-empty';
    html += `<path class="${cls}" d="M${(i-1)*16+8} 2l1.5 4.5H14l-3.5 2.5 1.3 4.5-3.3-2.4-3.3 2.4 1.3-4.5L3 6.5h4.5z" />`;
  }
  html += '</svg>';
  return html;
}

/* ------ RENDER STARS (simple) ------ */
function renderStars(rating) {
  const full  = Math.floor(rating);
  const empty = 5 - full;
  let s = '<div class="stars">';
  for (let i = 0; i < full; i++)
    s += `<svg class="star" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>`;
  for (let i = 0; i < empty; i++)
    s += `<svg class="star star-empty" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>`;
  return s + '</div>';
}

/* ------ PRODUCT CARD ------ */
function productCardHTML(p, idx) {
  const inWish = wishlist.includes(p.id);
  const disc   = discount(p.price, p.oldPrice);
  const badgeMap = { sale: 'badge-sale', new: 'badge-new', hot: 'badge-hot' };
  const animDelay = (idx % 6) * 0.07;

  return `
    <div class="product-card" data-id="${p.id}" style="animation-delay:${animDelay}s">
      <div class="product-image-wrap">
        <img
          src="${p.image}"
          alt="${p.name}"
          onerror="this.src='https://placehold.co/400x400/f0ede8/4a4a6a?text=${encodeURIComponent(p.name)}'"
          loading="lazy"
        />
        ${p.badge ? `<span class="product-badge ${badgeMap[p.badge]}">${p.badge}</span>` : ''}
        <button class="wishlist-btn ${inWish ? 'active' : ''}" data-id="${p.id}" aria-label="Add to wishlist">
          <svg viewBox="0 0 24 24" fill="${inWish ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
          </svg>
        </button>
      </div>
      <div class="product-info">
        <span class="product-category-tag">${p.category}</span>
        <div class="product-name">${p.name}</div>
        <div class="product-rating">
          ${renderStars(p.rating)}
          <span class="rating-count">(${p.reviews})</span>
        </div>
        <div class="product-price-row">
          <span class="product-price">${formatPrice(p.price)}</span>
          ${p.oldPrice ? `<span class="product-price-old">${formatPrice(p.oldPrice)}</span>` : ''}
          ${disc ? `<span class="product-discount">${disc}</span>` : ''}
        </div>
      </div>
      <button class="add-to-cart-btn" data-id="${p.id}">Add to Cart</button>
    </div>
  `;
}

/* ------ RENDER PRODUCTS ------ */
function renderProducts() {
  const grid = document.getElementById('productGrid');
  if (!grid) return;

  let filtered = activeFilter === 'all'
    ? [...PRODUCTS]
    : PRODUCTS.filter(p => p.category === activeFilter);

  if (activeSortVal === 'price-low')
    filtered.sort((a, b) => a.price - b.price);
  else if (activeSortVal === 'price-high')
    filtered.sort((a, b) => b.price - a.price);
  else if (activeSortVal === 'name')
    filtered.sort((a, b) => a.name.localeCompare(b.name));

  grid.innerHTML = filtered.length
    ? filtered.map((p, i) => productCardHTML(p, i)).join('')
    : '<p style="color:#aaa;grid-column:1/-1;text-align:center;padding:48px">No products found.</p>';
}

/* ------ CART HELPERS ------ */
function cartCount() {
  return cart.reduce((sum, i) => sum + i.qty, 0);
}
function updateBadges() {
  const cc = cartCount();
  ['cartBadge', 'navCartBadge'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.textContent = cc;
  });
  const wb = document.getElementById('wishlistBadge');
  if (wb) wb.textContent = wishlist.length;
}

function renderCartSidebar() {
  const itemsEl  = document.getElementById('cartItems');
  const emptyEl  = document.getElementById('cartEmpty');
  const footerEl = document.getElementById('cartFooter');
  const totalEl  = document.getElementById('cartTotal');
  if (!itemsEl) return;

  if (cart.length === 0) {
    itemsEl.innerHTML = '';
    itemsEl.appendChild(emptyEl);
    emptyEl.style.display = 'flex';
    if (footerEl) footerEl.style.display = 'none';
    return;
  }

  emptyEl.style.display = 'none';
  let total = 0;

  itemsEl.innerHTML = cart.map(item => {
    const p = PRODUCTS.find(x => x.id === item.id);
    if (!p) return '';
    total += p.price * item.qty;
    return `
      <div class="cart-row" data-id="${p.id}">
        <img
          src="${p.image}"
          alt="${p.name}"
          onerror="this.src='https://placehold.co/64x64/f0ede8/4a4a6a?text=Img'"
        />
        <div class="cart-row-info">
          <div class="cart-row-name">${p.name}</div>
          <div class="cart-row-price">${formatPrice(p.price)}</div>
          <div class="cart-row-qty">
            <button class="qty-btn" data-action="dec" data-id="${p.id}">-</button>
            <span class="qty-num">${item.qty}</span>
            <button class="qty-btn" data-action="inc" data-id="${p.id}">+</button>
          </div>
        </div>
        <button class="cart-row-remove" data-id="${p.id}" aria-label="Remove">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/>
            <path d="M10 11v6"/><path d="M14 11v6"/><path d="M9 6V4h6v2"/>
          </svg>
        </button>
      </div>
    `;
  }).join('');

  itemsEl.appendChild(emptyEl);

  if (totalEl) totalEl.textContent = formatPrice(total);
  if (footerEl) footerEl.style.display = 'block';

  // Build WhatsApp order message
  const msg = cart.map(item => {
    const p = PRODUCTS.find(x => x.id === item.id);
    return p ? `${p.name} x${item.qty} - ${formatPrice(p.price * item.qty)}` : '';
  }).filter(Boolean).join('\n') + `\n\nTotal: ${formatPrice(total)}`;

  const checkoutBtn = document.getElementById('cartCheckoutBtn');
  if (checkoutBtn)
    checkoutBtn.href = 'https://wa.me/94700000000?text=' + encodeURIComponent('Hi! I would like to order:\n\n' + msg);
}

/* ------ OPEN / CLOSE CART ------ */
function openCart() {
  document.getElementById('cartSidebar')?.classList.add('open');
  document.getElementById('cartOverlay')?.classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeCart() {
  document.getElementById('cartSidebar')?.classList.remove('open');
  document.getElementById('cartOverlay')?.classList.remove('open');
  document.body.style.overflow = '';
}

/* ------ ADD TO CART ------ */
function addToCart(id) {
  const existing = cart.find(i => i.id === id);
  if (existing) existing.qty++;
  else cart.push({ id, qty: 1 });
  saveCart();
  updateBadges();
  renderCartSidebar();
  const p = PRODUCTS.find(x => x.id === id);
  showToast((p ? p.name : 'Item') + ' added to cart');
}

/* ------ WISHLIST TOGGLE ------ */
function toggleWishlist(id) {
  const idx = wishlist.indexOf(id);
  if (idx === -1) {
    wishlist.push(id);
    showToast('Added to wishlist');
  } else {
    wishlist.splice(idx, 1);
    showToast('Removed from wishlist');
  }
  saveWishlist();
  updateBadges();
  renderProducts();
}

/* ------ TOAST ------ */
let toastTimer;
function showToast(msg) {
  const t = document.getElementById('toast');
  if (!t) return;
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove('show'), 2800);
}

/* ------ SEARCH SUGGESTIONS ------ */
const SEARCH_SUGGESTIONS = ['Linen Shirt', 'Earbuds', 'Face Serum', 'Cargo Trousers', 'Watch', 'Candles', 'Planter', 'Blazer', 'Tote Bag', 'Blender'];

function initSearch() {
  const input = document.getElementById('searchInput');
  const sugBox = document.getElementById('searchSuggestions');
  const btn    = document.getElementById('searchBtn');
  if (!input || !sugBox) return;

  input.addEventListener('input', () => {
    const val = input.value.trim().toLowerCase();
    if (!val) { sugBox.style.display = 'none'; return; }
    const matches = SEARCH_SUGGESTIONS.filter(s => s.toLowerCase().includes(val));
    if (!matches.length) { sugBox.style.display = 'none'; return; }
    sugBox.innerHTML = matches.map(m => `<div class="suggestion-item">${m}</div>`).join('');
    sugBox.style.display = 'block';
  });

  sugBox.addEventListener('click', e => {
    if (e.target.classList.contains('suggestion-item')) {
      input.value = e.target.textContent;
      sugBox.style.display = 'none';
      input.focus();
    }
  });

  btn.addEventListener('click', () => {
    sugBox.style.display = 'none';
    showToast('Searching for: ' + (input.value || '...'));
  });

  input.addEventListener('keydown', e => {
    if (e.key === 'Enter') btn.click();
  });

  document.addEventListener('click', e => {
    if (!e.target.closest('.search-wrap')) sugBox.style.display = 'none';
  });
}

/* ------ CATEGORY FILTER LINKS ------ */
function initCatLinks() {
  document.querySelectorAll('.cat-link').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      document.querySelectorAll('.cat-link').forEach(l => l.classList.remove('active'));
      link.classList.add('active');
      activeFilter = link.dataset.filter;
      renderProducts();
      document.getElementById('products')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
}

/* ------ SORT ------ */
function initSort() {
  const sel = document.getElementById('sortSelect');
  if (!sel) return;
  sel.addEventListener('change', () => {
    activeSortVal = sel.value;
    renderProducts();
  });
}

/* ------ CART EVENTS (delegated) ------ */
function initCartEvents() {
  const cartBtn   = document.getElementById('cartBtn');
  const navCart   = document.getElementById('navCart');
  const closeBtn  = document.getElementById('cartClose');
  const overlay   = document.getElementById('cartOverlay');
  const cartItems = document.getElementById('cartItems');

  cartBtn?.addEventListener('click', openCart);
  navCart?.addEventListener('click', e => { e.preventDefault(); openCart(); });
  closeBtn?.addEventListener('click', closeCart);
  overlay?.addEventListener('click', closeCart);

  cartItems?.addEventListener('click', e => {
    const btn = e.target.closest('.qty-btn');
    const rem = e.target.closest('.cart-row-remove');
    if (btn) {
      const id  = parseInt(btn.dataset.id);
      const row = cart.find(i => i.id === id);
      if (!row) return;
      if (btn.dataset.action === 'inc') row.qty++;
      else if (btn.dataset.action === 'dec') {
        row.qty--;
        if (row.qty <= 0) cart = cart.filter(i => i.id !== id);
      }
      saveCart();
      updateBadges();
      renderCartSidebar();
    }
    if (rem) {
      const id = parseInt(rem.dataset.id);
      cart = cart.filter(i => i.id !== id);
      saveCart();
      updateBadges();
      renderCartSidebar();
    }
  });
}

/* ------ PRODUCT GRID EVENTS (delegated) ------ */
function initProductEvents() {
  const grid = document.getElementById('productGrid');
  if (!grid) return;

  grid.addEventListener('click', e => {
    const addBtn   = e.target.closest('.add-to-cart-btn');
    const wishBtn  = e.target.closest('.wishlist-btn');
    if (addBtn)  addToCart(parseInt(addBtn.dataset.id));
    if (wishBtn) toggleWishlist(parseInt(wishBtn.dataset.id));
  });
}

/* ------ NEWSLETTER ------ */
function initNewsletter() {
  const form = document.getElementById('newsletterForm');
  form?.addEventListener('submit', e => {
    e.preventDefault();
    const email = form.querySelector('input[type="email"]')?.value;
    showToast('Thank you! ' + (email || '') + ' subscribed.');
    form.reset();
  });
}

/* ------ STICKY HEADER SHADOW ON SCROLL ------ */
function initScrollEffects() {
  const header = document.getElementById('mainHeader');
  window.addEventListener('scroll', () => {
    if (!header) return;
    header.style.boxShadow = window.scrollY > 10
      ? '0 4px 20px rgba(26,26,46,0.10)'
      : '';
  }, { passive: true });
}

/* ------ INIT ------ */
document.addEventListener('DOMContentLoaded', () => {
  renderProducts();
  updateBadges();
  renderCartSidebar();
  initSearch();
  initCatLinks();
  initSort();
  initCartEvents();
  initProductEvents();
  initNewsletter();
  initScrollEffects();
});
