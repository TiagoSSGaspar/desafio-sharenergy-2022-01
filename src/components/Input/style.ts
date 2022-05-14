import { TextInput } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled(TextInput)`
    background-color: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.dark};
    
    width: 100%;

    padding: 16px 18px;
    margin-bottom: 8px;

    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${RFValue(14)}px;

    border-radius: 15px;

`;