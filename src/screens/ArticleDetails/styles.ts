import styled from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";
import { BlurView } from "expo-blur";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { Fontisto } from '@expo/vector-icons';


export const Container = styled.View`
  flex: 1;
  background: ${({ theme }) => theme.colors.green_500};
`;

export const Article = styled.View`
  margin: 5px;
  padding: 5px;
`;

export const Blur = styled(BlurView).attrs({
  intensity: 80,
})`
  width: ${RFPercentage(50)}px;
  height: ${RFPercentage(71)}px;
  border-radius: 20px;
`;
export const Gradient = styled(LinearGradient).attrs(
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

export const Content = styled.View`
  padding: 16px;
`;

export const Wrapper = styled.View`
  align-items: center;
  justify-content: center;
  flex-direction: row;
  margin: 16px;
`;

export const ImageArticle = styled.Image`
  width: ${RFValue(310)}px;
  height: ${RFValue(200)}px;
  border-radius: 20px;
`;

export const Title = styled.Text`
    font-size: ${RFValue(14)}px;
    font-family: ${({ theme }) => theme.fonts.bold};
`;

export const InfoTitle = styled.Text`
    font-size: ${RFValue(12)}px;
    font-family: ${({ theme }) => theme.fonts.bold};
    margin: 8px 0;
`;

export const Paragraph = styled.Text`
    text-align: justify;
    font-size: ${RFValue(12)}px;
    font-family: ${({ theme }) => theme.fonts.medium};
    margin-top: 16px;
`;

export const Icon = styled(Fontisto)`
  color:  ${({ theme }) => theme.colors.green_300};
  font-size: ${RFValue(16)}px;
  margin: 0 8px;
`;

export const WrapperButtons = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 8px;
  margin: 0 8px;
`;

export const WrapperInfo = styled.View`
  flex-direction: row;
  align-items: center;
`;