import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; // ✅ Import correto para Expo
import { styles } from './skillStyle';

export default function SkillsScreen() {
  const skills = [
    { name: 'React Native', stars: 4 },
    { name: 'JavaScript', stars: 3 },
    { name: 'Python', stars: 5 },
    { name: 'Machine Learning', stars: 4 },
    { name: 'HTML', stars: 4},
    { name: 'Css', stars: 4},
    { name: 'ciencia de dados', stars: 5 },
    { name: 'Power Bi', stars: 4 },
    { name: 'excel', stars: 4 },
    { name: 'analise de dados', stars: 4}
  ];

  return (
    <View style={styles.container}>
      <Image source={require('../assets/minha-foto.png')} style={styles.image} />
      <Text style={styles.title}>Minhas Habilidades</Text>

      {skills.map((skill, index) => (
        <View key={index} style={styles.skillContainer}>
          <Text style={styles.skillText}>{skill.name}</Text>
          <View style={styles.stars}>
            {[...Array(5)].map((_, i) => (
              <FontAwesome
                key={i}
                name="star"
                size={20}
                color={i < skill.stars ? '#FFD700' : '#ccc'}
              />
            ))}
          </View>
        </View>
      ))}
    </View>
  );
}

