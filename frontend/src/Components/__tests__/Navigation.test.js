import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Navigation from '../Navigation/Navigation';

test('calls setActive function when a menu item is clicked', () => {
  const setActiveMock = jest.fn(); // Mocking the setActive function

  const { getByTestId, getByText } = render(
    <Navigation active="defaultActive" setActive={setActiveMock} />
  );

  // Click on a menu item
  const menuItem = getByTestId('menu-item-1');
  fireEvent.click(menuItem);

  // Check if setActive function is called with the correct parameter
  expect(setActiveMock).toHaveBeenCalledWith(1);
});
