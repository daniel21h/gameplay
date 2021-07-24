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
  hasCheckBox?: boolean;
  checked?: boolean;
}

export function Category({
  icon: Icon,
  title,
  hasCheckBox = false,
  checked = false,
  ...rest
}: Props) {
  const { secondary40, secondary50, secondary70, secondary85 } = theme.colors

  return (
    <LinearGradient
      style={styles.container}
      colors={[secondary50, secondary70]}
    >
      <RectButton {...rest}>
        <LinearGradient
          style={[styles.content, { opacity: checked ? 1 : 0.5 }]}
          colors={[checked ? secondary85 : secondary85, secondary70]}
        >
          {hasCheckBox && <View style={checked ? styles.checked : styles.check} />}

          <Icon width={48} height={48} />

          <Text style={styles.title}>
            {title}
          </Text>
        </LinearGradient>
      </RectButton>
    </LinearGradient>
  )
}