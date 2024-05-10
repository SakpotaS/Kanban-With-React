import React from 'react';
import Icon from './index';
import { render } from '@testing-library/react';
import { addIcon } from '../../constants/icon';

describe('Icon Component', () => {
  test('renders correctly', () => {
    const { container } = render(<Icon icon={addIcon} />);
    const divElement = container.querySelector('svg');
    expect(divElement).toHaveClass('fa-plus');
  });
  test('supports classes', () => {
    const { container } = render(<Icon icon={addIcon} className='mr-2' />);
    const divElement = container.querySelector('svg');
    expect(divElement).toHaveClass('fa-plus');
  });
});
