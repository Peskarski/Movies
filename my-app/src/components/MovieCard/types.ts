export type MenuItemData = {
  name: string;
  id: string;
};

export type MovieCardData = {
  title: string;
  movieID: string;
  posterPath: string;
  isRenderedInUserList?: boolean;
};

export interface Popper {
  anchorEl: HTMLElement | null;
  movieID: string;
  isRenderedInUserList: boolean | undefined;
}
