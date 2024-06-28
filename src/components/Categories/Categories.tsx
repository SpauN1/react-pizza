import { FC } from 'react';

import './Categories.scss';

interface CategoriesProps {
  categoryId: number;
  onChangeCategory: (i: number) => void;
}

const categories = [
  'Все',
  'Мясные',
  'Вегетарианская',
  'Гриль',
  'Острые',
  'Закрытые',
];

export const Categories: FC<CategoriesProps> = ({
  categoryId,
  onChangeCategory,
}) => {
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
