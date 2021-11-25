import React from 'react';
import { render } from '@testing-library/react-native';

import { Input } from './'
// really no need for this \/ 
import 'jest-styled-components'
import { ThemeProvider } from 'styled-components/native';

import theme from '../../../global/styles/theme'

const Providers: React.FC = ({ children }) => (<ThemeProvider theme={theme}>{children}</ThemeProvider>)

describe('Input component', () => {
  it('should have a red border when active', () => {
    // my way
    // const { getByTestId } = render(
    //   <ThemeProvider theme={theme}>
    //     <Input 
    //       testID="email-input"
    //       placeholder="email"
    //       keyboardType="email-address"
    //       autoCorrect={false}
    //       active={true}
    //     />
    //   </ThemeProvider>
    // )
    const { getByTestId, debug } = render(
      <Input 
        testID="email-input"
        placeholder="email"
        keyboardType="email-address"
        autoCorrect={false}
        active={true}
      />, 
      {
        wrapper: Providers
      }
    )

    const inputComponent = getByTestId('email-input')

    debug()
    
    expect(inputComponent.props.style[0].borderColor).toEqual(theme.colors.wrong)
  })
})