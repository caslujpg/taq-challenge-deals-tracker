import React from "react";

import styled from 'styled-components/native';

export function Input ({label, style, ...rest}) {
    return (
      <Container style={style}>
        <Label>{label}</Label>
        <StyledInput {...rest} />
      </Container>
    );
}

const Container = styled.View`
  
`;

const StyledInput = styled.TextInput`
  height: 44px;
  padding: 0px 16px;
  background: #FFFFFF;
  border: 1px solid #DDDDDD;
  border-radius: 2px;
`;

const Label = styled.Text`
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  text-transform: uppercase;
  color: #FFFFFF;
  margin-bottom: 4px;
`;