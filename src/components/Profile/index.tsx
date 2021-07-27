import React, { useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { useAuth } from '../../hooks/auth'

import { Avatar } from '../Avatar'
import { ModalView } from '../ModalView'

import { styles } from './styles'

export function Profile() {
  const { user, signOut } = useAuth()

  const [openGuildsModal, setOpenGuildsModal] = useState(false)

  function handleOpenGuildsModal() {
    setOpenGuildsModal(true)
  }

  function handleCloseGuildsModal() {
    setOpenGuildsModal(false)
  }

  function handleSignOut() {
    signOut()
  }

  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity onPress={handleOpenGuildsModal}>
          <Avatar urlImage={user.avatar} />
        </TouchableOpacity>

        <View>
          <View style={styles.user}>
            <Text style={styles.greeting}>
              Olá,
            </Text>

            <Text style={styles.username}>
              {user.firstName}
            </Text>
          </View>

          <Text style={styles.message}>
            Hoje é dia de vitória
          </Text>
        </View>
      </View>

      <ModalView visible={openGuildsModal} closeModal={handleCloseGuildsModal} marginTop={'140%'}>
        <Text style={styles.modalTitle}>
          Deseja sair do{' '}
          <Text style={styles.modalTitleStrongWhite}>
            Game
            <Text style={styles.modalTitleStrongRed}>Play</Text>?
          </Text>
        </Text>

        <View style={styles.buttons}>
          <TouchableOpacity style={styles.noButton} onPress={handleCloseGuildsModal}>
            <Text style={styles.buttonText}>Não</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.yesButton} onPress={handleSignOut}>
            <Text style={styles.buttonText}>Sim</Text>
          </TouchableOpacity>
        </View>
      </ModalView>
    </>
  )
}