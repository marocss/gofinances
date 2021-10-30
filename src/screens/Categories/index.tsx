import React from 'react';
import { FlatList } from 'react-native';
import Button from '../../components/Forms/Button';
import { categories } from '../../utils/categories';
import { 
  Container, 
  Header, 
  Title, 
  Category, 
  Icon, 
  Name,
  Separator,
  Footer
} from './styles';

interface ICategory {
  key: string;
  name: string;
}

interface Props {
  category: ICategory;
  setCategory: (category: ICategory) => void;
  closeSelectCategory: () => void;
}

export const Categories = ({
  category,
  setCategory,
  closeSelectCategory
} : Props) => {

  function handleSetCategory(category: ICategory) {
    setCategory(category)
  }

  return (
    <Container>
      <Header>
        <Title>Category</Title>
      </Header>

      <FlatList 
        data={categories}
        style={{flex: 1, width: '100%'}}
        keyExtractor={( item ) => item.key}
        renderItem={({ item }) => (
          <Category
            onPress={() => handleSetCategory(item)}
            isActive={category.key === item.key}
          >
            <Icon name={item.icon} />
            <Name>{item.name}</Name>
          </Category>
        )}
        ItemSeparatorComponent={() => <Separator />}
      /> 

      <Footer>
        <Button 
          text="Select" 
          onPress={closeSelectCategory}
        />
      </Footer>
    </Container>
  )
}
