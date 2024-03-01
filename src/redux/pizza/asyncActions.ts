import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { PizzaItem, SearchPizzaParams } from './types';

export const fetchPizzas = createAsyncThunk<PizzaItem[], SearchPizzaParams>(
  'pizza/fetchPizzasStatus',
  async (params) => {
    const { category, sortBy, order, search, currentPage } = params;

    const { data } = await axios.get<PizzaItem[]>(
      `https://65468388fe036a2fa955ca61.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}&${search}`
    );
    return data;
  }
);
