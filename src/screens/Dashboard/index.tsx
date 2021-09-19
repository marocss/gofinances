import React from 'react';
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
        <Card 
          title="Income" 
          amount="$ 3.400,00" 
          lastTransaction="Last income was on april 13th"
          type="up"
        />
        <Card 
          title="Outcome" 
          amount="$ 400,00" 
          lastTransaction="Last outcome was on april 2nd"
          type="down"
        />
        <Card 
          title="Total" 
          amount="$ 23.657,02" 
          lastTransaction="Between 1st and 19th"
          type="total"
        />
      </CardsSection>
    </Container>
  );
}