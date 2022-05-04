import { createContext, useState } from 'react';

// DATA
import data from '../constants/data.json';

export const FilterContext = createContext();

const { Provider } = FilterContext;

const FilterProvider = ({ children }) => {
  let dataArray = Object.values(data);

  const [dataFilter, setDataFilter] = useState(dataArray);

  return (
    <Provider value={{ dataArray, dataFilter, setDataFilter }}>
      {children}
    </Provider>
  );
};

export default FilterProvider;

