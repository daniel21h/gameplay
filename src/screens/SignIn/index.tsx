import React from 'react'
import { View, Text, Image, Alert, ActivityIndicator } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { useAuth } from '../../hooks/auth'

import { ButtonIcon } from '../../components/ButtonIcon'
import { Background } from '../../components/Background'

import illustrationImg from '../../assets/illustration.png'
import discordImg from '../../assets/discord.png'

import { styles } from './styles'
import { theme } from '../../global/styles/theme'

export function SignIn() {
  const navigation = useNavigation()

  const { signIn, loading } = useAuth()

  async function handleSignIn() {
    try {
      await signIn()
    } catch (err) {
      Alert.alert(err)
    }

    // navigation.navigate('Home')
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

          {loading
            ? <ActivityIndicator color={theme.colors.primary} />
            : <ButtonIcon
              title="Entrar com Discord"
              onPress={handleSignIn}
              icon={discordImg}
            />
          }
        </View>
      </View>
    </Background>
  )
}