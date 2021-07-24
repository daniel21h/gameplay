import React from 'react'
import { BorderlessButton } from 'react-native-gesture-handler'
import { Fontisto } from '@expo/vector-icons'
import { ImageBackground, Text, View, FlatList } from 'react-native'

import { Background } from '../../components/Background'
import { Header } from '../../components/Header'
import { ListHeader } from '../../components/ListHeader'
import { Member } from './components/Member'
import { ListDivider } from '../../components/ListDivider'
import { ButtonIcon } from '../../components/ButtonIcon'

import bannerImg from '../../assets/banner.png'

import { theme } from '../../global/styles/theme'
import { styles } from './styles'

export function AppointmentDetails() {
  const { primary } = theme.colors

  const members = [
    {
      id: '1',
      username: 'Daniel Hessel',
      avatar_url: 'https://github.com/daniel21h.png',
      status: 'online'
    },
    {
      id: '2',
      username: 'Daniel Hessel',
      avatar_url: 'https://github.com/daniel21h.png',
      status: 'offline'
    }
  ]

  return (
    <Background>
      <Header
        title="Detalhes"
        action={
          <BorderlessButton>
            <Fontisto name="share" size={24} color={primary} />
          </BorderlessButton>
        }
      />

      <ImageBackground
        style={styles.banner}
        source={bannerImg}
      >
        <View style={styles.bannerContent}>
          <Text style={styles.title}>Lendários</Text>
          <Text style={styles.subtitle}>
            É hoje que vamos chegar ao challenger sem perder uma partida da md10.
          </Text>
        </View>
      </ImageBackground>

      <ListHeader title="Jogadores" subtitle="Total 3" />

      <FlatList
        data={members}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <Member data={item} />
        )}
        ItemSeparatorComponent={() => <ListDivider />}
        style={styles.members}
      />

      <View style={styles.footer}>
        <ButtonIcon title="Entrar no servidor do Discord" />
      </View>
    </Background>
  )
}