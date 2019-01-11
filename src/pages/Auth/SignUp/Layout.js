import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: row;
`;

const LeftSide = styled.div`
  height: 100vh;
  flex: 4;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

/* eslint-disable global-require */
const RightSide = styled.div`
  height: 100vh;
  flex: 7;
  background-image: url(${require('assets/images/login.jpg')});
`;
/* eslint-enable global-require */

const Layout = ({ children }) => (
  <Container>
    <LeftSide>{children}</LeftSide>
    <RightSide />
  </Container>
);

Layout.propTypes = {
  children: PropTypes.any.isRequired,
};

export default Layout;