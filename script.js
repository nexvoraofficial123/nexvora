/* ============================================================
   NEXVORA Store — script.js
   ============================================================ */

'use strict';

const GOOGLE_SHEET_WEB_APP_URL =
  'https://script.google.com/macros/s/AKfycbyLxjzT-b4toJewuQyUDZGy0Nxw6HS9nz3GNgbHB6adwz2Za1UyWjeuEv4iwG0TxtdP/exec';

/* ------ PRODUCT DATA ------- */
const PRODUCTS = [
  {
    id: 1, name: 'Handfree Earbuds',
    category: 'Earbuds',
    price: 1500, oldPrice: 2200,
    badge: 'sale', rating: 4.8, reviews: 124,
    image: 'images/products/earbud-1.jpg',
    description: 'Affordable true-wireless earbuds with comfortable fit and reliable playback.',
    gallery: [
      'images/products/earbud-1.jpg',
      'images/products/earbud-2.jpeg',
      'images/products/earbud-3.png',
      'images/products/earbud-4.webp'
    ]
  },
  {
    id: 2, name: 'Wireless Earbuds',
    category: 'Earbuds',
    price: 3500, oldPrice: 4500,
    badge: 'sale', rating: 4.2, reviews: 102,
    image: 'images/products/earbuds/item_img_32342.png',
    description: 'High-performance wireless earbuds with crystal-clear sound and long battery life.',
    gallery: [
      'images/products/earbuds/item_img_32342.png',
      'images/products/earbuds/item_img_32343.png',
      'images/products/earbuds/item_img_32344.png',
      'images/products/earbuds/item_img_32345.png'
    ]
  },
  {
    id: 3, name: 'Wireless Earbuds Pro',
    category: 'Earbuds',
    price: 2500, oldPrice: 3000,
    badge: 'new', rating: 4.5, reviews: 87,
    image: 'images/products/earbuds.jpg',
    description: 'Premium wireless earbuds with advanced noise cancellation and immersive sound.',
    gallery: [
      'images/products/earbuds/item_img_32346.png',
      'images/products/earbuds/item_img_32347.png',
      'images/products/earbuds/item_img_32348.png',
      'images/products/earbuds/item_img_32349.png'
    ]
  },
  {
    id: 4, name: 'Wireless Earbuds Pro Max',
    category: 'Earbuds',
    price: 1500, oldPrice: 2200,
    badge: 'new', rating: 4.0, reviews: 102,
    image: 'images/products/earbuds.jpg',
    description: 'Top-of-the-line wireless earbuds with cutting-edge technology and exceptional sound quality.',
    gallery: [
      'images/products/earbuds/item_img_32350.png',
      'images/products/earbuds/item_img_32351.png',
      'images/products/earbuds/item_img_32352.png',
      'images/products/earbuds/item_img_32353.png'
    ]
  },
  {
    id: 5, name: 'Wireless One side Earbuds',
    category: 'Earbuds',
    price: 2000, oldPrice: 2500,
    badge: 'new', rating: 4.0, reviews: 102,
    image: 'images/products/earbuds.jpg',
    description: 'Comfortable wireless earbuds for everyday use.',
    gallery: [
      'images/products/earbuds/item_img_32354.png',
      'images/products/earbuds/item_img_32355.png',
      'images/products/earbuds/item_img_32356.png',
      'images/products/earbuds/item_img_32357.png'
    ]
  },
   {
    id: 6, name: 'Sprots Earbuds',
    category: 'Earbuds',
    price: 3000, oldPrice: 3750,
    badge: 'new', rating: 4.0, reviews: 102,
    image: 'images/products/earbuds.jpg',
    description: 'High-performance sports earbuds with secure fit and sweat resistance.',
    gallery: [
      'images/products/earbuds/item_img_32358.png',
      'images/products/earbuds/item_img_32359.png',
      'images/products/earbuds/item_img_32360.png',
      'images/products/earbuds/item_img_32361.png'
    ]
  },
  {
    id: 7, name: 'IMO Power Bank 10000mah',
    category: 'Power banks',
    price: 3750, oldPrice: 4500,
    badge: 'new', rating: 4.2, reviews: 52,
    image: 'images/products/pillow.jpg',
    description: 'Reliable power bank with high-capacity battery for all your devices.',
    gallery: [
      'images/products/pillow.jpg',
      'images/products/pillow_2.jpg',
      'images/products/pillow_3.jpg',
      'images/products/pillow_4.jpg'
    ]
  },
    {
    id: 8, name: 'IMO Power Bank 20000mah',
    category: 'Power banks',
    price: 3000, oldPrice: 3500,
    badge: 'new', rating: 4.6, reviews: 112,
    image: 'images/products/pillow.jpg',
    description: 'High-capacity power bank for all your devices.',
    gallery: [
      'images/products/pillow.jpg',
      'images/products/pillow_2.jpg',
      'images/products/pillow_3.jpg',
      'images/products/pillow_4.jpg'
    ]
  },
     {
    id: 9, name: 'IMO Power Bank 30000mah',
    category: 'Power banks',
    price: 4500, oldPrice: 5400,
    badge: 'new', rating: 5.1, reviews: 152,
    image: 'images/products/pillow.jpg',
    description: 'Premium power bank with exceptional capacity and performance.',
    gallery: [
      'images/products/pillow.jpg',
      'images/products/pillow_2.jpg',
      'images/products/pillow_3.jpg',
      'images/products/pillow_4.jpg'
    ]
  },
      {
    id: 10, name: 'IMO Power Bank Pro 20000mah',
    category: 'Power banks',
    price: 6500, oldPrice: 7500,
    badge: 'hot', rating: 6.1, reviews: 172,
    image: 'images/products/pillow.jpg',
    description: 'Professional-grade power bank with advanced features.',
    gallery: [
      'images/products/pillow.jpg',
      'images/products/pillow_2.jpg',
      'images/products/pillow_3.jpg',
      'images/products/pillow_4.jpg'
    ]
  },
  {
    id: 11, name: 'Iphone 14 pro Max USB C Cable',
    category: 'USB & Charging Cables',
    price: 1850, oldPrice: 2400,
    badge: 'sale', rating: 5.7, reviews: 209,
    image: 'images/products/serum.jpg',
    description: 'High-quality USB C cable for fast charging and data transfer.',
    gallery: [
      'images/products/serum.jpg',
      'images/products/serum_2.jpg',
      'images/products/serum_3.jpg',
      'images/products/serum_4.jpg'
    ]
  },
  {
    id: 12, name: 'Iphone Charging Cable',
    category: 'USB & Charging Cables',
    price: 1850, oldPrice: 2400,
    badge: 'sale', rating: 4.7, reviews: 209,
    image: 'images/products/serum.jpg',
    description: 'Reliable charging cable for your iPhone.',
    gallery: [
      'images/products/serum.jpg',
      'images/products/serum_2.jpg',
      'images/products/serum_3.jpg',
      'images/products/serum_4.jpg'
    ]
  },
    {
    id: 13, name: 'Samsung USB Charger with Cable Type C',
    category: 'USB & Charging Cables',
    price: 1850, oldPrice: 2400,
    badge: 'sale', rating: 4.7, reviews: 209,
    image: 'images/products/serum.jpg',
    description: 'High-quality USB charger with Type C cable.',
    gallery: [
      'images/products/serum.jpg',
      'images/products/serum_2.jpg',
      'images/products/serum_3.jpg',
      'images/products/serum_4.jpg'
    ]
  },
      {
    id: 14, name: 'USB Charger with Cable Type C',
    category: 'USB & Charging Cables',
    price: 1850, oldPrice: 2400,
    badge: 'sale', rating: 4.7, reviews: 209,
    image: 'images/products/serum.jpg',
    description: 'Reliable USB charger with Type C cable.',
    gallery: [
      'images/products/serum.jpg',
      'images/products/serum_2.jpg',
      'images/products/serum_3.jpg',
      'images/products/serum_4.jpg'
    ]
  },
    {
    id: 15, name: 'Charger with Cable Type C',
    category: 'USB & Charging Cables',
    price: 1850, oldPrice: 2400,
    badge: 'sale', rating: 4.7, reviews: 209,
    image: 'images/products/serum.jpg',
    description: 'High-quality charger with Type C cable.',
    gallery: [
      'images/products/serum.jpg',
      'images/products/serum_2.jpg',
      'images/products/serum_3.jpg',
      'images/products/serum_4.jpg'
    ]
  },
     {
    id: 16, name: 'Charger Cable Type C',
    category: 'USB & Charging Cables',
    price: 1850, oldPrice: 2400,
    badge: 'sale', rating: 4.7, reviews: 209,
    image: 'images/products/serum.jpg',
    description: 'Reliable charger cable with Type C connector.',
    gallery: [
      'images/products/serum.jpg',
      'images/products/serum_2.jpg',
      'images/products/serum_3.jpg',
      'images/products/serum_4.jpg'
    ]
  },
    {
    id: 17, name: 'Charger Cable Type Iphone',
    category: 'USB & Charging Cables',
    price: 1850, oldPrice: 2400,
    badge: 'sale', rating: 4.7, reviews: 209,
    image: 'images/products/serum.jpg',
    description: 'Reliable charger cable for your iPhone.',
    gallery: [
      'images/products/serum.jpg',
      'images/products/serum_2.jpg',
      'images/products/serum_3.jpg',
      'images/products/serum_4.jpg'
    ]
  },
    {
    id: 18, name: 'USB Cable Iphone',
    category: 'USB & Charging Cables',
    price: 1850, oldPrice: 2400,
    badge: 'sale', rating: 4.7, reviews: 209,
    image: 'images/products/serum.jpg',
    description: 'High-quality USB cable for your iPhone.',
    gallery: [
      'images/products/serum.jpg',
      'images/products/serum_2.jpg',
      'images/products/serum_3.jpg',
      'images/products/serum_4.jpg'
    ]
  },
    {
    id: 19, name: 'Type C USB Cable',
    category: 'USB & Charging Cables',
    price: 1850, oldPrice: 2400,
    badge: 'sale', rating: 4.7, reviews: 209,
    image: 'images/products/serum.jpg',
    description: 'High-quality USB C cable for fast charging and data transfer.',
    gallery: [
      'images/products/serum.jpg',
      'images/products/serum_2.jpg',
      'images/products/serum_3.jpg',
      'images/products/serum_4.jpg'
    ]
  },
    {
    id: 20, name: 'Two in One Charger Cable',
    category: 'USB & Charging Cables',
    price: 1850, oldPrice: 2400,
    badge: 'sale', rating: 4.7, reviews: 209,
    image: 'images/products/serum.jpg',
    description: 'Convenient two-in-one charger cable for multiple devices.',
    gallery: [
      'images/products/serum.jpg',
      'images/products/serum_2.jpg',
      'images/products/serum_3.jpg',
      'images/products/serum_4.jpg'
    ]
  },
  {
    id: 21, name: 'Two side Type C Charger Cable',
    category: 'USB & Charging Cables',
    price: 1850, oldPrice: 2400,
    badge: 'sale', rating: 4.7, reviews: 209,
    image: 'images/products/serum.jpg',
    description: 'High-quality charger cable with Type C connector.',
    gallery: [
      'images/products/serum.jpg',
      'images/products/serum_2.jpg',
      'images/products/serum_3.jpg',
      'images/products/serum_4.jpg'
    ]
  },
    {
    id: 22, name: 'Power Cable',
    category: 'USB & Charging Cables',
    price: 1850, oldPrice: 2400,
    badge: 'sale', rating: 4.7, reviews: 209,
    image: 'images/products/serum.jpg',
    description: 'Reliable power cable for your devices.',
    gallery: [
      'images/products/serum.jpg',
      'images/products/serum_2.jpg',
      'images/products/serum_3.jpg',
      'images/products/serum_4.jpg'
    ]
  },
     {
    id: 23, name: 'Multi Purpose Charger Cable',
    category: 'USB & Charging Cables',
    price: 1850, oldPrice: 2400,
    badge: 'sale', rating: 4.7, reviews: 209,
    image: 'images/products/serum.jpg',
    description: 'Versatile charger cable for multiple devices.',
    gallery: [
      'images/products/serum.jpg',
      'images/products/serum_2.jpg',
      'images/products/serum_3.jpg',
      'images/products/serum_4.jpg'
    ]
  },
     {
    id: 24, name: 'Huwai Charger Cable',
    category: 'USB & Charging Cables',
    price: 1850, oldPrice: 2400,
    badge: 'sale', rating: 4.7, reviews: 209,
    image: 'images/products/serum.jpg',
    description: 'Reliable charger cable for your Huawei device.',
    gallery: [
      'images/products/serum.jpg',
      'images/products/serum_2.jpg',
      'images/products/serum_3.jpg',
      'images/products/serum_4.jpg'
    ]
  },
    {
    id: 25, name: 'Nokia Charger Cable',
    category: 'USB & Charging Cables',
    price: 1850, oldPrice: 2400,
    badge: 'sale', rating: 4.7, reviews: 209,
    image: 'images/products/serum.jpg',
    description: 'Reliable charger cable for your Nokia device.',
    gallery: [
      'images/products/serum.jpg',
      'images/products/serum_2.jpg',
      'images/products/serum_3.jpg',
      'images/products/serum_4.jpg'
    ]
  },
    {
    id: 26, name: 'Samsung Charger Cable',
    category: 'USB & Charging Cables',
    price: 1850, oldPrice: 2400,
    badge: 'sale', rating: 4.7, reviews: 209,
    image: 'images/products/serum.jpg',
    description: 'High-quality charger cable for your Samsung device.',
    gallery: [
      'images/products/serum.jpg',
      'images/products/serum_2.jpg',
      'images/products/serum_3.jpg',
      'images/products/serum_4.jpg'
    ]
  },
    {
    id: 27, name: 'Samsung Charger Cable Type C',
    category: 'USB & Charging Cables',
    price: 1850, oldPrice: 2400,
    badge: 'sale', rating: 4.7, reviews: 209,
    image: 'images/products/serum.jpg',
    description: 'High-quality USB C cable for fast charging and data transfer.',
    gallery: [
      'images/products/serum.jpg',
      'images/products/serum_2.jpg',
      'images/products/serum_3.jpg',
      'images/products/serum_4.jpg'
    ]
  },
    {
    id: 28, name: 'Xiomi Charger Cable',
    category: 'USB & Charging Cables',
    price: 1850, oldPrice: 2400,
    badge: 'sale', rating: 4.7, reviews: 209,
    image: 'images/products/serum.jpg',
    description: 'Reliable charger cable for your Xiaomi device.',
    gallery: [
      'images/products/serum.jpg',
      'images/products/serum_2.jpg',
      'images/products/serum_3.jpg',
      'images/products/serum_4.jpg'
    ]
  },
      {
    id: 29, name: 'Oppo Charger Cable Type C',
    category: 'USB & Charging Cables',
    price: 1850, oldPrice: 2400,
    badge: 'sale', rating: 4.7, reviews: 209,
    image: 'images/products/serum.jpg',
    description: 'High-quality charger cable with Type C connector.',
    gallery: [
      'images/products/serum.jpg',
      'images/products/serum_2.jpg',
      'images/products/serum_3.jpg',
      'images/products/serum_4.jpg'
    ]
  },
  {
    id: 30, name: 'Iphone 14 Pro Max Case',
    category: 'Phone Cases',
    price: 5600, oldPrice: null,
    badge: 'hot', rating: 4.5, reviews: 38,
    image: 'images/products/watch.jpg',
    description: 'Protective case for your iPhone 14 Pro Max.',
    gallery: [
      'images/products/watch.jpg',
      'images/products/watch_2.jpg',
      'images/products/watch_3.jpg',
      'images/products/watch_4.jpg'
    ]
  },
    {
    id: 31, name: 'Iphone 14 Pro Max Case',
    category: 'Phone Cases',
    price: 5600, oldPrice: null,
    badge: 'hot', rating: 4.5, reviews: 38,
    image: 'images/products/watch.jpg',
    description: 'Protective case for your iPhone 14 Pro Max.',
    gallery: [
      'images/products/watch.jpg',
      'images/products/watch_2.jpg',
      'images/products/watch_3.jpg',
      'images/products/watch_4.jpg'
    ]
  },
    {
    id: 32, name: 'Iphone 14 Pro Max Case',
    category: 'Phone Cases',
    price: 5600, oldPrice: null,
    badge: 'hot', rating: 4.5, reviews: 38,
    image: 'images/products/watch.jpg',
    description: 'Protective case for your iPhone 14 Pro Max.',
    gallery: [
      'images/products/watch.jpg',
      'images/products/watch_2.jpg',
      'images/products/watch_3.jpg',
      'images/products/watch_4.jpg'
    ]
  },
    {
    id: 33, name: 'Iphone 14 Pro Max Case',
    category: 'Phone Cases',
    price: 5600, oldPrice: null,
    badge: 'hot', rating: 4.5, reviews: 38,
    image: 'images/products/watch.jpg',
    description: 'Protective case for your iPhone 14 Pro Max.',
    gallery: [
      'images/products/watch.jpg',
      'images/products/watch_2.jpg',
      'images/products/watch_3.jpg',
      'images/products/watch_4.jpg'
    ]
  },
    {
    id: 34, name: 'Iphone 14 Pro Max Case',
    category: 'Phone Cases',
    price: 5600, oldPrice: null,
    badge: 'hot', rating: 4.5, reviews: 38,
    image: 'images/products/watch.jpg',
    description: 'Protective case for your iPhone 14 Pro Max.',
    gallery: [
      'images/products/watch.jpg',
      'images/products/watch_2.jpg',
      'images/products/watch_3.jpg',
      'images/products/watch_4.jpg'
    ]
  },
    {
    id: 35, name: 'Iphone 14 Pro Max Case',
    category: 'Phone Cases',
    price: 5600, oldPrice: null,
    badge: 'hot', rating: 4.5, reviews: 38,
    image: 'images/products/watch.jpg',
    description: 'Protective case for your iPhone 14 Pro Max.',
    gallery: [
      'images/products/watch.jpg',
      'images/products/watch_2.jpg',
      'images/products/watch_3.jpg',
      'images/products/watch_4.jpg'
    ]
  },
    {
    id: 36, name: 'Iphone 14 Pro Max Case',
    category: 'Phone Cases',
    price: 5600, oldPrice: null,
    badge: 'hot', rating: 4.5, reviews: 38,
    image: 'images/products/watch.jpg',
    description: 'Protective case for your iPhone 14 Pro Max.',
    gallery: [
      'images/products/watch.jpg',
      'images/products/watch_2.jpg',
      'images/products/watch_3.jpg',
      'images/products/watch_4.jpg'
    ]
  },
    {
    id: 37, name: 'Iphone 14 Pro Max Case',
    category: 'Phone Cases',
    price: 5600, oldPrice: null,
    badge: 'hot', rating: 4.5, reviews: 38,
    image: 'images/products/watch.jpg',
    description: 'Protective case for your iPhone 14 Pro Max.',
    gallery: [
      'images/products/watch.jpg',
      'images/products/watch_2.jpg',
      'images/products/watch_3.jpg',
      'images/products/watch_4.jpg'
    ]
  },
    {
    id: 38, name: 'Iphone 14 Pro Max Case',
    category: 'Phone Cases',
    price: 5600, oldPrice: null,
    badge: 'hot', rating: 4.5, reviews: 38,
    image: 'images/products/watch.jpg',
    description: 'Protective case for your iPhone 14 Pro Max.',
    gallery: [
      'images/products/watch.jpg',
      'images/products/watch_2.jpg',
      'images/products/watch_3.jpg',
      'images/products/watch_4.jpg'
    ]
  },
    {
    id: 39, name: 'Iphone 14 Pro Max Case',
    category: 'Phone Cases',
    price: 5600, oldPrice: null,
    badge: 'hot', rating: 4.5, reviews: 38,
    image: 'images/products/watch.jpg',
    description: 'Protective case for your iPhone 14 Pro Max.',
    gallery: [
      'images/products/watch.jpg',
      'images/products/watch_2.jpg',
      'images/products/watch_3.jpg',
      'images/products/watch_4.jpg'
    ]
  },
    {
    id: 40, name: 'Iphone 14 Pro Max Case',
    category: 'Phone Cases',
    price: 5600, oldPrice: null,
    badge: 'hot', rating: 4.5, reviews: 38,
    image: 'images/products/watch.jpg',
    description: 'Protective case for your iPhone 14 Pro Max.',
    gallery: [
      'images/products/watch.jpg',
      'images/products/watch_2.jpg',
      'images/products/watch_3.jpg',
      'images/products/watch_4.jpg'
    ]
  },
    {
    id: 41, name: 'Iphone 14 Pro Max Case',
    category: 'Phone Cases',
    price: 5600, oldPrice: null,
    badge: 'hot', rating: 4.5, reviews: 38,
    image: 'images/products/watch.jpg',
    description: 'Protective case for your iPhone 14 Pro Max.',
    gallery: [
      'images/products/watch.jpg',
      'images/products/watch_2.jpg',
      'images/products/watch_3.jpg',
      'images/products/watch_4.jpg'
    ]
  },
    {
    id: 42, name: 'Iphone 14 Pro Max Case',
    category: 'Phone Cases',
    price: 5600, oldPrice: null,
    badge: 'hot', rating: 4.5, reviews: 38,
    image: 'images/products/watch.jpg',
    description: 'Protective case for your iPhone 14 Pro Max.',
    gallery: [
      'images/products/watch.jpg',
      'images/products/watch_2.jpg',
      'images/products/watch_3.jpg',
      'images/products/watch_4.jpg'
    ]
  },
    {
    id: 43, name: 'Iphone 14 Pro Max Case',
    category: 'Phone Cases',
    price: 5600, oldPrice: null,
    badge: 'hot', rating: 4.5, reviews: 38,
    image: 'images/products/watch.jpg',
    description: 'Protective case for your iPhone 14 Pro Max.',
    gallery: [
      'images/products/watch.jpg',
      'images/products/watch_2.jpg',
      'images/products/watch_3.jpg',
      'images/products/watch_4.jpg'
    ]
  },
    {
    id: 44, name: 'Iphone 14 Pro Max Case',
    category: 'Phone Cases',
    price: 5600, oldPrice: null,
    badge: 'hot', rating: 4.5, reviews: 38,
    image: 'images/products/watch.jpg',
    description: 'Protective case for your iPhone 14 Pro Max.',
    gallery: [
      'images/products/watch.jpg',
      'images/products/watch_2.jpg',
      'images/products/watch_3.jpg',
      'images/products/watch_4.jpg'
    ]
  },
    {
    id: 45, name: 'Iphone 14 Pro Max Case',
    category: 'Phone Cases',
    price: 5600, oldPrice: null,
    badge: 'hot', rating: 4.5, reviews: 38,
    image: 'images/products/watch.jpg',
    description: 'Protective case for your iPhone 14 Pro Max.',
    gallery: [
      'images/products/watch.jpg',
      'images/products/watch_2.jpg',
      'images/products/watch_3.jpg',
      'images/products/watch_4.jpg'
    ]
  },
    {
    id: 46, name: 'Iphone 14 Pro Max Case',
    category: 'Phone Cases',
    price: 5600, oldPrice: null,
    badge: 'hot', rating: 4.5, reviews: 38,
    image: 'images/products/watch.jpg',
    description: 'Protective case for your iPhone 14 Pro Max.',
    gallery: [
      'images/products/watch.jpg',
      'images/products/watch_2.jpg',
      'images/products/watch_3.jpg',
      'images/products/watch_4.jpg'
    ]
  },
    {
    id: 47, name: 'Iphone 14 Pro Max Case',
    category: 'Phone Cases',
    price: 5600, oldPrice: null,
    badge: 'hot', rating: 4.5, reviews: 38,
    image: 'images/products/watch.jpg',
    description: 'Protective case for your iPhone 14 Pro Max.',
    gallery: [
      'images/products/watch.jpg',
      'images/products/watch_2.jpg',
      'images/products/watch_3.jpg',
      'images/products/watch_4.jpg'
    ]
  },
    {
    id: 48, name: 'Iphone 14 Pro Max Case',
    category: 'Phone Cases',
    price: 5600, oldPrice: null,
    badge: 'hot', rating: 4.5, reviews: 38,
    image: 'images/products/watch.jpg',
    description: 'Protective case for your iPhone 14 Pro Max.',
    gallery: [
      'images/products/watch.jpg',
      'images/products/watch_2.jpg',
      'images/products/watch_3.jpg',
      'images/products/watch_4.jpg'
    ]
  },
    {
    id: 49, name: 'Iphone 14 Pro Max Case',
    category: 'Phone Cases',
    price: 5600, oldPrice: null,
    badge: 'hot', rating: 4.5, reviews: 38,
    image: 'images/products/watch.jpg',
    description: 'Protective case for your iPhone 14 Pro Max.',
    gallery: [
      'images/products/watch.jpg',
      'images/products/watch_2.jpg',
      'images/products/watch_3.jpg',
      'images/products/watch_4.jpg'
    ]
  },
    {
    id: 50, name: 'Iphone 14 Pro Max Case',
    category: 'Phone Cases',
    price: 5600, oldPrice: null,
    badge: 'hot', rating: 4.5, reviews: 38,
    image: 'images/products/watch.jpg',
    description: 'Protective case for your iPhone 14 Pro Max.',
    gallery: [
      'images/products/watch.jpg',
      'images/products/watch_2.jpg',
      'images/products/watch_3.jpg',
      'images/products/watch_4.jpg'
    ]
  },
    {
    id: 51, name: 'Iphone 14 Pro Max Case',
    category: 'Phone Cases',
    price: 5600, oldPrice: null,
    badge: 'hot', rating: 4.5, reviews: 38,
    image: 'images/products/watch.jpg',
    description: 'Protective case for your iPhone 14 Pro Max.',
    gallery: [
      'images/products/watch.jpg',
      'images/products/watch_2.jpg',
      'images/products/watch_3.jpg',
      'images/products/watch_4.jpg'
    ]
  },
    {
    id: 52, name: 'Iphone 14 Pro Max Case',
    category: 'Phone Cases',
    price: 5600, oldPrice: null,
    badge: 'hot', rating: 4.5, reviews: 38,
    image: 'images/products/watch.jpg',
    description: 'Protective case for your iPhone 14 Pro Max.',
    gallery: [
      'images/products/watch.jpg',
      'images/products/watch_2.jpg',
      'images/products/watch_3.jpg',
      'images/products/watch_4.jpg'
    ]
  },
    {
    id: 53, name: 'Iphone 14 Pro Max Case',
    category: 'Phone Cases',
    price: 5600, oldPrice: null,
    badge: 'hot', rating: 4.5, reviews: 38,
    image: 'images/products/watch.jpg',
    description: 'Protective case for your iPhone 14 Pro Max.',
    gallery: [
      'images/products/watch.jpg',
      'images/products/watch_2.jpg',
      'images/products/watch_3.jpg',
      'images/products/watch_4.jpg'
    ]
  },
    {
    id: 54, name: 'Iphone 14 Pro Max Case',
    category: 'Phone Cases',
    price: 5600, oldPrice: null,
    badge: 'hot', rating: 4.5, reviews: 38,
    image: 'images/products/watch.jpg',
    description: 'Protective case for your iPhone 14 Pro Max.',
    gallery: [
      'images/products/watch.jpg',
      'images/products/watch_2.jpg',
      'images/products/watch_3.jpg',
      'images/products/watch_4.jpg'
    ]
  },
    {
    id: 55, name: 'Iphone 14 Pro Max Case',
    category: 'Phone Cases',
    price: 5600, oldPrice: null,
    badge: 'hot', rating: 4.5, reviews: 38,
    image: 'images/products/watch.jpg',
    description: 'Protective case for your iPhone 14 Pro Max.',
    gallery: [
      'images/products/watch.jpg',
      'images/products/watch_2.jpg',
      'images/products/watch_3.jpg',
      'images/products/watch_4.jpg'
    ]
  },
    {
    id: 56, name: 'Iphone 14 Pro Max Case',
    category: 'Phone Cases',
    price: 5600, oldPrice: null,
    badge: 'hot', rating: 4.5, reviews: 38,
    image: 'images/products/watch.jpg',
    description: 'Protective case for your iPhone 14 Pro Max.',
    gallery: [
      'images/products/watch.jpg',
      'images/products/watch_2.jpg',
      'images/products/watch_3.jpg',
      'images/products/watch_4.jpg'
    ]
  },
    {
    id: 57, name: 'Iphone 14 Pro Max Case',
    category: 'Phone Cases',
    price: 5600, oldPrice: null,
    badge: 'hot', rating: 4.5, reviews: 38,
    image: 'images/products/watch.jpg',
    description: 'Protective case for your iPhone 14 Pro Max.',
    gallery: [
      'images/products/watch.jpg',
      'images/products/watch_2.jpg',
      'images/products/watch_3.jpg',
      'images/products/watch_4.jpg'
    ]
  },
    {
    id: 58, name: 'Iphone 14 Pro Max Case',
    category: 'Phone Cases',
    price: 5600, oldPrice: null,
    badge: 'hot', rating: 4.5, reviews: 38,
    image: 'images/products/watch.jpg',
    description: 'Protective case for your iPhone 14 Pro Max.',
    gallery: [
      'images/products/watch.jpg',
      'images/products/watch_2.jpg',
      'images/products/watch_3.jpg',
      'images/products/watch_4.jpg'
    ]
  },
    {
    id: 59, name: 'Iphone 14 Pro Max Case',
    category: 'Phone Cases',
    price: 5600, oldPrice: null,
    badge: 'hot', rating: 4.5, reviews: 38,
    image: 'images/products/watch.jpg',
    description: 'Protective case for your iPhone 14 Pro Max.',
    gallery: [
      'images/products/watch.jpg',
      'images/products/watch_2.jpg',
      'images/products/watch_3.jpg',
      'images/products/watch_4.jpg'
    ]
  },
  {
    id: 60, name: 'Big Selfie LED Ring Light with 3 phone holders ',
    category: 'Camera Accessories',
    price: 2800, oldPrice: 3600,
    badge: 'sale', rating: 4.4, reviews: 77,
    image: 'images/products/trousers.jpg',
    description: 'A versatile LED ring light with 3 phone holders for optimal photography.',
    gallery: [
      'images/products/trousers.jpg',
      'images/products/trousers_2.jpg',
      'images/products/trousers_3.jpg',
      'images/products/trousers_4.jpg'
    ]
  },
  {
    id: 61, name: 'LED Ring Light with phone holder ',
    category: 'Camera Accessories',
    price: 2800, oldPrice: 3600,
    badge: 'sale', rating: 4.4, reviews: 77,
    image: 'images/products/trousers.jpg',
    description: 'A versatile LED ring light with 3 phone holders for optimal photography.',
    gallery: [
      'images/products/trousers.jpg',
      'images/products/trousers_2.jpg',
      'images/products/trousers_3.jpg',
      'images/products/trousers_4.jpg'
    ]
  },
  {
    id: 62, name: 'Desk Ring Light with phone holders ',
    category: 'Camera Accessories',
    price: 2800, oldPrice: 3600,
    badge: 'sale', rating: 4.4, reviews: 77,
    image: 'images/products/trousers.jpg',
    description: 'A versatile LED ring light with 3 phone holders for optimal photography.',
    gallery: [
      'images/products/trousers.jpg',
      'images/products/trousers_2.jpg',
      'images/products/trousers_3.jpg',
      'images/products/trousers_4.jpg'
    ]
  },
  {
    id: 63, name: 'LED Ring Light with 2 phone holders ',
    category: 'Phone Holders',
    price: 2800, oldPrice: 3600,
    badge: 'sale', rating: 4.4, reviews: 77,
    image: 'images/products/trousers.jpg',
    description: 'A versatile LED ring light with 2 phone holders for optimal photography.',
    gallery: [
      'images/products/trousers.jpg',
      'images/products/trousers_2.jpg',
      'images/products/trousers_3.jpg',
      'images/products/trousers_4.jpg'
    ]
  },
  {
    id: 64, name: 'Phone holders ',
    category: 'Phone Holders',
    price: 2800, oldPrice: 3600,
    badge: 'sale', rating: 4.4, reviews: 77,
    image: 'images/products/trousers.jpg',
    description: 'A versatile phone holder for optimal convenience.',
    gallery: [
      'images/products/trousers.jpg',
      'images/products/trousers_2.jpg',
      'images/products/trousers_3.jpg',
      'images/products/trousers_4.jpg'
    ]
  },
  {
    id: 65, name: 'Bike Phone holders ',
    category: 'Phone Holders',
    price: 2800, oldPrice: 3600,
    badge: 'sale', rating: 4.4, reviews: 77,
    image: 'images/products/trousers.jpg',
    description: 'A sturdy phone holder for cycling enthusiasts.',
    gallery: [
      'images/products/trousers.jpg',
      'images/products/trousers_2.jpg',
      'images/products/trousers_3.jpg',
      'images/products/trousers_4.jpg'
    ]
  },
  {
    id: 66, name: 'Car Phone Holder',
    category: 'Phone Holders',
    price: 2800, oldPrice: 3600,
    badge: 'sale', rating: 4.4, reviews: 77,
    image: 'images/products/trousers.jpg',
    description: 'A convenient phone holder for your car.',
    gallery: [
      'images/products/trousers.jpg',
      'images/products/trousers_2.jpg',
      'images/products/trousers_3.jpg',
      'images/products/trousers_4.jpg'
    ]
  },
    {
    id: 67, name: 'Wall Phone Holder',
    category: 'Phone Holders',
    price: 2800, oldPrice: 3600,
    badge: 'sale', rating: 4.4, reviews: 77,
    image: 'images/products/trousers.jpg',
    description: 'A stylish phone holder for your wall.',
    gallery: [
      'images/products/trousers.jpg',
      'images/products/trousers_2.jpg',
      'images/products/trousers_3.jpg',
      'images/products/trousers_4.jpg'
    ]
  },
  {
    id: 68, name: 'Waterproof Iphone Holder',
    category: 'Phone Holders',
    price: 3400, oldPrice: 3900,
    badge: 'new', rating: 4.6, reviews: 61,
    image: 'images/products/blender.jpg',
    description: 'A portable blender for smoothies and more.',
    gallery: [
      'images/products/blender.jpg',
      'images/products/blender_2.jpg',
      'images/products/blender_3.jpg',
      'images/products/blender_4.jpg'
    ]
  },
  {
    id: 101, name: 'Waterproof Iphone Holder',
    category: 'Phone Holders',
    price: 3400, oldPrice: 3900,
    badge: 'new', rating: 4.6, reviews: 61,
    image: 'images/products/blender.jpg',
    description: 'A portable blender for smoothies and more.',
    gallery: [
      'images/products/blender.jpg',
      'images/products/blender_2.jpg',
      'images/products/blender_3.jpg',
      'images/products/blender_4.jpg'
    ]
  },
  {
    id: 102, name: 'Waterproof Iphone Holder',
    category: 'Phone Holders',
    price: 3400, oldPrice: 3900,
    badge: 'new', rating: 4.6, reviews: 61,
    image: 'images/products/blender.jpg',
    description: 'A portable blender for smoothies and more.',
    gallery: [
      'images/products/blender.jpg',
      'images/products/blender_2.jpg',
      'images/products/blender_3.jpg',
      'images/products/blender_4.jpg'
    ]
  },
  {
    id: 103, name: 'Waterproof Iphone Holder',
    category: 'Phone Holders',
    price: 3400, oldPrice: 3900,
    badge: 'new', rating: 4.6, reviews: 61,
    image: 'images/products/blender.jpg',
    description: 'A portable blender for smoothies and more.',
    gallery: [
      'images/products/blender.jpg',
      'images/products/blender_2.jpg',
      'images/products/blender_3.jpg',
      'images/products/blender_4.jpg'
    ]
  },
  {
    id: 104, name: 'Waterproof Iphone Holder',
    category: 'Phone Holders',
    price: 3400, oldPrice: 3900,
    badge: 'new', rating: 4.6, reviews: 61,
    image: 'images/products/blender.jpg',
    description: 'A portable blender for smoothies and more.',
    gallery: [
      'images/products/blender.jpg',
      'images/products/blender_2.jpg',
      'images/products/blender_3.jpg',
      'images/products/blender_4.jpg'
    ]
  },
  

];

