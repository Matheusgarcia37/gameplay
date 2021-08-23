import React from "react";
import { Image } from "react-native";

import { styles } from "./styles";

export function GuildIcon() {
  const uri =
    "https://e7.pngegg.com/pngimages/672/63/png-clipart-discord-computer-icons-online-chat-cool-discord-icon-logo-smiley.png";

  return <Image source={{ uri }} style={styles.image} resizeMode="cover" />;
}
