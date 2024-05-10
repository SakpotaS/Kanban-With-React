import { render } from '@testing-library/react';
import React from 'react';
import AddListItem from '.';

describe('Add List Component', () => {
  test('renders correctly', () => {
    const { getByText } = render(<AddListItem />);
    const listElement = getByText('Add List');
    expect(listElement).toBeInTheDocument();
  });
});
