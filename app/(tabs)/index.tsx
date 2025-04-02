import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, TextInput, Button, SafeAreaView, Keyboard, TouchableWithoutFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'; // Importa la biblioteca de íconos
import profileImageLocal from '../../assets/images/profile1.jpeg';

export default function Index() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const user = {
    name: 'Kenet Chungandro',
    email: 'kenbok2018@gmail.com',
    profileImage: profileImageLocal,
  };

  const ProfileCard = ({ name, email }) => (
    <View style={styles.profileCard}>
      <View style={styles.row}>
        <Icon name="person" size={24} color="gray" style={styles.icon} />
        <Text style={styles.name}>{name}</Text>
      </View>
      <View style={styles.row}>
        <Icon name="email" size={24} color="gray" style={styles.icon} />
        <Text style={styles.email}>{email}</Text>
      </View>
    </View>
  );

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          <Image source={user.profileImage} style={styles.profileImage} />
          <ProfileCard name={user.name} email={user.email} />
          <View style={styles.row}>
            <TextInput
              style={styles.input}
              placeholder="Número de teléfono"
              value={phoneNumber}
              onChangeText={setPhoneNumber}
              keyboardType="phone-pad"
            />
          </View>
          <Button title="Guardar cambios" onPress={() => console.log('Cambios guardados:', phoneNumber)} />
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f4f4f4', // Asegura que el fondo cubra toda el área segura
  },
  container: {
    flex: 1,
    padding: 50,
    alignItems: 'center', // Centra los elementos horizontalmente
    justifyContent: 'center', // Centra el contenido verticalmente
    backgroundColor: '#f4f4f4', // Un color de fondo claro
  },
  profileImage: {
    width: '100%', // Ajusta el ancho al 100% del contenedor padre
    height: 300,
    borderTopLeftRadius: 20, 
    borderTopRightRadius: 20, 

    marginBottom: 5, // Espacio debajo de la imagen
  },
  profileCard: {
    width: '100%', // Define un ancho consistente para el card
    alignItems: 'center',
    marginBottom: 20,
    padding: 15,
    backgroundColor: 'white',
    borderBottomLeftRadius: 20, 
    borderBottomRightRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2, // Sombra para Android (para iOS se usan las propiedades shadow*)
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  email: {
    fontSize: 16,
    color: 'gray',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
    paddingHorizontal: 10,
    width: '80%',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  icon: {
    marginRight: 10,
  },
});