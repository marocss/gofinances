import React, { useContext, useState } from 'react';
import { Alert, ActivityIndicator, Platform } from 'react-native';
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
  LoadingContainer,
} from './styles';
import { useTheme } from 'styled-components';

export const SignIn = () => {  
  const { signInWithGoogle, signInWithApple, isLoading } = useAuth();

  const theme = useTheme()
  
  const handleAppleSignIn = async () => {
    try {
      await signInWithApple()
    } catch (error) {
      console.log(error);
      Alert.alert('Error while logging with apple account')
    }
  }

  const handleGoogleSignIn = async () => {
    try {
      await signInWithGoogle()
    } catch (error) {
      console.log(error);
      Alert.alert('Error while logging with google account')
    }
  }

  
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
          { Platform.OS === 'ios' && (
            <SocialSignInButton 
              title="Sign in with Apple"
              svg={AppleLogo}
              onPress={handleAppleSignIn}
              disabled={isLoading}
            />
          )}
          <SocialSignInButton 
            title="Sign in with Google"
            svg={GoogleLogo}
            onPress={handleGoogleSignIn}
            disabled={isLoading}
          />
        </ButtonsSection>

        { isLoading && (
          <LoadingContainer>
            <ActivityIndicator color={theme.colors.shape} size="large" />
          </LoadingContainer>
        )}
      </Footer>
    </Container>
  )
}