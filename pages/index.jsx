import Head from 'next/head';

//Components
import Projects from '../components/Projects';
import Filter from '../components/Filter';

//Styles
import {
  Main,
  Content,
  Title,
  Strong,
  Body,
  Anchor,
} from '../styles/homeStyles';

export default function Home() {
  return (
    <>
      <Head>
        <title>Projects solved form devChallenge - Mooenz</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main className="spaceLateral">
        <Content>
          <Title>
            Portfolio <Strong>devChallenge</Strong>
          </Title>
          <Body>
            Find these and more challenges{' '}
            <Anchor
              href="https://devchallenges.io/"
              target="_blank"
              rel="noopener noreferrer"
            >
              here.
            </Anchor>
          </Body>
        </Content>
        <Filter />
        <Projects />
      </Main>
    </>
  );
}
