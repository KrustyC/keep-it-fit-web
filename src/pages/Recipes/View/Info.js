import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import ServingIcon from 'assets/icons/dinner.svg';
import ClockIcon from 'assets/icons/clock.svg';
import CategoryIcon from 'assets/icons/list.svg';
import LevelIcon from 'assets/icons/level.svg';

const OuterContainer = styled.div`
  ${({ theme }) => css`
    width: ${theme.dimensions.containerWidth.fullscreen};
    padding: ${theme.padding.lg} 0;
    margin: ${theme.margin.md} 0;

    @media (max-width: ${theme.sizes.md}) {
      padding: ${theme.padding.xs} 0;
    }
  `}
`;

const InnerContainer = styled.div`
  ${({ theme }) => css`
    width: ${theme.dimensions.containerWidth.large};
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    grid-column-gap: 15px;

    @media (max-width: ${theme.sizes.md}) {
      width: 80vw;
      display: grid;
      grid-template-columns: repeat(4, auto);
      grid-column-gap: ${theme.margin.md};
      overflow-y: scroll;

      * {
        white-space: nowrap;
      }
    }
  `}
`;

const Info = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex: 1;

    @media (max-width: ${theme.sizes.md}) {
      justify-content: flex-start;
    }
  `}
`;

const InfoTitle = styled.div`
  display: flex;
  align-items: center;
  font-weight: bold;
  height: 23px;
`;

const Left = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    height: 40px;
    svg {
      margin-right: ${theme.margin.sm};
      width: 40px;
      height: 40px;

      @media (max-width: ${theme.sizes.md}) {
        width: 25px;
        height: 25px;
      }
    }
  `}
`;

const Right = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    span {
      margin-top: ${theme.margin.xs};
    }
  `}
`;

const RecipeInfo = ({ recipe }) => (
  <OuterContainer>
    <InnerContainer>
      <Info>
        <Left>
          <ServingIcon />
        </Left>
        <Right>
          <InfoTitle>Servings</InfoTitle>
          <span>{recipe.servings}</span>
        </Right>
      </Info>
      <Info>
        <Left>
          <ClockIcon />
        </Left>
        <Right>
          <InfoTitle>Prep Time</InfoTitle>
          <span>{recipe.totalTime} min</span>
        </Right>
      </Info>
      <Info>
        <Left>
          <LevelIcon />
        </Left>
        <Right>
          <InfoTitle>Level</InfoTitle>
          <span>{recipe.level.name}</span>
        </Right>
      </Info>
      <Info>
        <Left>
          <CategoryIcon />
        </Left>
        <Right>
          <InfoTitle>Category</InfoTitle>
          <span>{recipe.category.name}</span>
        </Right>
      </Info>
    </InnerContainer>
  </OuterContainer>
);

RecipeInfo.propTypes = {
  recipe: PropTypes.shape({
    servings: PropTypes.number.isRequired,
    totalTime: PropTypes.number.isRequired,
    level: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }).isRequired,
    category: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default RecipeInfo;
