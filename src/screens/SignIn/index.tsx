import React from "react";
import { View, Text, Image } from "react-native";

import { ButtonIcon } from "../../components/Buttonicon";
import illustrationImg from "../../assets/illustration.png";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../routes/auth.routes";

type homeSreenProp = StackNavigationProp<RootStackParamList, "Home">;

export function SignIn() {
  const navigation = useNavigation<homeSreenProp>();
  function handleSignIn() {
    navigation.navigate("Home");
  }

  return (
    <View style={styles.container}>
      <Image
        source={illustrationImg}
        style={styles.image}
        resizeMode="stretch"
      />
      <View style={styles.content}>
        <Text style={styles.title}>
          Conecte-se{"\n"} e organize suas{"\n"} jogatinas
        </Text>
        <Text style={styles.subtitle}>
          Crie grupos para jogar seus games{"\n"} favoritos com seus amigos{" "}
        </Text>
        <ButtonIcon title="Entrar com Discord" onPress={handleSignIn} />
      </View>
    </View>
  );
}
