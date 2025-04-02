import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, TextInput, Button, SafeAreaView, Keyboard, TouchableWithoutFeedback } from 'react-native';
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
      colors={['#045e96', '#008160']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      style={styles.profileCard}
    >
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
    </LinearGradient>
  );

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Eco Express</Text>
        </View>
        <View style={styles.container}>
          <Image source={user.profileImage} style={styles.profileImage} />
          <ProfileCard name={user.name} email={user.email} phone={savedPhoneNumber} />
          <View style={styles.row}>
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
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f4f4f4',
  },
  container: {
    flex: 1,
    padding: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f4f4f4',
  },
  profileImage: {
    width: '100%',
    height: 300,
    borderTopLeftRadius: 20, 
    borderTopRightRadius: 20, 
    marginBottom: 5,
  },
  profileCard: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 20,
    padding: 15,
    borderBottomLeftRadius: 20, 
    borderBottomRightRadius: 20,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 5,
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
  header: {
    width: '100%',
    padding: 20,
    backgroundColor: '#045e96',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
});