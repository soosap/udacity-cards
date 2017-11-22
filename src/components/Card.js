/* @flow */
import * as React from 'react';
import styled from 'styled-components/native';

import { Color } from '../utils';
import type { Deck } from '../utils/types';

const Wrapper = styled.View`
  border: 1px solid ${Color.BLACK};
  height: 150px;
  margin: 10px;
  padding: 10px
  border-radius: 3px;
  align-items: center;
  justify-content: center;
`;

const Text = styled.Text`
  font-weight: 600;
  font-size: 20px;
  margin-bottom: 5px;
`;

const Description = styled.Text`
  color: ${Color.GRAY};
`;

const Card = ({ title, questions }: Deck) => {
  return (
    <Wrapper>
      <Text>{title}</Text>
      <Description>
        {questions.length} cards
      </Description>
    </Wrapper>
  );
};

export { Card };
