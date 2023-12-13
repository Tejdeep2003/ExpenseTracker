import React from 'react';
import { render } from '@testing-library/react';
import Orb from '../Orb/Orb';

test('renders Orb component', () => {
  const { getByTestId } = render(<Orb />);
  const orbComponent = getByTestId('orb-component');
  expect(orbComponent).toBeInTheDocument();
});