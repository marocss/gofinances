import React from 'react';
import { View } from 'react-native';
import Button from '../../components/Forms/Button';
import { Input } from '../../components/Forms/Input';
import { Label } from '../../components/Forms/Label';

import { Container, Header, Title, Form, InputSection } from './styles';

export const Register = () => {
  return (
    <Container>
      <Header>
        <Title>Registry</Title>
      </Header>
      <Form>
        <InputSection>
          <Label text="Name" />
          <Input placeholder="name" />
          <Label text="Price" />
          <Input placeholder="price" />
        </InputSection>
        <Button text="Submit" />
      </Form>
    </Container>
  )
}