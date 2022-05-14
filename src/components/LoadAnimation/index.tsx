import React from "react";
import LottieView from "lottie-react-native";

import { Container } from "./style";
import loading from "../../assets/loading.json"

export default function LoadAnimation() {

  return (
    <Container>
      <LottieView 
        resizeMode="contain" 
        style={{height: 90}} 
        source={loading}
        autoPlay loop />
    </Container>
  )
}
