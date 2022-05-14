import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { BorderlessButtonProps} from 'react-native-gesture-handler';

import { useTheme } from 'styled-components';

import {
  Container
} from './styles';

interface Props extends BorderlessButtonProps {
  color?: string;
  icon?: "chevron-left" | "close"
}

export function BackButton({ color, icon, ...rest }: Props){
  const theme = useTheme();
  
  return (
    <Container {...rest}>
      <MaterialIcons 
        name={icon ? icon : "chevron-left"}
        size={32}
        color={color ? color : theme.colors.dark}      
      />
    </Container>
  );
}