import React from 'react';
import posed from 'react-pose';
import styled, { css } from 'styled-components';
import P from 'uikit/elements/P';
import Link from 'uikit/elements/Link';

const Box = styled(
  posed.div({
    closed: {
      y: '0px',
      transition: {
        y: { type: 'spring', stiffness: 80, damping: 15 },
      },
    },
    open: {
      y: '100px',
    },
  })
)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
  ${({ theme }) => css`
    height: 200px;
    width: 200px;
    border-radius: 50%;
    margin-bottom: ${theme.margin.md};
  `}
`;

export default () => (
  <Box initialPose="open" pose="closed">
    {/* eslint-disable-next-line */}
    <Image src={require('assets/icons/paper-plane.svg')} />
    <P align="center">
      Your password has been succesfully reset! Now you are ready to login and
      enjoy Healfit! @TODO BETTER COPY
    </P>
    <Link to="/auth/signin" component="button" color="primary">
      Back To Login
    </Link>
  </Box>
);
