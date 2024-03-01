import { RootState } from '../store';

export const selectCart = (state: RootState) => state.cartSlice;
export const selectCartItemByID = (id: string) => (state: RootState) =>
  state.cartSlice.items.find((obj) => obj.id === id);
