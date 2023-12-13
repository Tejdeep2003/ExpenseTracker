import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'; // For expect extensions
import Button from "../Button/Button"; // Update the import path based on your project structure

describe('Button Component', () => {
  test('renders button with name and icon', () => {
    const { getByText } = render(<Button name="Click me" icon={<span>🚀</span>} />);
    expect(getByText('Click me')).toBeInTheDocument();
    expect(getByText('🚀')).toBeInTheDocument();
  });

  test('calls onClick handler when button is clicked', () => {
    const onClickMock = jest.fn();
    const { getByText } = render(<Button name="Click me" onClick={onClickMock} />);
    fireEvent.click(getByText('Click me'));
    expect(onClickMock).toHaveBeenCalled();
  });

  test('applies styles correctly', () => {
    const { container } = render(
      <Button name="Styled Button" bg="blue" bPad="10px" color="white" bRad="5px" />
    );

    const button = container.firstChild;
    expect(button).toHaveStyle('background: blue');
    expect(button).toHaveStyle('padding: 10px');
    expect(button).toHaveStyle('color: white');
    expect(button).toHaveStyle('border-radius: 5px');
  });
});
