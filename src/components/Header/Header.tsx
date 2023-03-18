import dynamic from 'next/dynamic';
import NextImage from 'next/image';
import { FiUser } from 'react-icons/fi';
import { SiGmail, SiGithub, SiLinkedin } from 'react-icons/si';

import {
  Wrapper,
  Image,
  MobileImage,
  UserInfo,
  OnlineDot,
  IconWapper,
  EnglishName,
} from './Header.styled';

const ThemeToggle = dynamic(() => import('./ThemeToggle').then(({ ThemeToggle }) => ThemeToggle), {
  ssr: false,
});

const Header = () => {
  return (
    <Wrapper>
      <UserInfo>
        <Image>
          <NextImage
            src="https://avatars.githubusercontent.com/u/56660101?v=4"
            alt="chris`s profile"
            width={75}
            height={75}
          />
        </Image>
        <MobileImage>
          <NextImage
            src="https://avatars.githubusercontent.com/u/56660101?v=4"
            alt="chris`s mobile size profile"
            width={50}
            height={50}
          />
        </MobileImage>
        <div>
          <div>
            정재욱 <EnglishName>(chris)</EnglishName>
          </div>
          <OnlineDot>
            <FiUser />
            online
          </OnlineDot>
        </div>
      </UserInfo>
      <IconWapper>
        <ThemeToggle />
        <a
          href="https://github.com/jaewook-jeong"
          target="_blank"
          rel="noreferrer"
          aria-label="Github"
        >
          <SiGithub size={30} />
        </a>
        <a
          href="https://www.linkedin.com/in/%EC%9E%AC%EC%9A%B1-%EC%A0%95-567649254/"
          target="_blank"
          rel="noreferrer"
          aria-label="Linkedin"
        >
          <SiLinkedin size={30} />
        </a>
        <a href="mailto:dnrlwo11@gmail.com" aria-label="Gmail">
          <SiGmail size={35} />
        </a>
      </IconWapper>
    </Wrapper>
  );
};

export default Header;
