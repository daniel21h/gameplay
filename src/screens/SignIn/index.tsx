import React from 'react'
import { View, Text, Image } from 'react-native'

import { ButtonIcon } from '../../components/ButtonIcon'

import illustrationImg from '../../assets/illustration.png'

import { styles } from './styles'

export function SignIn() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.illustration}
        source={illustrationImg}
        resizeMode="stretch"
      />

      <View style={styles.content}>
        <Text style={styles.title}>
          Conecte-se e organize suas jogatinas
        </Text>

        <Text style={styles.subtitle}>
          Crie grupos para jogar seus games favoritos com seus amigos
        </Text>

        <ButtonIcon title="Entrar com Discord" activeOpacity={.5} />
      </View>
    </View>
  )
}