import React, { FC } from 'react';

import './Categories.scss';

interface CategoriesProps {
  categoryId: number;
  onChangeCategory: any;
}

export const Categories: FC<CategoriesProps> = ({
  categoryId,
  onChangeCategory,
}) => {
  const categories = [
    'Все',
    'Мясные',
    'Вегетарианская',
    'Гриль',
    'Острые',
    'Закрытые',
  ];

  return (
    <nav className="categories">
      <ul className="categories__item">
        {categories.map((categoryName, i) => (
          <li
            key={i}
            onClick={() => onChangeCategory(i)}
            className={categoryId === i ? 'active' : ''}
          >
            {categoryName}
          </li>
        ))}
      </ul>
    </nav>
  );
};
