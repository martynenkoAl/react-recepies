import React from 'react';
import CategoryItem from './CategoryItem';

export default function CategoryList({ catalogue = [] }) {
  return (
    <div className='items'>
      {catalogue.map((el) => {
        return <CategoryItem key={el.idCategory} {...el} />;
      })}
    </div>
  );
}
