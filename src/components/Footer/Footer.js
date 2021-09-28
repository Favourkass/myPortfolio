import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillGooglePlusCircle } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href = 'tell:+234-816-530-3359'>+234-816-530-3359</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href = 'mailto:nnabuekassidy@gmail.com'>nnabuekassidy@gmail.com</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Striving to Always make an Impact</Slogan>
        </CompanyContainer>
        <SocialContainer>
        <SocialIcons href ="https://github.com">
          <AiFillGithub size = "2em"/>
        </SocialIcons>
        <SocialIcons href ="https://linkedin.com">
          <AiFillLinkedin size = "2em"/>
        </SocialIcons>
        <SocialIcons href ="https://nnabuekassidy@gmail.com">
          <AiFillGooglePlusCircle size = "2em"/>
        </SocialIcons>
        </SocialContainer> 
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
