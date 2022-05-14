import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  background: ${({theme}) => theme.colors.white};
  width: 100%;
  height: ${RFPercentage(24)}px;
  justify-content: center;
  align-items: center;
`;

export const Logo = styled.Image`
    width: ${RFValue(226)}px;
    height: ${RFValue(49)}px;
`;
