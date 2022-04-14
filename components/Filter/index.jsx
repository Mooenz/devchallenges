useState;
import { useState } from 'react';
//Styles
import { Container, List, Item } from './styles';

const Filter = () => {
  // State tap active
  const [tap, setTap] = useState('all');

  const handelFilter = (filter) => {
    setTap(filter);
  };

  return (
    <Container>
      <List>
        <Item
          tapActive="all"
          tapSelect={tap}
          onClick={() => handelFilter('all')}
        >
          All
        </Item>
        <Item
          tapActive="beginner"
          tapSelect={tap}
          onClick={() => handelFilter('beginner')}
        >
          Beginner
        </Item>
        <Item
          tapActive="elementary"
          tapSelect={tap}
          onClick={() => handelFilter('elementary')}
        >
          Elementary
        </Item>
        <Item
          tapActive="intermediate"
          tapSelect={tap}
          onClick={() => handelFilter('intermediate')}
        >
          Intermediate
        </Item>
      </List>
    </Container>
  );
};

export default Filter;
