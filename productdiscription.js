/* productdiscription.js
   Manage per-product long descriptions, specs and cart-related metadata.

   Usage:
   - Edit PRODUCT_DETAIL_OVERRIDES below to add descriptions for product ids.
   - Or call `setProductDetail(id, data)` from the browser console to update.

   Behaviour:
   - Applies overrides to `window.PRODUCTS` when available.
   - Re-renders product grid if `renderProducts()` exists.
   - Re-opens product modal if currently open for the updated product.
   - Clicking the modal main image toggles visibility of the description (.product-detail-text).
*/
(function () {
  'use strict';

  const PRODUCT_DETAIL_OVERRIDES = {
    // Example override for product id 1. Replace or add entries for other ids.
    1: {
      longDescription: '<p><strong>Handfree Earbuds</strong> — premium sound, comfortable fit, and fast pairing.</p><ul><li>Bluetooth 5.2</li><li>Up to 24h with case</li><li>IPX4 water resistance</li></ul>',
      specs: ['Bluetooth 5.2', '24h battery (with case)', 'IPX4'],
      gallery: ['images/products/earbud-1.jpg','images/products/earbud-2.jpeg','images/products/earbud-3.png'],
      // Per-product order/configuration options (optional):
      colors: ['Black','Ble'],
      sizes: ['Standard','Large'],
      // delivery should refer to DELIVERY_OPTIONS ids defined in script.js
      delivery: ['express (COD)'],
      // available payment methods for this product
      payments: ['cod','online'],
      // stock / ordering behavior
      stock: 10,
      backorder: false,
      defaultQty: 1
    }
  };

  function applyOverrides() {
    if (!window.PRODUCTS || !Array.isArray(window.PRODUCTS)) return false;
    Object.keys(PRODUCT_DETAIL_OVERRIDES).forEach(k => {
      const id = Number(k);
      const data = PRODUCT_DETAIL_OVERRIDES[k];
      const prod = window.PRODUCTS.find(p => p.id === id);
      if (!prod) return;
      Object.keys(data).forEach(field => {
        prod[field] = Array.isArray(data[field]) ? data[field].slice() : data[field];
      });
    });
    // re-render products if possible
    try { if (typeof renderProducts === 'function') renderProducts(); } catch (e) {}
    return true;
  }

  function setProductDetail(id, data) {
    if (!window.PRODUCTS || !Array.isArray(window.PRODUCTS)) return false;
    const prod = window.PRODUCTS.find(p => p.id === Number(id));
    if (!prod) return false;
    Object.keys(data).forEach(field => {
      prod[field] = Array.isArray(data[field]) ? data[field].slice() : data[field];
    });
    // Re-render grid and modal if open
    try { if (typeof renderProducts === 'function') renderProducts(); } catch (e) {}
    try {
      if (window.detailState && window.detailState.productId === Number(id)) {
        // reopen to refresh
        if (typeof openProductDetails === 'function') openProductDetails(Number(id));
      }
    } catch (e) {}
    return true;
  }

  function initImageToggle() {
    document.addEventListener('click', function (e) {
      const img = e.target.closest('#productModal .product-modal-main img');
      if (!img) return;
      const modal = document.getElementById('productModal');
      if (!modal) return;
      const desc = modal.querySelector('.product-detail-text');
      if (!desc) return;
      desc.style.display = desc.style.display === 'none' ? '' : 'none';
    });
  }

  // Try immediate apply, otherwise wait for DOMContentLoaded
  if (window.PRODUCTS) applyOverrides();
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      applyOverrides();
      initImageToggle();
      window.setProductDetail = setProductDetail;
    });
  } else {
    applyOverrides();
    initImageToggle();
    window.setProductDetail = setProductDetail;
  }

})();
