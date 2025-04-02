import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, TextInput, Button, SafeAreaView, Keyboard, TouchableWithoutFeedback, KeyboardAvoidingView, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import profileImageLocal from '../../assets/images/profile1.jpeg';
import { LinearGradient } from 'expo-linear-gradient';

export default function Index() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [savedPhoneNumber, setSavedPhoneNumber] = useState('999999999999');

  const user = {
    name: 'Kenet Chungandro',
    email: 'kenbok2018@gmail.com',
    profileImage: profileImageLocal,
  };

  const ProfileCard = ({ name, email, phone }) => (
    <LinearGradient
      colors={['#4c669f', '#3b5998', '#192f6a']} // Tonos más profesionales: azul degradado
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.profileCard}
    >
      <View style={styles.cardContent}>
        <View style={styles.row}>
          <Icon name="person" size={24} color="white" style={styles.icon} />
          <Text style={styles.name}>{name}</Text>
        </View>
        <View style={styles.row}>
          <Icon name="email" size={24} color="white" style={styles.icon} />
          <Text style={styles.email}>{email}</Text>
        </View>
        <View style={styles.row}>
          <Icon name="phone" size={24} color="white" style={styles.icon} />
          <Text style={styles.phone}>{phone}</Text>
        </View>
      </View>
    </LinearGradient>
  );

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView style={styles.safeArea}>
        <KeyboardAvoidingView
          style={styles.flexContainer}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
          <View style={styles.header}>
            <Text style={styles.headerText}>Eco Express</Text>
          </View>
          <View style={styles.container}>
            <Image source={user.profileImage} style={styles.profileImage} />
            <ProfileCard name={user.name} email={user.email} phone={savedPhoneNumber} />
            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>Actualizar número de teléfono:</Text>
              <TextInput
                style={styles.input}
                placeholder="Número de teléfono"
                placeholderTextColor="gray"
                value={phoneNumber}
                onChangeText={setPhoneNumber}
                keyboardType="phone-pad"
              />
            </View>
            <Button
              title="Guardar cambios"
              onPress={() => {
                if (phoneNumber.trim() === '') {
                  alert('Por favor, ingresa un número de teléfono válido.');
                  return;
                }
                setSavedPhoneNumber(phoneNumber);
                console.log('Cambios guardados:', phoneNumber);
              }}
            />
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f0f4f8', 
  },
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f0f4f8',
  },
  profileImage: {
    width: 250,
    height: 250,
    borderRadius: '100%', // Imagen circular
    marginBottom: 20,
    borderWidth: 2,
    borderColor: '#3b5998', // Borde azul profesional
  },
  profileCard: {
    width: '90%',
    alignItems: 'center',
    padding: 20,
    borderRadius: 15,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5, // Sombra para Android
  },
  cardContent: {
    width: '100%',
  },
  name: {
    fontSize: 20,
    fontWeight: '600',
    color: 'white',
  },
  email: {
    fontSize: 16,
    color: 'white',
  },
  phone: {
    fontSize: 16,
    color: 'white',
  },
  inputContainer: {
    width: '90%',
    marginBottom: 20,
  },
  inputLabel: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 5,
    color: '#333',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    backgroundColor: 'white',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  icon: {
    marginRight: 10,
  },
  header: {
    width: '100%',
    padding: 20,
    backgroundColor: '#3b5998',
    alignItems: 'center',
    marginBottom: 10,
  },
  headerText: {
    fontSize: 26,
    fontWeight: 'bold',
    color: 'white',
  },
  flexContainer: {
    flex: 1,
  },
});