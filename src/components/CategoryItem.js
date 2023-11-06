import React from 'react';
import { Link } from 'react-router-dom';

export default function CategoryItem(props) {
  const { strCategory, strCategoryThumb, strCategoryDescription } = props;

  return (
    <div className='card'>
      <div className='card-image waves-effect waves-block waves-light'>
        {strCategoryThumb !== 'N/A' ? (
          <img className='activator' alt={strCategory} src={strCategoryThumb} />
        ) : (
          <img
            className='activator'
            alt={strCategory}
            src={`https://placehold.co/300x450?text=${strCategory}`}
          />
        )}
      </div>
      <div className='card-content'>
        <span className='card-title activator grey-text text-darken-4'>
          {strCategory}
        </span>
        <p>{strCategoryDescription.slice(0, 60)}...</p>
      </div>
      <div className='card-action'>
        <Link
          to={`/category/${strCategory}`}
          className='btn yellow-text text-darken-3'
          style={{
            outline: 'none',
            backgroundColor: 'transparent',
            boxShadow: 'none',
          }}
        >
          See the category
        </Link>
      </div>
    </div>
  );
}