/* ------ STATE ------ */
let cart      = JSON.parse(localStorage.getItem('nexvora_cart') || '[]');
let wishlist  = JSON.parse(localStorage.getItem('nexvora_wishlist') || '[]');
let activeFilter = 'all';
let activeSortVal = 'default';
let activeSearchQuery = '';

function getQueryParam(name) {
  return new URLSearchParams(window.location.search).get(name) || '';
}

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

const DELIVERY_OPTIONS = [
  { id: 'express (COD)', label: 'Express delivery • 2-3 working days', fee: 450 }
];
const DETAIL_COLORS = ['Black', 'White'];
const DETAIL_SIZES = ['Standard'];
let detailState = null;

function getProductDescription(p) {
  // Prefer explicit longDescription (can contain HTML). Fall back to short description.
  if (p.longDescription) return p.longDescription;
  if (p.description) return p.description;
  return `Enjoy a premium ${p.category.toLowerCase()} experience with refined build quality, fast performance, and reliable island delivery.`;
}

function getProductGallery(p) {
  if (Array.isArray(p.gallery) && p.gallery.length) return p.gallery;
  return [p.image, p.image, p.image, p.image].filter(Boolean);
}

function getDeliveryOption(id) {
  return DELIVERY_OPTIONS.find(opt => opt.id === id) || DELIVERY_OPTIONS[0];
}

