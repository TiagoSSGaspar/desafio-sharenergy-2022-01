import styled, { css } from "styled-components/native";
import { RFPercentage } from "react-native-responsive-fontsize";

import { TextInput } from "react-native";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";


export const Container = styled.View`
    padding: 0 16px;
    margin-top: ${RFPercentage(10)}px;
    align-items: center;
    flex-direction: row;
    width: 100%;
`;

export const InputArea = styled.View`
  flex: 1;
  align-items: center;
  flex-direction: row;
  border-radius: 16px;

  ${({ theme }) => css`
    background-color: ${theme.colors.white};
    border: 1px solid ${theme.colors.white};
  `};


`;

export const Input = styled(TextInput)`
  flex: 1;
  height: 52px;
  padding-left: 12px;
  font-family: ${({ theme }) => theme.fonts.medium};
`
export const ButtonClear = styled.TouchableOpacity`
  margin-right: 8px;
`;

export const Button = styled(RectButton)<RectButtonProps | any>`
  width: 52px;
  height: 52px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 18px;
  margin-left: 7px;
`;
