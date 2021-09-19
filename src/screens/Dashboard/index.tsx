import React from 'react';
// import { Text } from 'react-native';
// import { Feather } from '@expo/vector-icons'

import { Container, Header, HeaderFirstSection, User, Avatar, TextArea, Greeting, Name, Icon } from './styles';

export const Dashboard = () => {
  return (
    <Container>
      <Header>
        <HeaderFirstSection>
          <User>
            <Avatar source={{ uri: 'https://avatars.githubusercontent.com/u/34945925?v=4' }} />

            <TextArea>
              <Greeting>Yo, </Greeting>
              <Name>Marcos R. Leite Junior</Name>
            </TextArea>
          </User>

          <Icon name="power"  />
        </HeaderFirstSection>
      </Header>
    </Container>
  );
}