function validateDetailStateForCheckout(p) {
  if (!detailState) return false;

  const requiredChecks = [];
  const color = String(detailState.color || '').trim();
  const size = String(detailState.size || '').trim();
  const address = String(detailState.address || '').trim();
  const name = String(detailState.name || '').trim();
  const phone = String(detailState.phone || '').trim();
  const payment = String(detailState.payment || '').trim();
  const delivery = String(detailState.delivery || '').trim();

  if (!color) requiredChecks.push('color');
  if (!size) requiredChecks.push('size');
  if (!payment) requiredChecks.push('payment method');
  if (!delivery) requiredChecks.push('delivery option');
  if (!address) requiredChecks.push('delivery address');
  if (!name) requiredChecks.push('customer name');
  if (!phone) requiredChecks.push('phone number');

  if (requiredChecks.length) {
    showToast('Please complete: ' + requiredChecks.join(', '));
    return false;
  }

  return true;
}

function createProductModal() {
  let modal = document.getElementById('productModal');
  if (modal) return modal;
  modal = document.createElement('div');
  modal.id = 'productModal';
  modal.className = 'product-modal';
  document.body.appendChild(modal);
  return modal;
}

function openProductDetails(id) {
  let p = PRODUCTS.find(item => item.id === id);
  let resolvedId = id;-1
  if (!p && id > 100) {
    const fallback = PRODUCTS.find(item => item.id === id - 100);
    if (fallback) {
      p = fallback;
      resolvedId = fallback.id;
    }
  }
  if (!p) return;
  const gallery = getProductGallery(p);
  detailState = {
    productId: resolvedId,
    image: gallery[0],
    qty: (typeof p.defaultQty === 'number' && p.defaultQty > 0) ? p.defaultQty : 1,
    color: (p.colors && p.colors[0]) || DETAIL_COLORS[0],
    size: (p.sizes && p.sizes[0]) || DETAIL_SIZES[0],
    delivery: (p.delivery && p.delivery[0]) || DELIVERY_OPTIONS[0].id,
    payment: (Array.isArray(p.payments) && p.payments[0]) || 'cod',
    address: '',
    name: '',
    phone: '',
    email: '',
    offersOptIn: false
  };
  const modal = createProductModal();
  modal.innerHTML = productDetailHTML(p);
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
  bindProductModalEvents(p);
  updateProductSummary(p);
}

