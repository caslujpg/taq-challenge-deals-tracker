import React from 'react';
import { Image } from 'react-native';

import * as Styled from './Search.styles'

import Icon from '../../assets/search/icon.png';
import Logo from '../../assets/search/CheapShark.png';

export const Search = ({onShowResults, setLowerPrice, setUpperPrice, setTitle}) => {

  return (
    <Styled.Container>
      <Styled.Header>
        <Image source={Icon} />
        <Image source={Logo} />
      </Styled.Header>
        <Styled.SearchInput
          placeholder='Buscar por título'
          onChangeText={setTitle}
        />
        <Styled.PricesInputContainer>
          <Styled.PricesInput
            label='Menor Preço:'
            onChangeText={setLowerPrice}
          />
          <Styled.Divider />
          <Styled.PricesInput
            label='Maior Preço:'
            onChangeText={setUpperPrice}
          />
        </Styled.PricesInputContainer>
        <Styled.Button onPress={onShowResults}>
          <Styled.ButtonText>Mostrar resultados</Styled.ButtonText>
        </Styled.Button>
    </Styled.Container>
  );
}