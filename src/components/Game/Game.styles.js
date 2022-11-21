import styled from 'styled-components/native';

export const Card = styled.View`
    padding: 8px 16px;
    background-color: #FFFFFF;
`;

export const Title = styled.Text`
    font-family: 'OpenSans_600SemiBold';
    font-size: 14px;
    line-height: 19px;
    color: #222222;
    text-transform: uppercase;
    margin-bottom: 8px;
`;

export const CardDetails = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const Image = styled.Image`
    width:  96px;
    height: 36px;
    margin-right: 16px;
`;

export const Score = styled.View`
    width: 32px;
    height: 32px;
    align-items: center;
    border-radius: 8px;
    background: ${props => props.color};
    justify-content: center;
    margin-right: auto;
`;

export const ScoreText = styled.Text`
    font-family: 'OpenSans_600SemiBold';
    font-size: 12px;
    line-height: 16px;
    color : white;
`;

export const Prices = styled.View`
    flex-direction: row;
    align-items: center;
    align-self: flex-end;
`;

export const NormalPrice = styled.Text`
    font-family: 'OpenSans_400Regular';
    font-size: 12px;
    color: #525252;
    margin-right: 8px;
    text-decoration: line-through;
`;

export const SalePrice = styled.Text`
    font-family: 'OpenSans_700Bold';
    font-size: 16px;
    line-height: 24px;
    color: #222222;
`;