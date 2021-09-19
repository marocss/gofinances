import React from 'react';
import { Text } from 'react-native';

import { Container, Header, User, Avatar, TextArea, Greeting, Name } from './styles';

export const Dashboard = () => {
  return (
    <Container>
      <Header>
        <User>
          <Avatar source={{ uri: 'https://avatars.githubusercontent.com/u/34945925?v=4' }} />

          <TextArea>
            <Greeting>Yo, </Greeting>
            <Name>Marcos R. Leite Junior</Name>
          </TextArea>
        </User>
      </Header>
    </Container>
  );
}