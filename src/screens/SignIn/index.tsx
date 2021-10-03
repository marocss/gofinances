import React from 'react';
import { View } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

import AppleLogo from '../../assets/apple-logo.svg'
import GoogleLogo from '../../assets/google-logo.svg'
import Logo from '../../assets/logo.svg'

import { 
  Container,
  Header,
  TitleSection,
  Title,
  Description,
  Footer
} from './styles';

export const SignIn = () => {
  return (
    <Container>
      <Header>
        <TitleSection>
          <Logo 
            width={RFValue(107)}
            height={RFValue(60)}
          />

          <Title>
            Easily manage {'\n'}
            your finances
          </Title>
        </TitleSection>
        
        <Description>
          Login with {'\n'}
          one of the options bellow
        </Description>
      </Header>

      <Footer>

      </Footer>
    </Container>
  )
}