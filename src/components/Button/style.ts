import styled, { css } from "styled-components/native";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";
import { RFValue } from "react-native-responsive-fontsize";

interface Props extends RectButtonProps {
  backgroundColor: "green-300" | "white" | "green-500"
  size: "small" | "medium" | "larger" | "full"  ;
}

interface TitleProps {
  textColor: "green-300" | "white" | "green-500"
}


export const Container = styled(RectButton)<Props | any>`    
    padding: 18px;
    border-radius: 15px;
    align-items: center;

    ${({ backgroundColor }) => backgroundColor === "green-300" && css`
        background-color: ${({ theme }) => theme.colors.green_300};
    `}
    ${({ backgroundColor }) => backgroundColor === "white" && css`
        background-color: ${({ theme }) => theme.colors.white};
    `}
    ${({ backgroundColor }) => backgroundColor === "green-500" && css`
        background-color: ${({ theme }) => theme.colors.green_500};
    `}

    ${({ size }) => size === "small" && css`
        width: 30%;
    `}
    ${({ size }) => size === "medium" && css`
        width: 45%;
    `}
    ${({ size }) => size === "larger" && css`
        width: 60%;
    `}
    ${({ size }) => size === "full" && css`
        width: 100%;
    `}


`;

export const Title = styled.Text<TitleProps>`
    font-family: ${({ theme }) => theme.fonts.medium};
    font-size: ${RFValue(14)}px;
    ${({ textColor }) => textColor === "green-300" && css`
        color: ${({ theme }) => theme.colors.green_300};
    `}
    ${({ textColor }) => textColor === "white" && css`
        color: ${({ theme }) => theme.colors.white};
    `}
    ${({ textColor }) => textColor === "green-500" && css`
        color: ${({ theme }) => theme.colors.green_500};
    `}    
`;