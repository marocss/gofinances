import React from 'react'
import { fireEvent, render } from "@testing-library/react-native";
import { ThemeProvider } from 'styled-components/native';
import theme from '../../global/styles/theme';
import { Register } from '.';
import { NavigationContainer } from '@react-navigation/native';
import { AuthProvider } from '../../hooks/auth';


const Wrapper: React.FC = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        {children}
      </NavigationContainer>
    </ThemeProvider>
  )
}
describe('Register screen', () => {
  it('should open the modal to select a category', () => {
    const { getByTestId } = render(<Register />, {
      wrapper: Wrapper
    })

    const categoryModal = getByTestId('modal-category')
    const buttonCategory = getByTestId('button-category-selector')

    fireEvent.press(buttonCategory)

    expect(categoryModal.props.visible).toBeTruthy()
  })
  
})