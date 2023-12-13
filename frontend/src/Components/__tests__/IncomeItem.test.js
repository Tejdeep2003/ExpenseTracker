import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'; // Add this line
import IncomeItem from '../IncomeItem/IncomeItem';

// Mock data for testing
const mockItem = {
  id: '1',
  title: 'Test Item',
  amount: 100,
  date: '2023-01-01',
  category: 'salary',
  description: 'Test description',
  deleteItem: jest.fn(),
  indicatorColor: 'blue',
  type: 'income', // 'income' or 'expense'
};

test('renders IncomeItem component', () => {
    const { getByText } = render(<IncomeItem {...mockItem} />);
    const itemTitle = getByText('Test Item');
    expect(itemTitle).toBeInTheDocument();
  });

// Add more test cases as needed based on your component's features and behaviors.
