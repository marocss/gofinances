import React from 'react';
import { View } from 'react-native';
import { Card } from '../../components/Card';
import { 
  Container, 
  Header, 
  HeaderFirstSection, 
  User, 
  Avatar, 
  TextArea, 
  Greeting, 
  Name, 
  Icon,
  CardsSection
} from './styles';


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

          <Icon name="power"/>
        </HeaderFirstSection>
      </Header>

      <CardsSection>
        <Card />
        <Card />
        <Card />
      </CardsSection>
    </Container>
  );
}