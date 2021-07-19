export type FilterItemData = {
  name: string;
  id: string;
};

export type ProviderData = {
  provider_name: string;
  provider_id: string;
  logo_path: string;
};

export type FiltersProps = {
  onAplied: (genre: string, startDate: string, endDate: string, provider: string[], region: string) => void;
};
