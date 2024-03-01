export interface PizzaItem {
  title: string;
  price: number;
  imageUrl: string;
  types: number[];
  sizes: number[];
  id: string;
  rating: number;
}

export enum Status {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',
}

export interface PizzaSliceState {
  items: PizzaItem[];
  status: Status;
}

export interface SearchPizzaParams {
  category: string;
  sortBy: string;
  order: string;
  search: string;
  currentPage: string;
}