function closeProductModal() {
  const modal = document.getElementById('productModal');
  if (!modal) return;
  modal.classList.remove('open');
  document.body.style.overflow = '';
}

function productDetailHTML(p) {
  const gallery = getProductGallery(p);
  const colorsList = Array.isArray(p.colors) && p.colors.length ? p.colors : DETAIL_COLORS;
  const sizesList = Array.isArray(p.sizes) && p.sizes.length ? p.sizes : DETAIL_SIZES;
  const colorOptions = colorsList.map(color => `<option value="${color}" ${color === detailState.color ? 'selected' : ''}>${color}</option>`).join('');
  const sizeOptions = sizesList.map(size => `<option value="${size}" ${size === detailState.size ? 'selected' : ''}>${size}</option>`).join('');
  const effectiveDelivery = Array.isArray(p.delivery) && p.delivery.length
    ? DELIVERY_OPTIONS.filter(o => p.delivery.includes(o.id))
    : DELIVERY_OPTIONS;

  const deliveryOptions = effectiveDelivery.map(option => `
      <label class="delivery-option">
        <input type="radio" name="detailDelivery" value="${option.id}" ${option.id === detailState.delivery ? 'checked' : ''} />
        <span>${option.label}</span>
        <strong>${formatPrice(option.fee)}</strong>
      </label>
  `).join('');
  const paymentList = Array.isArray(p.payments) && p.payments.length ? p.payments : ['cod','online'];
  const paymentLabels = { cod: 'Cash on delivery', online: 'Online / Card' };
  const paymentOptions = paymentList.map(pid => `
    <label class="payment-option">
      <input type="radio" name="detailPayment" value="${pid}" ${pid === detailState.payment ? 'checked' : ''} />
      <span>${paymentLabels[pid] || pid}</span>
    </label>
  `).join('');
  const galleryThumbs = gallery.map((src, index) => `
      <button type="button" class="product-gallery-thumb ${src === detailState.image ? 'active' : ''}" data-src="${src}" aria-label="Show photo ${index + 1}">
        <img src="${src}"
             alt="${p.name} photo ${index + 1}"
             onerror="this.src='https://placehold.co/120x120/f0ede8/4a4a6a?text=${encodeURIComponent(p.name)}'"
        />
      </button>
  `).join('');

  return `
    <div class="product-modal-backdrop">
      <div class="product-modal-card">
        <button type="button" class="product-modal-close" aria-label="Close product details">×</button>
        <div class="product-modal-grid">
          <div class="product-modal-gallery">
            <div class="product-modal-main">
              <img src="${detailState.image}"
                   alt="${p.name}"
                   onerror="this.src='https://placehold.co/500x500/f0ede8/4a4a6a?text=${encodeURIComponent(p.name)}'"
              />
            </div>
            <div class="product-gallery-list">
              ${galleryThumbs}
            </div>
          </div>
          <div class="product-modal-content">
            <span class="product-category-tag">${p.category}</span>
            <h2>${p.name}</h2>
            <div class="product-rating">${renderStars(p.rating)}<span class="rating-count">(${p.reviews} reviews)</span></div>
            <p class="product-detail-text">${getProductDescription(p)}</p>
            <div class="product-price-row">
              <span class="product-price">${formatPrice(p.price)}</span>
              ${p.oldPrice ? `<span class="product-price-old">${formatPrice(p.oldPrice)}</span>` : ''}
              ${discount(p.price, p.oldPrice) ? `<span class="product-discount">${discount(p.price, p.oldPrice)}</span>` : ''}
            </div>
            <form class="product-detail-form">
              <div class="form-row">
                <label for="detailColor">Choose color</label>
                <select id="detailColor" name="color">${colorOptions}</select>
              </div>
              <div class="form-row">
                <label for="detailSize">Size / fit</label>
                <select id="detailSize" name="size">${sizeOptions}</select>
              </div>
              <div class="form-row qty-row">
                <label>Quantity</label>
                <div class="qty-control">
                  <button type="button" class="qty-btn qty-dec">−</button>
                  <span class="qty-count">${detailState.qty}</span>
                  <button type="button" class="qty-btn qty-inc">+</button>
                </div>
              </div>
              <div class="product-delivery-group">
                <div class="product-detail-group-label">Delivery option</div>
                ${deliveryOptions}
              </div>
              <div class="form-row">
                <label for="detailAddress">Delivery address</label>
                <textarea id="detailAddress" name="address" placeholder="House number, street, city, postal code"></textarea>
              </div>
              <div class="form-row">
                <label for="detailName">Customer name</label>
                <input id="detailName" name="name" type="text" placeholder="Your name" />
              </div>
              <div class="form-row">
                <label for="detailPhone">Phone number</label>
                <input id="detailPhone" name="phone" type="tel" placeholder="+94 7XXXXXXXX" />
              </div>
              <div class="form-row">
                <label for="detailEmail">Email address</label>
                <input id="detailEmail" name="email" type="email" placeholder="you@example.com" />
              </div>
              <div class="form-row offer-optin-row">
                <label class="offer-optin">
                  <input id="detailOffersOptIn" name="offersOptIn" type="checkbox" />
                  <span>I would like to receive NEXVORA offers</span>
                </label>
              </div>
              <div class="form-row">
                <div class="product-detail-group-label">Payment method</div>
                <div class="product-payment-group">${paymentOptions}</div>
              </div>
              <div class="product-summary">
                <div><span>Price before delivery</span><strong id="detailSubtotal">${formatPrice(p.price * detailState.qty)}</strong></div>
                <div><span>Delivery fee</span><strong id="detailDeliveryFee">${formatPrice(getDeliveryOption(detailState.delivery).fee)}</strong></div>
                <div class="product-summary-total"><span>Total</span><strong id="detailTotal">${formatPrice(p.price * detailState.qty + getDeliveryOption(detailState.delivery).fee * detailState.qty)}</strong></div>
              </div>
              <div class="detail-actions">
                <button type="button" class="btn-ghost detail-add-cart" data-id="${p.id}">Add to Cart</button>
                <button type="submit" class="btn-primary detail-order-now">Order now</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  `;
}

