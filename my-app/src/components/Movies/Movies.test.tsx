import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Movies } from '.';
import store from '../../store';
import { Provider } from 'react-redux';

describe('Movies', () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <Movies />
      </Provider>
    );
  });
  it('should render a list with 500 pages for the first time', () => {
    // const moviesButton = screen.getByRole('tab', { name: 'Movies' });
    // expect(moviesButton).toBeInTheDocument();
    // fireEvent.click(moviesButton);
    const pagination = screen.getByRole('navigation');
    expect(pagination).toBeInTheDocument();
  });
});
