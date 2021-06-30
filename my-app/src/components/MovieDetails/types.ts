type Genre = {
  id: number;
  name: string;
};

type ProductionCountries = {
  iso_3166_1: string;
  name: string;
};

export type MovieInfoProps = {
  budget: number;
  genres: Genre[];
  production_countries: ProductionCountries[];
  release_date: string;
  revenue: number;
  tagline: string;
};
