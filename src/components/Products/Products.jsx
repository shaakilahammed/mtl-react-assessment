import React, { useEffect, useState } from 'react';

import classes from './Products.module.css';
import Product from './Product';
import { useLocation, useNavigate } from 'react-router-dom';

const sortProducts = (products, ascending) => {
  return products.sort((a, b) => {
    if (ascending) {
      return +a.price > +b.price ? 1 : -1;
    } else {
      return +a.price < +b.price ? 1 : -1;
    }
  });
};

const sortNameProducts = (products, ascending) => {
  return products.sort((a, b) => {
    if (ascending) {
      return a.name > b.name ? 1 : -1;
    } else {
      return a.name < b.name ? 1 : -1;
    }
  });
};

const Products = () => {
  const [productList, setProductList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);

  const isAscending = queryParams.get('sort') === 'asc';
  const nameIsAscending = queryParams.get('name') === 'asc';
  const category = queryParams.get('category');

  let products;
  products = sortProducts(productList, isAscending);

  if (category) {
    products = productList.filter((product) => product.category === category);
  }
  if (queryParams.get('name')) {
    products = sortNameProducts(productList, nameIsAscending);
  }

  const sortingHandler = () => {
    navigate(`${location.pathname}?sort=${isAscending ? 'desc' : 'asc'}`);
  };

  const sortingNameHandler = () => {
    navigate(`${location.pathname}?name=${nameIsAscending ? 'desc' : 'asc'}`);
  };

  const handleFilters = (e) => {
    navigate(`${location.pathname}?category=${e.target.value}`);
  };
  const searchHandler = (e) => {
    let temp = productList.filter((x) =>
      x.name.trim().toLowerCase().includes(e.target.value)
    );

    setProductList(temp);
  };

  useEffect(() => {
    const getProducts = async () => {
      setIsLoading(true);
      try {
        const response = await fetch('http://localhost:4000/products/');
        const data = await response.json();
        setProductList(data);
        setIsLoading(false);
      } catch (error) {
        alert(error.message);
      }
    };
    getProducts();
  }, []);
  if (isLoading) {
    return <p className={classes.loader}>Loading.....</p>;
  }
  return (
    <div className={classes.container}>
      <div className={classes.sorting}>
        <div>
          <button onClick={sortingHandler}>
            Sort By{' '}
            {isAscending
              ? 'Sort by price: High to Low'
              : 'Sort by price: Low to High'}
          </button>
        </div>
        <div>
          <button onClick={sortingNameHandler}>
            Sort By{' '}
            {nameIsAscending
              ? 'Sort by Name: Descending'
              : 'Sort by Name: Ascending'}
          </button>
        </div>
        <div>
          <select
            className={classes.select}
            name="color"
            onChange={handleFilters}
          >
            <option disabled selected>
              Sort By Category
            </option>
            <option>Meat</option>
            <option>Fish</option>
            <option>Milk</option>
            <option>Beverages</option>
            <option>Snacks</option>
            <option>Fruits</option>
          </select>
        </div>
        <div>
          <input
            onChange={searchHandler}
            type="text"
            className={classes.search}
            placeholder="Search by name"
          />
        </div>
      </div>
      <div className={classes.productContainer}>
        {products.map((item) => (
          <Product item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default Products;
