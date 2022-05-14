import styled from 'styled-components/native';
import { BorderlessButton} from 'react-native-gesture-handler';
import { RFPercentage } from 'react-native-responsive-fontsize';

export const Container = styled(BorderlessButton)`
  position: absolute;
  margin-left: 16px;
  top: ${RFPercentage(10)}px;
`;
