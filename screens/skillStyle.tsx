import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    alignItems: 'center', 
    backgroundColor: '#808080', 
    padding: 20 
},
  image: { 
    width: 100, 
    height: 100, 
    borderRadius: 50, 
    marginBottom: 15 },
  title: { 
    fontSize: 22, 
    fontWeight: 'bold', 
    marginBottom: 20 
},
  skillContainer: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    width: '80%', 
    marginBottom: 15 
},
  skillText: {
    fontSize: 18, 
    fontWeight: '500' 
},
  stars: { 
    flexDirection: 'row' 
}
});