import React, { useContext } from 'react';
import { View } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

import AppleLogo from '../../assets/apple-logo.svg'
import GoogleLogo from '../../assets/google-logo.svg'
import Logo from '../../assets/logo.svg'
// import { AuthContext } from '../../AuthContext';
import { useAuth } from '../../hooks/auth';
import { SocialSignInButton } from '../../components/SocialSignInButton';

import { 
  Container,
  Header,
  TitleSection,
  Title,
  Description,
  Footer,
  ButtonsSection,
} from './styles';

export const SignIn = () => {
  const { user } = useAuth();

  console.log(user.name);
  
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
        <ButtonsSection>
          <SocialSignInButton 
            title="Login with Apple"
            svg={AppleLogo}
          />
          <SocialSignInButton 
            title="Login with Google"
            svg={GoogleLogo}
          />
        </ButtonsSection>
      </Footer>
    </Container>
  )
}