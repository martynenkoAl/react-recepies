import MealItem from './MealItem';
import { useNavigate } from 'react-router-dom';

export default function MealList({ meals }) {
  const navigate = useNavigate();
  return (
    <>
      <button
        className='btn yellow darken-1 black-text'
        onClick={() => navigate(-1)}
        type='button'
        aria-label='Вернуться на предыдущую страницу'
      >
        Back
      </button>
      <div className='items'>
        {meals.map((el) => {
          return <MealItem key={el.idMeal} {...el} />;
        })}
      </div>
    </>
  );
}
