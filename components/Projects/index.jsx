import { useContext } from 'react';

//Components
import Project from '../Project';

//Data
import { FilterContext } from '../../context/FilterContext';

//Styles
import { Content } from './styles';

const Projects = () => {
  const { dataFilter } = useContext(FilterContext);
  
  return (
    <Content>
      {dataFilter.map((item) => (
        <Project key={item.title} item={item} />
      ))}
    </Content>
  );
};

export default Projects;
