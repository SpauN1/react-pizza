import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { RootState } from '../store';
import { getCartFromLS } from '../../utils/getCartFromLS';
import { calcTotalPrice } from '../../utils/calcTotalPrice';

export interface ICartItem {
  id: string;
  title: string;
  price: number;
  count: number;
  imageUrl: string;
  dough: string;
  size: number;
}

interface CartSliceState {
  totalPrice: number;
  items: ICartItem[];
}

const { totalPrice, items } = getCartFromLS();

const initialState: CartSliceState = {
  totalPrice,
  items,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<ICartItem>) => {
      const findItem = state.items.find((obj) => obj.id === action.payload.id);

      if (findItem) {
        findItem.count++;
      } else {
        state.items.push({
          ...action.payload,
          count: 1,
        });
      }

      state.totalPrice = calcTotalPrice(state.items);
    },
    minusItem(state, action: PayloadAction<string>) {
      const findItem = state.items.find((obj) => obj.id === action.payload);

      if (findItem) {
        findItem.count--;
      }
    },
    removeItem: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((obj) => obj.id !== action.payload);
    },
    clearItems: (state) => {
      state.items = [];
      state.totalPrice = 0;
    },
  },
});

export const selectCart = (state: RootState) => state.cartSlice;
export const selectCartItemByID = (id: string) => (state: RootState) =>
  state.cartSlice.items.find((obj) => obj.id === id);

export const { addItem, minusItem, removeItem, clearItems } = cartSlice.actions;

export default cartSlice.reducer;
