//Components
import Project from '../Project';

//Data
import data from '../../constants/data.json';

//Styles
import { Content } from './styles';

const Projects = () => {
  return (
    <Content>
      {data.map((item) => (
        <Project key={item.title} item={item} />
      ))}
    </Content>
  );
};

export default Projects;
