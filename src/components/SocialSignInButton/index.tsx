import React from 'react';
import { PressableProps, View } from 'react-native';
import { SvgProps } from 'react-native-svg';

import { 
  Button,
  LogoSection,
  Text
} from './styles';

interface Props extends PressableProps {
  title: string;
  svg: React.FC<SvgProps>
}

export const SocialSignInButton = ({ title, svg: Svg, ...rest}: Props) => {
  return (
    <Button {...rest}>
      <LogoSection>
        <Svg />
      </LogoSection>
      <Text>{title}</Text>
    </Button>
  )
}