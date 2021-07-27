import React, { useState, useCallback } from 'react'
import { View, FlatList } from 'react-native'
import { useNavigation, useFocusEffect } from '@react-navigation/native'

import { Profile } from '../../components/Profile'
import { ButtonAdd } from '../../components/ButtonAdd'
import { CategorySelect } from '../../components/CategorySelect'
import { ListHeader } from '../../components/ListHeader'
import { Appointment, AppointmentProps } from '../../components/Appointment'
import { ListDivider } from '../../components/ListDivider'
import { Background } from '../../components/Background'

import { styles } from './styles'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { storage } from '../../configs/storage'
import { Load } from '../../components/Load'


export function Home() {
  const [category, setCategory] = useState('')
  const [appointments, setAppointments] = useState<AppointmentProps[]>([])
  const [loading, setLoading] = useState(true)

  const navigation = useNavigation()

  function handleCategorySelect(categoryId: string) {
    categoryId === category ? setCategory('') : setCategory(categoryId)
  }

  function handleNavigateToAppointmentDetails(appointmentSelected: AppointmentProps) {
    navigation.navigate('AppointmentDetails', { appointmentSelected })
  }

  function handleNavigateToAppointmentCreate() {
    navigation.navigate('AppointmentCreate')
  }

  async function loadAppointments() {
    const inStorage = await AsyncStorage.getItem(storage.collection_appointments)

    const appointmentsInStorage: AppointmentProps[] = inStorage ? JSON.parse(inStorage) : []

    if (category) {
      setAppointments(appointmentsInStorage.filter(item => item.category === category))
    } else {
      setAppointments(appointmentsInStorage)
    }

    setLoading(false)
  }

  useFocusEffect(useCallback(() => {
    loadAppointments()
  }, [category]))

  return (
    <Background>
      <View style={styles.header}>
        <Profile />
        <ButtonAdd onPress={handleNavigateToAppointmentCreate} />
      </View>

      <CategorySelect
        categorySelected={category}
        setCategory={handleCategorySelect}
      />

      {loading
        ? <Load />
        : (
          <>
            <ListHeader title="Partidas agendadas" subtitle={`Total ${appointments.length}`} />
            <FlatList
              data={appointments}
              keyExtractor={item => item.id}
              style={styles.matches}
              showsVerticalScrollIndicator={false}
              renderItem={({ item }) => (
                <Appointment
                  data={item}
                  onPress={() => handleNavigateToAppointmentDetails(item)}
                />
              )}
              ItemSeparatorComponent={() => <ListDivider />}
              contentContainerStyle={{ paddingBottom: 69, paddingHorizontal: 24 }}
            />
          </>
        )
      }
    </Background>
  )
}