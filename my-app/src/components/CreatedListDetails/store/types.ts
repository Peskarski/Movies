export type ListDetails = {
  created_by: string;
  description: string;
  favorite_count: number;
  id: string;
  item_count: number;
  iso_639_1: string;
  name: string;
  poster_path: string | null;
  items: {}[];
};

export type ListAction = {
  type: string;
  payload: string | ListDetails | Error;
};
