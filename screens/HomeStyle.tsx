import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center', 
    backgroundColor: '#808080' 
    },
  image: { 
    width: 120, 
    height: 120, 
    borderRadius: 60, 
    marginBottom: 15
    },
  name: { 
    fontSize: 22, 
    fontWeight: 'bold', 
    marginBottom: 20,
    color: 'yellow' 
        },
  button: {
    backgroundColor: '#48D1CC',
    padding: 10,
    marginTop: 10,
    borderRadius: 5,
    width: 200,
    alignItems: 'center'
  },
  skillsButton: {
    backgroundColor: '#48D1CC',
    padding: 10,
    marginTop: 30,
    borderRadius: 5,
    width: 200,
    alignItems: 'center'
  },
  buttonText: { color: '#000000', fontSize: 16 }
});