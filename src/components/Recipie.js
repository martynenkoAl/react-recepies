import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getMealById } from '../api';
import Preloader from './Preloader';

export default function Recipie() {
  const { id } = useParams();
  const [recipie, setRecipie] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    getMealById(id).then((data) => setRecipie(data.meals[0]));
  }, [id]);

  return (
    <div>
      {!recipie.idMeal ? (
        <Preloader />
      ) : (
        <div className='recipie'>
          <img src={recipie.strMealThumb} alt={recipie.strMeal} />
          <h1>{recipie.strMeal}</h1>
          <h6>Category: {recipie.strCategory}</h6>
          {recipie.strArea ? <h6>Area: {recipie.strArea}</h6> : null}
          <p>{recipie.strInstructions}</p>
          <table className='centered'>
            <thead>
              <tr>
                <th>Ingredient</th>
                <th>Measure</th>
              </tr>
            </thead>
            <tbody>
              {Object.keys(recipie).map((key) => {
                if (key.includes('Ingredient') && recipie[key]) {
                  return (
                    <tr key={key}>
                      <td>{recipie[key]}</td>
                      <td>{recipie[`strMeasure${key.slice(13)}`]}</td>
                    </tr>
                  );
                }
                return null;
              })}
            </tbody>
          </table>
          {recipie.strYoutube ? (
            <div className='row'>
              <h5 style={{ margin: '2rem 0 1.5rem' }}>Video Recipie</h5>
              <iframe
                title={id}
                src={`https://www.youtube.com/embed/${recipie.strYoutube.slice(
                  -11
                )}`}
                allowFullScreen
              />
            </div>
          ) : null}
        </div>
      )}
      <button
        className='btn yellow darken-1 black-text'
        onClick={() => navigate(-1)}
        type='button'
        aria-label='Вернуться на предыдущую страницу'
      >
        Back
      </button>
    </div>
  );
}
