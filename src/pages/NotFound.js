import { useNavigate } from 'react-router-dom';

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <>
      <h1>404</h1>
      <h3>Страница не найдена</h3>
      <button
        className='btn'
        onClick={() => navigate(-1)}
        type='button'
        aria-label='Вернуться на предыдущую страницу'
      >
        Назад
      </button>
    </>
  );
}
