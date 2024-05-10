import { render } from '@testing-library/react';
import React from 'react';
import NoResultsRow from '.';

describe('No result row', () => {
  test('it renders correctly', () => {
    const { getByText } = render(<NoResultsRow />);
    const textNode = getByText('None', { exact: false });
    expect(textNode).toBeInTheDocument();
  });
  test('it renders correctly with custom message', () => {
    const { getByText } = render(<NoResultsRow message='Test' />);
    const textNode = getByText('Test', { exact: false });
    expect(textNode).toBeInTheDocument();
  });
});
