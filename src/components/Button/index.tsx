import React from "react";
import { RectButtonProps } from "react-native-gesture-handler";

import { Container, Title } from "./style";

interface Props extends RectButtonProps {
  title: string;
  backgroundColor: "green-300" | "white" | "green-500";
  textColor: "green-300" | "white" | "green-500";
  size: "small" | "medium" | "larger" | "full" ;
  onPress: () => void;
}

export default function Button({ title, backgroundColor, textColor, size, onPress, ...rest }: Props) {
  return (
    <Container backgroundColor={backgroundColor} size={size} onPress={onPress} {...rest}>
      <Title textColor={textColor} >{title}</Title>
    </Container>
  )
}