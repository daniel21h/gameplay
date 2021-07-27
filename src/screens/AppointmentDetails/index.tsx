import React, { useState, useEffect } from 'react'
import { BorderlessButton } from 'react-native-gesture-handler'
import { ImageBackground, Text, View, FlatList, Alert } from 'react-native'
import { Fontisto } from '@expo/vector-icons'
import { useRoute } from '@react-navigation/native'

import { Background } from '../../components/Background'
import { Header } from '../../components/Header'
import { ListHeader } from '../../components/ListHeader'
import { Member, MemberProps } from '../../components/Member'
import { ListDivider } from '../../components/ListDivider'
import { ButtonIcon } from '../../components/ButtonIcon'
import { AppointmentProps } from '../../components/Appointment'

import bannerImg from '../../assets/banner.png'
import discordImg from '../../assets/discord.png'

import { theme } from '../../global/styles/theme'
import { styles } from './styles'
import { api } from '../../services/api'
import { Load } from '../../components/Load'

type Params = {
  appointmentSelected: AppointmentProps;
}

type GuildWidget = {
  id: string;
  name: string;
  instant_invite: string;
  members: MemberProps[];
}

export function AppointmentDetails() {
  const { primary } = theme.colors

  const route = useRoute()

  const { appointmentSelected } = route.params as Params

  const [widget, setWidget] = useState<GuildWidget>({} as GuildWidget)
  const [loading, setLoading] = useState(true)

  async function fetchGuildWidget() {
    try {
      const response = await api.get(`/guilds/${appointmentSelected.guild.id}/widget.json`)

      setWidget(response.data)
    } catch (err) {
      Alert.alert('Verifique as configurações do servidor. Será que o Widget está habilitado?')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchGuildWidget()
  }, [])

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
          <Text style={styles.title}>{appointmentSelected.guild.name}</Text>
          <Text style={styles.subtitle}>
            {appointmentSelected.description}
          </Text>
        </View>
      </ImageBackground>

      {loading
        ? <Load />
        : (
          <>
            <ListHeader title="Jogadores" subtitle={`Total ${widget.members.length}`} />

            <FlatList
              data={widget.members}
              keyExtractor={item => item.id}
              renderItem={({ item }) => (
                <Member data={item} />
              )}
              ItemSeparatorComponent={() => <ListDivider isCentered />}
              style={styles.members}
            />
          </>
        )
      }

      <View style={styles.footer}>
        <ButtonIcon title="Entrar no servidor do Discord" icon={discordImg} />
      </View>
    </Background>
  )
}