import React from 'react'
import { RectButton, RectButtonProps } from 'react-native-gesture-handler'
import {
  View,
  Text,
  Image,
} from 'react-native'

import { styles } from './styles'

type Props = RectButtonProps & {
  title: string;
  icon?: any;
}

export function ButtonIcon({ title, icon, ...rest }: Props) {
  return (
    <RectButton style={styles.container} {...rest}>
      {icon && (
        <View style={styles.iconWrapper}>
          <Image style={styles.icon} source={icon} />
        </View>
      )}

      <Text style={styles.title}>
        {title}
      </Text>
    </RectButton>
  )
}