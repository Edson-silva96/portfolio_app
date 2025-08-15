import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Linking } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { styles } from './HomeStyle';

type RootStackParamList = {
  Home: undefined;
  Skills: undefined;
};

type HomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

type Props = {
  navigation: HomeScreenNavigationProp;
};

export default function HomeScreen({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/minha-foto.png')} style={styles.image} />
      <Text style={styles.name}>Edson Silva</Text>

      <TouchableOpacity style={styles.button} onPress={() => Linking.openURL('https://www.linkedin.com/in/edson-francisco-silva-3b39ba221')}>
        <Text style={styles.buttonText}>LinkedIn</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => Linking.openURL('https://github.com/Edson-silva96?tab=repositories')}>
        <Text style={styles.buttonText}>GitHub</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => Linking.openURL('mailto:essim25silva@gmail.com')}>
        <Text style={styles.buttonText}>E-mail</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.skillsButton} onPress={() => navigation.navigate('Skills')}>
        <Text style={styles.buttonText}>Ver Habilidades</Text>
      </TouchableOpacity>
    </View>
  );
}


