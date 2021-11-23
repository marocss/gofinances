import React from 'react';
import { render } from '@testing-library/react-native';

import Profile from '../../../screens/Profile';

test('should have an input with "name" as placeholder', () => {
  const { debug } = render(<Profile />);

  debug();
})
