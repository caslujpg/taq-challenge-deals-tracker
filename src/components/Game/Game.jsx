import React, { memo } from 'react';
import * as Styled from './Game.styles'

function Game(props) {

  const getMetacriticScoreColor = (metacriticScore) => {
    const metacritcScoreRanges = {
      good: {
        max: 100,
        min: 75
      },
      average: {
        max: 74,
        min: 50
      },
      bad: {
        max: 49,
        min: 0
      }
    }
    
    if(metacriticScore >= metacritcScoreRanges.good.min && metacriticScore <= metacritcScoreRanges.good.max)
      return "#2C9049";
    if(metacriticScore >= metacritcScoreRanges.average.min && metacriticScore <= metacritcScoreRanges.average.max)
      return "#E4A10D";
    if(metacriticScore >= metacritcScoreRanges.bad.min && metacriticScore <= metacritcScoreRanges.bad.max)
      return "#AC1717";
    else
      return "#CCCCCC";
  }

  return (
    <Styled.Card>
      <Styled.Title>{props.title}</Styled.Title>
      <Styled.CardDetails>
        <Styled.Image source={{uri: props.thumb}} />
        <Styled.Score color={getMetacriticScoreColor(props.score)}><Styled.ScoreText>{props.score}</Styled.ScoreText></Styled.Score>
        <Styled.Prices>
          <Styled.NormalPrice>$ {props.normalPrice}</Styled.NormalPrice>
          <Styled.SalePrice>$ {props.salePrice}</Styled.SalePrice>
        </Styled.Prices>
      </Styled.CardDetails>
    </Styled.Card>
  );
}

export default memo(Game);