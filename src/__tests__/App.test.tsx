import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../App';

test('renders App component', () => {
  render(<App />);
  expect(screen.getByLabelText("Name")).toBeInTheDocument();
  expect(screen.getByLabelText("Relationship")).toBeInTheDocument();
  expect(screen.getByText("Search")).toBeInTheDocument();
});

test('handles name input correctly', () => {
  render(<App />);
  const nameInput = screen.getByLabelText("Name");
  fireEvent.change(nameInput, { target: { value: 'vich' } });
  expect(nameInput.value).toBe('vich');
});

test('handles relationship input correctly', () => {
  render(<App />);
  const relationInput = screen.getByLabelText("Relationship");
  fireEvent.change(relationInput, { target: { value: 'son' } });
  expect(relationInput.value).toBe('SON');
});

test('displays correct response after successful search', async () => {
  const mockRelationships = jest.fn(() => ['Some', 'Expected', 'Response']);
  jest.mock('../components/RelationForm', () => mockRelationships);
  global.alert = jest.fn();
  render(<App />);

  const nameInput = screen.getByLabelText("Name");
  const relationInput = screen.getByLabelText("Relationship");
  const searchButton = screen.getByText("Search");

  fireEvent.change(nameInput, { target: { value: 'drita' } });
  fireEvent.change(relationInput, { target: { value: 'son' } });
  fireEvent.click(searchButton);

  await waitFor(() => {
    expect(mockRelationships).toHaveBeenCalledWith(expect.any(Array), 'drita', 'SON');
    expect(global.alert).toHaveBeenCalledWith('Error, Please insert correct input and retry.');
  });
});
