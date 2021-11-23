import React from 'react';

import { Button, Container, Input, Title } from './styles';

const Profile = () => {
  const handleSave = () => {

  }

  return (
    <Container>
      <Title testID="page-title">Profile</Title>
      <Input
        testID="name-input"
        placeholder="Name"
        autoCorrect={false}
        value="Marcos"
        />
      <Input
        testID="last-name-input"
        placeholder="Last Name"
        autoCorrect={false}
        value="L"
      />
      <Button title="Save" onPress={handleSave}/>
    </Container>
  );
};

export default Profile;
