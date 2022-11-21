import styled from 'styled-components/native';

import { Input } from '../Input';

export const Container = styled.View`
  background-color: #38344E;
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  padding: 16px;
  margin-bottom: 16px;
`;

export const Header = styled.View`
  margin-bottom: 16px;
  flex-direction: row;
  justify-content: center;
`;

export const SearchInput = styled(Input)`
  margin-bottom: 16px;
`;

export const PricesInputContainer = styled.View`
  flex-direction: row;
`;

export const PricesInput = styled(Input)`
  margin-bottom: 16px;
  flex: 1;
`;

export const Divider = styled.View`
  width: 16px;
`;

export const Button = styled.TouchableOpacity`
  width: 100%;
  background: #F6C224;
  border-radius: 2px;
  justify-content: center;
  align-items: center;
  height: 44px;
`;

export const ButtonText = styled.Text`
  font-family: 'OpenSans_600SemiBold';
  font-size: 16px;
  color: #222222;
`;