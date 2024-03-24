import React, {memo} from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const MenuLinkContainer = styled(NavLink)`
  font-size: 20px;
  cursor: pointer;
  padding-bottom: 2px;
  color: #222;
  text-decoration: none;

  &:hover {
    color: #22b8cf;
  }

  &:after {
    content: '|';
    display: inline-block;
    padding: 0 7px;
    color: #ccc;
  }

  &:last-child:after {
    color: #fff;
  }

  &.active {
    text-decoration: underline;
    color: red;

    &:after {
      border-bottom: 4px solid #fff !important;
    }
  }
`;

const MenuLink = memo(({to, children}) => {
  return (
    <MenuLinkContainer to={to}>
      {children}
    </MenuLinkContainer>
  );
});

export default MenuLink;