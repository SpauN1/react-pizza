import { FC } from 'react';

import errorGif from '../../assets/error.gif';

import './ErrorMessage.scss';

export const ErrorMessage: FC = () => {
  return (
    <div className="not-found" style={{}}>
      <h2 className="not-found__title">Ничего не найдено:</h2>
      <img className="not-found__img" src={errorGif} alt="Error" />
    </div>
  );
};
