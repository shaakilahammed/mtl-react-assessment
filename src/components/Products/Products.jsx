import React, { useEffect, useState } from 'react';

import classes from './Products.module.css';
import Product from './Product';

const Products = () => {
  const [productList, setProductList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
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
      {productList.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Products;
