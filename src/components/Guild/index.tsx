import React from 'react'
import { View, TouchableOpacity, TouchableOpacityProps, Text } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { LinearGradient } from 'expo-linear-gradient'

import { GuildIcon } from '../GuildIcon'

import { styles } from './styles'
import { theme } from '../../global/styles/theme'

export type GuildProps = {
  id: string;
  name: string;
  icon: string | null;
  owner: boolean;
}

type Props = TouchableOpacityProps & {
  data: GuildProps;
}

export function Guild({ data, ...rest }: Props) {
  const { secondary50, secondary70 } = theme.colors

  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.5}
      {...rest}
    >
      <LinearGradient
        style={styles.guildIconContainer}
        colors={[secondary50, secondary70]}
      >
        <GuildIcon />
      </LinearGradient>

      <View style={styles.content}>
        <View>
          <Text style={styles.title}>
            {data.name}
          </Text>

          <Text style={styles.type}>
            {data.owner ? 'Administrador' : 'Convidado'}
          </Text>
        </View>
      </View>

      <Feather name="chevron-right" color={theme.colors.highlight} size={24} />
    </TouchableOpacity>
  )
}