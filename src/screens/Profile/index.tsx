import React from 'react';

import { Button, Container, Input, Title } from './styles';

const Profile = () => {
  const handleSave = () => {

  }
  return (
    <Container>
      <Title>Profile</Title>
      <Input
        placeholder="Name"
        autoCorrect={false}
      />
      <Input
        placeholder="Last Name"
        autoCorrect={false}
      />
      <Button title="Save" onPress={handleSave}/>
    </Container>
  );
};

export default Profile;
