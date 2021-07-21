import { initialState } from '../../../store/initialState';

export const userLists = ({ createdLists }: typeof initialState) => createdLists.lists;
export const lastCreatedList = ({ createdLists }: typeof initialState) => createdLists.lastCreatedList;
export const lastDeletedList = ({ createdLists }: typeof initialState) => createdLists.lastDeletedList;
export const lastRemovedMovie = ({ createdLists }: typeof initialState) => createdLists.lastRemovedMovie;
