import { render } from '@testing-library/react';
import React from 'react';
import AddCard from '.';

describe('List Item Component', () => {
  test('it renders correctly', () => {
    const { getByText } = render(<AddCard />);
    const textNode = getByText('Add Card to the list', { exact: false });
    expect(textNode).toBeInTheDocument();
  });
});
