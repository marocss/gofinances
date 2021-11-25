import React from 'react';
import { render } from '@testing-library/react-native';

import { Input } from './'

describe('Input component', () => {
  it('should have a red border when active', () => {
    const { getByTestId } = render(
      <Input 
        testID="email-input"
        placeholder="email"
        keyboardType="email-address"
        autoCorrect={false}
        active={true}
      />
    )

    const inputComponent = getByTestId('email-input')
    
    expect(inputComponent.props.style[0].borderColor).toEqual('#e83f5b')
    
  })
  
})