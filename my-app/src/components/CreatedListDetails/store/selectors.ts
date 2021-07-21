import { initialState } from '../../../store/initialState';

export const moviesFromList = ({ listDetails }: typeof initialState) => listDetails.details.items;
export const listName = ({ listDetails }: typeof initialState) => listDetails.details.name;
