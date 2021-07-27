import React, { ReactNode } from 'react'
import { View, Modal, ModalProps, TouchableWithoutFeedback } from 'react-native'

import { Background } from '../Background'

import { styles } from './styles'

type Props = ModalProps & {
  children: ReactNode;
  closeModal: () => void;
  marginTop: string;
}

export function ModalView({ children, closeModal, marginTop, ...rest }: Props) {
  return (
    <Modal
      transparent
      animationType="slide"
      statusBarTranslucent
      {...rest}
      style={styles.modal}
    >
      <TouchableWithoutFeedback onPress={closeModal}>
        <View style={styles.overlay}>
          <View style={[styles.container, { marginTop }]}>
            <Background>
              <View style={styles.bar} />
              {children}
            </Background>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  )
}