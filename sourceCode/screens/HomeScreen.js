import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <Text style={{fontSize:24,alignSelf:"center"}}>HomeScreen</Text>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})