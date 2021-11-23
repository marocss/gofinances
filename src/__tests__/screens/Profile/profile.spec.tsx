import React from 'react';
import { render } from '@testing-library/react-native';

import Profile from '../../../screens/Profile';

test('should have a TextInput with "Name" as placeholder', () => {
  const { getByPlaceholderText } = render(<Profile />);

  const nameInput = getByPlaceholderText('Name');

  expect(nameInput).toBeTruthy();
})
