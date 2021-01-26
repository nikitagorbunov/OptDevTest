import React from 'react';
import { products } from '../../mockData/products'
import style from './Catalog.module.css'
import CatalogCard from '../catalogCard/CatalogCard';
import { MainLayouts } from '../../styles/layouts/Layouts';


const Catalog: React.FC = () => {
  return (
    <MainLayouts className={style.catalog}>
      {products.map( (value, index) => <CatalogCard key={index} item={value}/>)}
    </MainLayouts>
  );
};

export default Catalog;
