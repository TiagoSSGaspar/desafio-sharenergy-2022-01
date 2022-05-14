import React from 'react';
import Feather from '@expo/vector-icons/build/Feather';
import { TextInputProps } from 'react-native';

import {
  Container, InputArea, Input, ButtonClear, Button
} from './styles';
import { useTheme } from 'styled-components';

type Props = TextInputProps & {
  onSearch: () => void
  onSearchDate: () => void
  onClear: () => void
}

export default function Search({ onSearch, onSearchDate ,onClear, ...rest }: Props) {
  const { colors } = useTheme()

  return (
    <Container>
      <InputArea>
        <Input placeholder="Pesquisar..." {...rest} />
        <ButtonClear onPress={onClear}>
          <Feather name="x" size={16} color={colors.green_500} />
        </ButtonClear>
      </InputArea>
      <Button onPress={onSearch}>
        <Feather name="search" size={16} color={colors.green_500} />
      </Button>
      <Button onPress={onSearchDate}>
        <Feather name="calendar" size={16} color={colors.green_500} />
      </Button>
    </Container>
  )
}

