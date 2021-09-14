import React from "react";
import {  NativeBaseProvider, Text } from "native-base";
import { View, TouchableOpacity } from 'react-native'
import NavBar from "../navBar/NavigationBar";
import { SafeAreaView } from 'react-navigation';
import CategoriesBar from "../navBar/CategoriesBar";
import Banner from "./Banner"
import { useUsuario } from '../../Context/usuarioContext';
function HomeScreen({navigation}) {

  

    return (
        <NativeBaseProvider>
        <NavBar navigation={navigation}/>


        <CategoriesBar navigation={navigation}/>
        <Banner navigation={navigation}/>
        </NativeBaseProvider>
    );
  }
export default HomeScreen;