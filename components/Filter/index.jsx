useState;
import { useState, useContext } from 'react';

//Filter
import { FilterContext } from '../../context/FilterContext';

//Styles
import { Container, List, Item } from './styles';

const Filter = () => {
  // State tap active
  const [tap, setTap] = useState('all');

    // Context
    const { dataArray, setDataFilter } = useContext(FilterContext);

  const handelFilter = (filter) => {
    setTap(filter);
    
    const dataArrayFilter = dataArray.filter((item) => {
      return item.level === filter;
    });

    if (filter === 'newbie' || 'junior') {
      setDataFilter(dataArrayFilter);
    }

    filter === 'all' && setDataFilter(dataArray);
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
