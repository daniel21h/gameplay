import React from 'react'
import { Image } from 'react-native'

import { styles } from './styles'

export function GuildIcon() {
  const uri = 'https://compass-ssl.xboxlive.com/assets/bd/41/bd418968-f6c8-4a17-8f69-75688c5ce6ae.jpg?n=FH4-Porsche_911_GT3_RS-545x307-FMnet_Thumbnail.jpg'

  return (
    <Image style={styles.image} source={{ uri }} resizeMode="cover" />
  )
}