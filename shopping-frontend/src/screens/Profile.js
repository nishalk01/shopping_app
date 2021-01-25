import React from 'react';
import {View,Button} from 'react-native';


function ProfileScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button onPress={() => navigation.navigate('Login')} title="Go back home" />
      </View>
    );
  }

export default ProfileScreen;