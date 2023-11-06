import { Link } from 'react-router-dom';

export default function MealItem(props) {
  const { strMeal, strMealThumb, idMeal } = props;
  return (
    <div className='card'>
      <div className='card-image waves-effect waves-block waves-light'>
        {strMealThumb !== 'N/A' ? (
          <img className='activator' alt={strMeal} src={strMealThumb} />
        ) : (
          <img
            className='activator'
            alt={strMeal}
            src={`https://placehold.co/300x450?text=${strMeal}`}
          />
        )}
      </div>
      <div className='card-content'>
        <span className='card-title activator grey-text text-darken-4'>
          {strMeal}
        </span>
      </div>
      <div className='card-action'>
        <Link
          to={`/meal/${idMeal}`}
          className='btn yellow-text text-darken-3'
          style={{
            outline: 'none',
            backgroundColor: 'transparent',
            boxShadow: 'none',
          }}
        >
          See the Recepie
        </Link>
      </div>
    </div>
  );
}
