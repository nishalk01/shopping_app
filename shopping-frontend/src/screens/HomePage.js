import React from 'react';
import {View,Button,ScrollView} from 'react-native';
import AppBar from '../components/AppBar';
import ProductCard from '../components/ProductCard';

function HomeScreen({ navigation }) {
    return (
       <View style={{ flex:1 }}>
         <AppBar nav={navigation}/>
      {/* <View style={{  alignItems: 'center', justifyContent: 'center' }}>
        <Button
          onPress={() => {console.log("login redirect"); navigation.navigate('Login')}}
          title="Go to notifications"
        />
      
      </View> */}
      <ScrollView  >
      <ProductCard />
      <ProductCard/>
      <ProductCard />
      
      </ScrollView>
      </View>
     
    );
  }

export default HomeScreen;