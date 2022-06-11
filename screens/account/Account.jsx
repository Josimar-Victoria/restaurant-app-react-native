import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { useEffect } from 'react'

export default function Account () {
  const [login, setLogin] = useState(null)

  useEffect(() => {
    setLogin(true)
  }, [])
  return (
    <View>
      <Text>Account</Text>
    </View>
  )
}

const styles = StyleSheet.create({})
