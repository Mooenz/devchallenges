import Image from 'next/image';

//Styles
import {
  Article,
  ContainerImage,
  Img,
  Level,
  Content,
  Title,
  Body,
  Anchor,
} from './styles';

const Project = ({ item }) => {
  const path = 'image/';

  const { title, body, level, check, repository, demo, image } = item;

  return (
    <Article>
      <ContainerImage>
        <a href={demo} target="_blank" rel="noopener noreferrer"  title="demo">
          <Img src={`${path}${image ? image : 'default.webp'}`} alt={title} />
        </a>
        <Level>{level}</Level>
      </ContainerImage>
      <Content>
        <Title>{title}</Title>
        {check && (
          <Anchor href={repository} target="_blank" rel="noopener noreferrer" title="repository"> 
            <Image
              src="/icons/vector.svg"
              alt="vector"
              width={24}
              height={14}
            />
          </Anchor>
        )}
      </Content>
      <Body>{body}</Body>
    </Article>
  );
};

export default Project;
