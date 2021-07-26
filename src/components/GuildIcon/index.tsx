import React from 'react'
import { View, Image } from 'react-native'
import { discordAuth } from '../../configs/auth'

import DiscordSvg from '../../assets/discord.svg'

import { styles } from './styles'

type Props = {
  guildId: string;
  iconId: string | null;
}

export function GuildIcon({ guildId, iconId }: Props) {
  const uri = `${discordAuth.cdn_image}/icons/${guildId}/${iconId}.png`

  return (
    <View style={styles.container}>
      {
        iconId
          ? <Image style={styles.image} source={{ uri }} resizeMode="cover" />
          : <DiscordSvg width={40} height={40} />
      }
    </View>
  )
}