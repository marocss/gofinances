import React from 'react';
import { render } from '@testing-library/react-native';

import Profile from '../../../screens/Profile';

test('should have a TextInput with "Name" as placeholder', () => {
  const { getByPlaceholderText } = render(<Profile />);

  const nameInput = getByPlaceholderText('Name');

  expect(nameInput).toBeTruthy();
})

test('should load user "Marcos L" profile data', () => {
  const { getByTestId } = render(<Profile />)

  const inputName = getByTestId('name-input')
  const lastName = getByTestId('last-name-input')

  expect(inputName.props.value).toEqual('Marcos')
  expect(lastName.props.value).toEqual('L')
})

test('should render page title with "Profile" as content', () => {
  const { getByTestId } = render(<Profile />)

  const pageTitle = getByTestId('page-title')

  expect(pageTitle.props.children).toContain('Profile')
})
