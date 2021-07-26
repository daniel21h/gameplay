import React from 'react'
import { View, Text, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { useAuth } from '../../hooks/auth'

import { ButtonIcon } from '../../components/ButtonIcon'
import { Background } from '../../components/Background'

import illustrationImg from '../../assets/illustration.png'
import discordImg from '../../assets/discord.png'

import { styles } from './styles'

export function SignIn() {
  const navigation = useNavigation()

  const { user } = useAuth()

  function handleSignIn() {
    navigation.navigate('Home')
  }

  return (
    <Background>
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

          <ButtonIcon
            title="Entrar com Discord"
            onPress={handleSignIn}
            icon={discordImg}
          />
        </View>
      </View>
    </Background>
  )
}