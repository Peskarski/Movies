export type FilterItemData = {
  name: string;
  id: string;
};

export type FiltersProps = {
  onAplied: (genre: string, startDate: string, endDate: string) => void;
};
