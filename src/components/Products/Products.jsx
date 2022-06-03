import React, { useEffect, useState } from 'react';

import classes from './Products.module.css';
import Product from './Product';

const DUMMY_PRODUCTS = [
  {
    id: '1',
    name: 'Boneless Beef Premium',
    price: '900',
    category: 'Meat',
    description: 'Fresh Boneless Beef Premium',
    image:
      'https://api.shod.ai/v1/media/pictures/product/Boneless-beef-stew.jpg',
  },
  {
    id: '2',
    name: 'Boneless Mutton',
    price: '1300',
    category: 'Meat',
    description: 'Fresh Boneless Mutton',
    image:
      'https://api.shod.ai/v1/media/pictures/product/Mutton-Boneless-1.jpg',
  },
  {
    id: '3',
    name: 'Broiler Chicken',
    price: '190',
    category: 'Meat',
    description: 'Fresh Broiler Chicken',
    image:
      'https://api.shod.ai/v1/media/pictures/product/chicken-without-skin-500x500_copy_cXjImll.jpg',
  },
  {
    id: '4',
    name: 'Rui Fish',
    price: '340',
    category: 'Fish',
    description: 'We provide fresh and premium quality Rui fish',
    image: '',
  },
  {
    id: '5',
    name: 'Hilsha Fish',
    price: '1800',
    category: 'Fish',
    description: 'Fresh Hilsha Fish',
    image:
      'https://api.shod.ai/v1/media/pictures/product/elish_copy_EiQCtbO.jpg',
  },
  {
    id: '6',
    name: 'Milk Vita Liquid Milk',
    price: '80',
    category: 'Milk',
    description: 'Fresh Milk Vita Liquid Milk',
    image:
      'https://api.shod.ai/v1/media/pictures/product/milk-vita-liquid-milk-1-ltr.webp',
  },
  {
    id: '7',
    name: 'MILK VITA BUTTER',
    price: '200',
    category: 'Milk',
    description: 'Milk Vita Butter',
    image:
      'https://api.shod.ai/v1/media/pictures/product/milk-vita-butter-200-gm_copy.jpg',
  },
  {
    id: '8',
    name: 'Milk Vita Ghee',
    price: '550',
    category: 'Milk',
    description: 'Milk Vita Ghee',
    image:
      'https://api.shod.ai/v1/media/pictures/product/milk-vita-ghee-400-gm.jpg',
  },
  {
    id: '9',
    name: 'Kazi & Kazi Green Tea',
    price: '170',
    category: 'Beverages',
    description: 'Kazi & Kazi Green Tea',
    image:
      'https://api.shod.ai/v1/media/pictures/product/1430978070_normal.jpg',
  },
  {
    id: '10',
    name: 'Finlay Premium Tea',
    price: '270',
    category: 'Beverages',
    description: 'Finlay Premium Tea',
    image:
      'https://api.shod.ai/v1/media/pictures/product/0002594_finlay-premium-tea-500-gm_510.png',
  },
  {
    id: '11',
    name: 'Nescafe Original Coffee',
    price: '495',
    category: 'Beverages',
    description: 'Nescafe Original Coffee',
    image:
      'https://api.shod.ai/v1/media/pictures/product/nescafe-original-coffee-indonesia-200-gm.webp',
  },
  {
    id: '12',
    name: 'Snickers Chocolate',
    price: '65',
    category: 'Snacks',
    description: 'Snickers Chocolate',
    image:
      'https://api.shod.ai/v1/media/pictures/product/snickers-chocolate-50-gm.webp',
  },
  {
    id: '13',
    name: 'Cadbury Dairy Milk Chocolate',
    price: '40',
    category: 'Snacks',
    description: 'Cadbury Dairy Milk Chocolate',
    image: 'Cadbury Dairy Milk Chocolate',
  },
  {
    id: '14',
    name: 'Pringles Original Potato Chips',
    price: '225',
    category: 'Snacks',
    description: 'Pringles Original Potato Chips',
    image:
      'https://api.shod.ai/v1/media/pictures/product/pringles-original-potato-chips-147-gm.webp',
  },
  {
    id: '15',
    name: 'Orange (South Africa)',
    price: '270',
    category: 'Fruits',
    description: 'Orange (South Africa)',
    image: 'https://api.shod.ai/v1/media/pictures/product/orange_copy.jpg',
  },
  {
    id: '16',
    name: 'Green Apple',
    price: '285',
    category: 'Fruits',
    description: 'Green Apple',
    image:
      'https://api.shod.ai/v1/media/pictures/product/greenapple_600x_1oo8TG9.jpg',
  },
  {
    id: '17',
    name: 'Anarosh (Pineapple)',
    price: '65',
    category: 'Fruits',
    description: 'Anarosh (Pineapple)',
    image:
      'https://api.shod.ai/v1/media/pictures/product/ezgif-6-fecb45736f11.webp',
  },
];

const Products = () => {
  return (
    <div className={classes.container}>
      {DUMMY_PRODUCTS.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Products;
