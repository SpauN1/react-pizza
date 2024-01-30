import React, { FC, useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

import './FullPizza.scss';

export const FullPizza: FC = () => {
  const [pizza, setPizza] = useState<{
    imageUrl: string;
    title: string;
    description: string;
    price: number;
  }>();

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    async function fetchPizza() {
      try {
        const { data } = await axios.get(
          'https://65468388fe036a2fa955ca61.mockapi.io/items/' + id
        );
        setPizza(data);
      } catch (error) {
        alert('Ошибка при получении пиццы!');
        navigate('/');
      }
    }

    fetchPizza();
  }, [id, navigate]);

  if (!pizza) {
    return 'Загрузка...';
  }

  return (
    <div className="full-pizza">
      <div className="full-pizza__image-container">
        <img className="full-pizza__img" src={pizza.imageUrl} alt="пицца" />
      </div>
      <div className="full-pizza__content">
        <h2 className="full-pizza__title">{pizza.title}</h2>
        <p className="full-pizza__description">{pizza.description}</p>
        <h4 className="full-pizza__price">{pizza.price} ₽</h4>
        <Link to="/" className="button button__full-pizza">
          <span>Вернуться назад</span>
        </Link>
      </div>
    </div>
  );
};
