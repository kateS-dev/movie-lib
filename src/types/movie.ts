export interface IMovieCard {
  id: number;
  title: string;
  year: number;
  rating: number;
  poster: string;
  overview: string;
}

export type IMovieList = IMovieCard[];
