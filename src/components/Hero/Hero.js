import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hello  <br />
        I am Nnabue Favour
      </SectionTitle>
      <SectionText center>
        I am a full stack web developer with a passion for building applications that are user-friendly and responsive.
        i have a strong background in React js(frontend) and Python(backend) and am currently learning AWS and Node js. 
      </SectionText>
      <Button onClick= {()=>window.location ='https://nnabuekassidy@gmail.com'}>Get In Touch</Button>
    </LeftSection>
  </Section>
);

export default Hero;