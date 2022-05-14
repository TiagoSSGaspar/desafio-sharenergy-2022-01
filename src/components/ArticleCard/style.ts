import styled from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";
import { BlurView } from "expo-blur";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons"

export const Container = styled.View`
    padding: 16px;
    margin: 5px 0;
    flex-direction: row;
    align-items: center;  
`;

export const CardBlur = styled(BlurView).attrs({
  intensity: 80,
})`
  width: ${RFPercentage(45)}px;
  height: ${RFPercentage(24)}px;
  border-radius: 20px;
`;
export const CardGradient = styled(LinearGradient).attrs(
  {
    colors: ['#4fe2ec18', 'rgba(0,0,0,0.3)'],
    start: { x: 0, y: 1 },
    end: { x: 1, y: 1 }
  }
)`
    height: 100%;
    width: 100%;
    border-color: #ffffffb4;
    border-radius: 20px;
    border-width: 2px;
`;

export const CardContent = styled(RectButton)<RectButtonProps | any>`
  padding: 16px;
`;

export const PublishedAt = styled.Text`
  margin: 8px 0;
`;

export const Wrapper = styled.View`
  align-items: center;
  justify-content: center;
  flex-direction: row;
  margin-top: 8px;
`;

export const Icon = styled(Feather)`
  color:  ${({ theme }) => theme.colors.green_300};
  font-size: ${RFValue(24)}px;
  margin: 0 16px;
`;

export const Title = styled.Text`
    font-size: ${RFValue(14)}px;
    font-family: ${({ theme }) => theme.fonts.bold};
`;

export const Paragraph = styled.Text`
    font-size: ${RFValue(12)}px;
    font-family: ${({ theme }) => theme.fonts.medium};
    margin-top: 16px;
`;