function bindProductModalEvents(p) {
  const modal = document.getElementById('productModal');
  if (!modal) return;
  const backdrop = modal.querySelector('.product-modal-backdrop');
  const closeBtn = modal.querySelector('.product-modal-close');
  const qtyDec = modal.querySelector('.qty-dec');
  const qtyInc = modal.querySelector('.qty-inc');
  const addCartBtn = modal.querySelector('.detail-add-cart');
  const form = modal.querySelector('.product-detail-form');
  const colorInput = modal.querySelector('#detailColor');
  const sizeInput = modal.querySelector('#detailSize');
  const addressInput = modal.querySelector('#detailAddress');
  const nameInput = modal.querySelector('#detailName');
  const phoneInput = modal.querySelector('#detailPhone');
  const emailInput = modal.querySelector('#detailEmail');
  const offersOptInInput = modal.querySelector('#detailOffersOptIn');
  const deliveryOptions = modal.querySelectorAll('input[name="detailDelivery"]');
  const galleryList = modal.querySelector('.product-gallery-list');

  closeBtn?.addEventListener('click', closeProductModal);
  backdrop?.addEventListener('click', event => {
    if (event.target === backdrop) closeProductModal();
  });

  qtyDec?.addEventListener('click', () => {
    if (detailState.qty > 1) {
      detailState.qty -= 1;
      updateProductSummary(p);
    }
  });
  qtyInc?.addEventListener('click', () => {
    // enforce per-product stock if provided
    const stock = (typeof p.stock === 'number') ? p.stock : null;
    const backorder = !!p.backorder;
    if (stock !== null && !backorder && detailState.qty >= stock) {
      showToast('Max stock reached');
      return;
    }
    detailState.qty += 1;
    updateProductSummary(p);
  });

  deliveryOptions.forEach(option => {
    option.addEventListener('change', event => {
      if (event.target.checked) {
        detailState.delivery = event.target.value;
        updateProductSummary(p);
      }
    });
  });

  const paymentInputs = modal.querySelectorAll('input[name="detailPayment"]');
  paymentInputs.forEach(inp => inp.addEventListener('change', e => {
    if (e.target.checked) detailState.payment = e.target.value;
  }));

  colorInput?.addEventListener('change', event => { detailState.color = event.target.value; });
  sizeInput?.addEventListener('change', event => { detailState.size = event.target.value; });
  addressInput?.addEventListener('input', event => { detailState.address = event.target.value; });
  nameInput?.addEventListener('input', event => { detailState.name = event.target.value; });
  phoneInput?.addEventListener('input', event => { detailState.phone = event.target.value; });
  emailInput?.addEventListener('input', event => { detailState.email = event.target.value; });
  offersOptInInput?.addEventListener('change', event => { detailState.offersOptIn = !!event.target.checked; });

  galleryList?.addEventListener('click', event => {
    const thumb = event.target.closest('.product-gallery-thumb');
    if (!thumb) return;
    const src = thumb.dataset.src;
    detailState.image = src;
    const mainImage = modal.querySelector('.product-modal-main img');
    if (mainImage) mainImage.src = src;
    modal.querySelectorAll('.product-gallery-thumb').forEach(btn => {
      btn.classList.toggle('active', btn === thumb);
    });
  });

  addCartBtn?.addEventListener('click', () => {
    if (!validateDetailStateForCheckout(p)) return;

    const opts = {
      color: detailState.color,
      size: detailState.size,
      delivery: detailState.delivery,
      address: detailState.address,
      payment: detailState.payment,
      name: detailState.name,
      phone: detailState.phone,
      email: detailState.email,
      offersOptIn: detailState.offersOptIn
    };
    addToCart(p.id, detailState.qty, opts);
    closeProductModal();
    showToast('Added to cart');
  });

  form?.addEventListener('submit', event => {
    event.preventDefault();
    if (!validateDetailStateForCheckout(p)) return;

    const opts = {
      color: detailState.color,
      size: detailState.size,
      delivery: detailState.delivery,
      address: detailState.address,
      payment: detailState.payment,
      name: detailState.name,
      phone: detailState.phone,
      email: detailState.email,
      offersOptIn: detailState.offersOptIn
    };

    addToCart(p.id, detailState.qty, opts);
    closeProductModal();
    showToast('Added to cart');
  });
}

