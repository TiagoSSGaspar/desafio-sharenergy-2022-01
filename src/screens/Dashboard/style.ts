import styled from "styled-components/native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { getBottomSpace } from "react-native-iphone-x-helper";
import { FlatList, FlatListProps } from "react-native";
import {Picker, PickerProps} from '@react-native-picker/picker';

export const Container = styled.View`
  flex: 1;
  background: ${({ theme }) => theme.colors.green_500};
`;

export const Article = styled.View`
  flex: 1;
  padding: 0 16px;

  margin-top: ${RFPercentage(8)}px;
  
`;

export const Wrapper = styled.View`
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`;

export const SelectAmountArticles = styled(Picker)<PickerProps | any>`
  width: 45%;
`;

export const Title = styled.Text`
  font-size: ${RFValue(18)}px;
  font-family:  ${({ theme }) => theme.fonts.regular};
  margin-top: 5px;
  color:  ${({ theme }) => theme.colors.white};

`;

export const ArticleList = styled(

  FlatList as new (props: FlatListProps<ArticleDTO>) => FlatList<ArticleDTO>

).attrs(
  {
    showsVerticalScrollIndicator: false,
    contentContainerStyle: {
      paddingBottom: getBottomSpace()
    }
  }
)`
`;

export const LoadContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
