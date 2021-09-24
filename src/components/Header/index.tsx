import styled from 'styled-components';
import { FaLinkedin } from 'react-icons/fa';
import { ImHome3 } from 'react-icons/im';
import { IoMdPeople, } from 'react-icons/io';
import { IoNotifications } from 'react-icons/io5';
import { AiFillMessage } from 'react-icons/ai';
import colors from '../../styles/colors';

import myProfileImage from '../../assets/eu.jpeg';

export function Header() {
  return (
    <MyHeader>
      <Content>
        <JoinedContent>
          <FaLinkedin size='max-content' color={colors.linkedinColor}/>
          <Input type="text" placeholder="Pesquisar"/>
        </JoinedContent>

        <Nav>
          <Button>
            <ImHome3 size={24} color={colors.defaultHeaderButton}/>
          </Button>
          <Button>
            <IoMdPeople size={24} color={colors.defaultHeaderButton}/>
          </Button>
         <Button>
           <AiFillMessage size={24} color={colors.defaultHeaderButton}/>
          </Button>
          <Button>
            <IoNotifications size={24} color={colors.defaultHeaderButton}/>
          </Button>
          <Button type="button">
            <ProfileImage src={myProfileImage} alt="perfil"/>
          </Button>
        </Nav>
      </Content>
    </MyHeader>
  )
}

const MyHeader = styled.header`
  height: 53px;
  position: fixed;
  border-bottom: 1px solid #ddd;
  width: 100%;

  display: flex;
`;

const Content = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  padding: 5px 100px;
`;

const JoinedContent = styled.div`
  display: flex;
  height: 100%;
  gap: 10px;
`;

const Input = styled.input`
  border: 0;
  border-radius: 5px;
  background: ${colors.inputColor};
  padding: 0 10px;
  margin: 5px 0;
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 20px;

  &::after {
    content: '';
    height: 53px;
    background: #ddd;
    width: 1px;
  }
`;

const ProfileImage = styled.img`
  border-radius: 50%;
  width: 25px;
  height: 25px;
`;

const Button = styled.button`
  display: flex;
  background: transparent;
  border: 0;
  flex-direction: column;
  position: relative;

  cursor: pointer;

  svg {
    transition: fill 0.3s;

    &:hover {
      fill: #000;
    }
  }
`;