function updateProductSummary(p) {
  const modal = document.getElementById('productModal');
  if (!modal || !detailState) return;
  const qtyCount = modal.querySelector('.qty-count');
  const subtotalEl = modal.querySelector('#detailSubtotal');
  const deliveryFeeEl = modal.querySelector('#detailDeliveryFee');
  const totalEl = modal.querySelector('#detailTotal');

  const delivery = getDeliveryOption(detailState.delivery);
  const subtotal = p.price * detailState.qty;
  const total = subtotal + (delivery.fee * detailState.qty);

  if (qtyCount) qtyCount.textContent = detailState.qty;
  if (subtotalEl) subtotalEl.textContent = formatPrice(subtotal);
  if (deliveryFeeEl) deliveryFeeEl.textContent = formatPrice(delivery.fee);
  if (totalEl) totalEl.textContent = formatPrice(total);
}

/* ------ RENDER PRODUCTS ------ */
function renderProducts() {
  const grid = document.getElementById('productGrid');
  if (!grid) return;

  let filtered = activeFilter === 'all'
    ? [...PRODUCTS]
    : PRODUCTS.filter(p => p.category === activeFilter);

  if (activeSearchQuery) {
    const needle = activeSearchQuery;
    if (needle === 'free shipping' || needle === 'free-shipping' || needle === 'free_shipping') {
      filtered = filtered.filter(p => p.price >= 4000);
    } else {
      filtered = filtered.filter(p => {
        return [p.name, p.category, p.badge]
          .filter(Boolean)
          .some(field => field.toString().toLowerCase().includes(needle));
      });
    }
  }

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

function saveOrderToGoogleSheet(total) {
  const orderId = 'NX-' + Date.now();

  const shopperName = cart
    .map(item => (item.options || {}).name)
    .find(name => name && String(name).trim()) || '';

  const shopperPhone = cart
    .map(item => (item.options || {}).phone)
    .find(phone => phone && String(phone).trim()) || '';

  const shopperEmail = cart
    .map(item => (item.options || {}).email)
    .find(email => email && String(email).trim()) || '';

  const shopperAddress = cart
    .map(item => (item.options || {}).address)
    .find(address => address && String(address).trim()) || '';

  const items = cart.map(item => {
    const p = PRODUCTS.find(x => x.id === item.id);
    if (!p) return null;

    const opts = item.options || {};
    const delivery = getDeliveryOption(opts.delivery);
    const deliveryFee = delivery ? delivery.fee : 0;

    const lineSubtotal = p.price * item.qty;
    const lineTotal = lineSubtotal + (deliveryFee * item.qty);

    return {
      product: p.name,
      qty: item.qty,
      price: p.price,
      color: opts.color || '',
      size: opts.size || '',
      payment: opts.payment || '',
      delivery: delivery ? delivery.label : '',
      deliveryFee: deliveryFee,
      lineTotal: lineTotal
    };
  }).filter(Boolean);

  const orderData = {
    orderId: orderId,

    customer: {
      name: shopperName,
      phone: shopperPhone,
      email: shopperEmail,
      address: shopperAddress
    },

    items: items,

    orderTotal: total
  };

  /*
   * Save to Google Sheet.
   *
   * We intentionally don't wait for the response here.
   * WhatsApp can open immediately after this request.
   */
  fetch(GOOGLE_SHEET_WEB_APP_URL, {
    method: 'POST',
    mode: 'no-cors',
    headers: {
      'Content-Type': 'text/plain;charset=utf-8'
    },
    body: JSON.stringify(orderData)
  }).catch(error => {
    console.error('Google Sheet save failed:', error);
  });

  return orderId;
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

  itemsEl.innerHTML = cart.map((item, idx) => {
    const p = PRODUCTS.find(x => x.id === item.id);
    if (!p) return '';
    const opts = item.options || {};
    const delivery = getDeliveryOption(opts.delivery);
    const deliveryFee = delivery ? delivery.fee : 0;
    const lineSubtotal = p.price * item.qty;
    const lineTotal = lineSubtotal + (deliveryFee * item.qty);
    total += lineTotal;

    const details = [];
    if (opts.color) details.push(`Color: ${opts.color}`);
    if (opts.size) details.push(`Size: ${opts.size}`);
    if (opts.payment) details.push(`Payment: ${opts.payment}`);
    if (opts.delivery) details.push(`Delivery: ${delivery ? delivery.label : opts.delivery}`);
    if (opts.name) details.push(`Name: ${opts.name}`);
    if (opts.phone) details.push(`Phone: ${opts.phone}`);
    if (opts.email) details.push(`Email: ${opts.email}`);
    details.push(`Offers: ${opts.offersOptIn ? 'Yes' : 'No'}`);

    return `
      <div class="cart-row" data-id="${p.id}" data-idx="${idx}">
        <img
          src="${p.image}"
          alt="${p.name}"
          onerror="this.src='https://placehold.co/64x64/f0ede8/4a4a6a?text=Img'"
        />
        <div class="cart-row-info">
          <div class="cart-row-name">${p.name}</div>
          <div class="cart-row-price">${formatPrice(p.price)}</div>
          <div class="cart-row-qty">
            <button class="qty-btn" data-action="dec" data-id="${p.id}" data-idx="${idx}">-</button>
            <span class="qty-num">${item.qty}</span>
            <button class="qty-btn" data-action="inc" data-id="${p.id}" data-idx="${idx}">+</button>
          </div>
          ${details.length ? `<div class="cart-row-details">${details.join(' • ')}</div>` : ''}
          ${opts.address ? `<div class="cart-row-address">Address: ${opts.address}</div>` : ''}
          <div class="cart-row-delivery">Delivery fee: ${formatPrice(deliveryFee)} each</div>
          <div class="cart-row-line-total">Line total: ${formatPrice(lineTotal)}</div>
        </div>
        <button class="cart-row-remove" data-id="${p.id}" data-idx="${idx}" aria-label="Remove">
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

  // Build a full WhatsApp order message from the saved cart options and line details.
  const shopperName = cart
    .map(item => (item.options || {}).name)
    .find(name => name && String(name).trim()) || 'Not provided';
  const shopperPhone = cart
    .map(item => (item.options || {}).phone)
    .find(phone => phone && String(phone).trim()) || 'Not provided';
  const shopperAddress = cart
    .map(item => (item.options || {}).address)
    .find(address => address && String(address).trim()) || 'Not provided';

  const messageLines = [
    'Hello NEXVORA, I would like to place an order:',
    '',
    'Customer details:',
    `Name: ${shopperName}`,
    `Phone: ${shopperPhone}`,
    `Address: ${shopperAddress}`,
    '',
    'Order details:'
  ];

  cart.forEach(item => {
    const p = PRODUCTS.find(x => x.id === item.id);
    if (!p) return;

    const opts = item.options || {};
    const delivery = getDeliveryOption(opts.delivery);
    const deliveryFee = delivery ? delivery.fee : 0;
    const lineSubtotal = p.price * item.qty;
    const lineTotal = lineSubtotal + (deliveryFee * item.qty);

    messageLines.push('');
    messageLines.push(`${p.name} x${item.qty}`);
    messageLines.push(`Price: ${formatPrice(p.price)} each`);
    messageLines.push(`Color: ${opts.color || 'Not provided'}`);
    messageLines.push(`Size: ${opts.size || 'Not provided'}`);
    messageLines.push(`Payment: ${opts.payment || 'Not provided'}`);
    messageLines.push(`Delivery: ${delivery ? delivery.label : 'Not provided'}`);
    messageLines.push(`Address: ${opts.address || 'Not provided'}`);
    messageLines.push(`Customer name: ${opts.name || 'Not provided'}`);
    messageLines.push(`Phone: ${opts.phone || 'Not provided'}`);
    messageLines.push(`Email: ${opts.email || 'Not provided'}`);
    messageLines.push(`NEXVORA offers opt-in: ${opts.offersOptIn ? 'Yes' : 'No'}`);
    messageLines.push(`Subtotal: ${formatPrice(lineSubtotal)}`);
    messageLines.push(`Delivery fee: ${formatPrice(deliveryFee)} each`);
    messageLines.push(`Line total: ${formatPrice(lineTotal)}`);
  });

  messageLines.push('');
  messageLines.push(`Order total: ${formatPrice(total)}`);

const msg = messageLines.join('\n');

const checkoutBtn = document.getElementById('cartCheckoutBtn');

if (checkoutBtn) {

  const whatsappUrl =
    'https://wa.me/94702231620?text=' +
    encodeURIComponent(msg);

  checkoutBtn.href = whatsappUrl;

  checkoutBtn.onclick = event => {

    event.preventDefault();

    if (!cart.length) {
      showToast('Your cart is empty');
      return;
    }

    /*
     * Calculate the final order total again
     * so Google Sheets receives the exact same total
     * shown in the cart.
     */
    let orderTotal = 0;

    cart.forEach(item => {

      const p = PRODUCTS.find(x => x.id === item.id);
      if (!p) return;

      const opts = item.options || {};
      const delivery = getDeliveryOption(opts.delivery);

      const deliveryFee = delivery ? delivery.fee : 0;

      const lineSubtotal = p.price * item.qty;

      const lineTotal =
        lineSubtotal +
        (deliveryFee * item.qty);

      orderTotal += lineTotal;
    });

    /*
     * SAVE ORDER TO GOOGLE SHEET
     */
    const orderId = saveOrderToGoogleSheet(orderTotal);

    /*
     * Add order number to WhatsApp message
     */
    const whatsappMessage =
      msg +
      '\n\nOrder ID: ' + orderId;

    const orderUrl =
      'https://wa.me/94702231620?text=' +
      encodeURIComponent(whatsappMessage);

    /*
     * WHATSAPP STILL OPENS
     */
    window.open(orderUrl, '_blank');

    showToast(
      'Order ' + orderId + ' saved. Opening WhatsApp...'
    );

    closeCart();
  };
}
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
function addToCart(id, qty = 1, options = {}) {
  if (qty <= 0) return;
  const key = JSON.stringify(options || {});
  const existing = cart.find(i => i.id === id && JSON.stringify(i.options || {}) === key);
  if (existing) existing.qty += qty;
  else cart.push({ id, qty, options });
  saveCart();
  updateBadges();
  renderCartSidebar();
  openCart();
  const p = PRODUCTS.find(x => x.id === id);
  showToast((p ? p.name : 'Item') + ` x${qty} added to cart`);
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

  const isProductsPage = window.location.pathname.includes('products.html');
  const initialCategory = getQueryParam('category').trim();
  if (initialCategory) {
    activeFilter = initialCategory;
    activeSearchQuery = '';
    document.querySelectorAll('.cat-link').forEach(l => l.classList.remove('active'));
    const activeLink = document.querySelector(`.cat-link[data-filter="${activeFilter}"]`);
    if (activeLink) activeLink.classList.add('active');
    renderProducts();
  }

  const initialQuery = getQueryParam('q').trim();
  if (initialQuery && !initialCategory) {
    input.value = initialQuery;
    activeSearchQuery = initialQuery.toLowerCase();
    activeFilter = 'all';
    renderProducts();
  }

  input.addEventListener('input', () => {
    const val = input.value.trim().toLowerCase();
    if (!val) {
      activeSearchQuery = '';
      if (isProductsPage) {
        activeFilter = 'all';
        renderProducts();
      }
      sugBox.style.display = 'none';
      return;
    }
    activeSearchQuery = val;
    activeFilter = 'all';
    if (isProductsPage) renderProducts();
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
      activeSearchQuery = input.value.trim().toLowerCase();
      renderProducts();
    }
  });

  btn.addEventListener('click', () => {
    sugBox.style.display = 'none';
    const query = input.value.trim();
    if (!query) {
      if (isProductsPage) {
        activeSearchQuery = '';
        activeFilter = 'all';
        renderProducts();
      } else {
        window.location.href = 'products.html';
      }
      return;
    }
    if (isProductsPage) {
      activeSearchQuery = query.toLowerCase();
      activeFilter = 'all';
      renderProducts();
      showToast('Searching for: ' + query);
      return;
    }
    window.location.href = `products.html?q=${encodeURIComponent(query)}`;
  });

  input.addEventListener('keydown', e => {
    if (e.key === 'Enter') {
      e.preventDefault();
      btn.click();
    }
  });

  document.addEventListener('click', e => {
    if (!e.target.closest('.search-wrap')) sugBox.style.display = 'none';
  });
}

/* ------ CATEGORY FILTER LINKS ------ */
function initCatLinks() {
  document.querySelectorAll('.cat-link').forEach(link => {
    link.addEventListener('click', e => {
      const targetUrl = new URL(link.href, window.location.href);
      if (targetUrl.pathname !== window.location.pathname) {
        return; // allow full-page navigation for external/category links on other pages
      }
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
      const idxAttr = btn.dataset.idx;
      const id  = parseInt(btn.dataset.id);
      let rowIndex = -1;
      if (idxAttr !== undefined) rowIndex = parseInt(idxAttr);
      if (rowIndex >= 0 && cart[rowIndex]) {
        const row = cart[rowIndex];
        if (btn.dataset.action === 'inc') row.qty++;
        else if (btn.dataset.action === 'dec') {
          row.qty--;
          if (row.qty <= 0) cart.splice(rowIndex, 1);
        }
      } else {
        const row = cart.find(i => i.id === id);
        if (!row) return;
        if (btn.dataset.action === 'inc') row.qty++;
        else if (btn.dataset.action === 'dec') {
          row.qty--;
          if (row.qty <= 0) cart = cart.filter(i => i.id !== id);
        }
      }
      saveCart();
      updateBadges();
      renderCartSidebar();
    }
    if (rem) {
      const idxAttr = rem.dataset.idx;
      if (idxAttr !== undefined) {
        const index = parseInt(idxAttr);
        if (!Number.isNaN(index)) cart.splice(index, 1);
      } else {
        const id = parseInt(rem.dataset.id);
        cart = cart.filter(i => i.id !== id);
      }
      saveCart();
      updateBadges();
      renderCartSidebar();
    }
  });
}

/* ------ PRODUCT GRID EVENTS (delegated) ------ */
function initProductEvents() {
  const grids = document.querySelectorAll('.product-grid');
  if (!grids.length) return;

  grids.forEach(grid => {
    grid.addEventListener('click', e => {
      const addBtn   = e.target.closest('.add-to-cart-btn');
      const wishBtn  = e.target.closest('.wishlist-btn');
      const card     = e.target.closest('.product-card[data-id]');
      if (addBtn) {
        const pid = parseInt(addBtn.dataset.id);
        if (!Number.isNaN(pid)) {
          openProductDetails(pid);
        }
        return;
      }
      if (wishBtn) {
        toggleWishlist(parseInt(wishBtn.dataset.id));
        return;
      }
      if (card) {
        const id = parseInt(card.dataset.id);
        if (!Number.isNaN(id)) {
          const link = e.target.closest('a');
          if (link) e.preventDefault();
          openProductDetails(id);
        }
      }
    });
  });
}

/* ------ SPECIAL OFFERS CAROUSEL ------
function initSpecialCarousel() {
  const carousel = document.getElementById('specialCarousel');
  if (!carousel) return;

  const cards = Array.from(carousel.children);
  if (!cards.length) return;

  cards.forEach(card => carousel.appendChild(card.cloneNode(true)));
  carousel.style.overflow = 'hidden';
  carousel.style.scrollBehavior = 'auto';

  const speed = 0.45; // premium pixels per millisecond
  let rafId = null;
  let lastTime = null;

  function tick(timestamp) {
    if (!lastTime) lastTime = timestamp;
    const delta = timestamp - lastTime;
    lastTime = timestamp;

    carousel.scrollLeft += speed * delta;
    const half = carousel.scrollWidth / 2;
    if (carousel.scrollLeft >= half) {
      carousel.scrollLeft -= half;
    }

    rafId = requestAnimationFrame(tick);
  }

  function start() {
    if (rafId === null) {
      lastTime = null;
      rafId = requestAnimationFrame(tick);
    }
  }

  function stop() {
    if (rafId !== null) {
      cancelAnimationFrame(rafId);
      rafId = null;
      lastTime = null;
    }
  }

  carousel.addEventListener('mouseenter', stop);
  carousel.addEventListener('mouseleave', start);
  start();
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
  initSpecialCarousel();
  initScrollEffects();
});
