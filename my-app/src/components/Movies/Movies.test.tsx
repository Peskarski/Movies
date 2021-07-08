import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Movies } from '.';
import { Provider } from 'react-redux';
import store from '../../store';

// jest.mock('react-i18next', () => ({
//   useTranslation: () => ({ t: jest.fn((key) => key) }),
// }));

describe('Movies', () => {
  window.scrollTo = jest.fn();

  it('should render a list with maximum pages', async () => {
    render(
      <Provider store={store}>
        <Movies />
      </Provider>
    );

    // const moviesTab = await getByRole('tab', { name: 'Movies' });
    // fireEvent.click(moviesTab);
    const pagination = await screen.getByRole('navigation');
    expect(pagination).toBeInTheDocument();
    // const applyButton = await screen.getByRole('button', { name: 'filters.apply' });
    // expect(applyButton).toBeInTheDocument();
    // fireEvent.click(applyButton);
    const maxPage = await screen.getByRole('button', { name: 'Go to page 100' });
    expect(maxPage).toBeInTheDocument();
  });
});
