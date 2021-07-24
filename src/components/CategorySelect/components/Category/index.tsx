import React from 'react'
import { View, Text } from 'react-native'
import { SvgProps } from 'react-native-svg'
import { RectButtonProps } from 'react-native-gesture-handler'
import { LinearGradient } from 'expo-linear-gradient'

import { styles } from './styles'
import { RectButton } from 'react-native-gesture-handler'
import { theme } from '../../../../global/styles/theme'

type Props = RectButtonProps & {
  icon: React.FC<SvgProps>;
  title: string;
  checked?: boolean;
}

export function Category({
  icon: Icon,
  title,
  checked = false,
  ...rest
}: Props) {
  const { secondary50, secondary70 } = theme.colors

  return (
    <LinearGradient
      style={styles.container}
      colors={[secondary50, secondary70]}
    >
      <RectButton {...rest}>
        <View style={[styles.content, { opacity: checked ? 1 : 0.4 }]}>
          <View style={checked ? styles.checked : styles.check} />

          <Icon width={48} height={48} />

          <Text style={styles.title}>
            {title}
          </Text>
        </View>
      </RectButton>
    </LinearGradient>
  )
}