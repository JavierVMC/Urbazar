import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Menu from './src/Drawers/DrawerMenu';
import Main from './src/Components/Main/Main';
import DetailProduct from './src/Components/Producto/DetailProduct';
import LoginComponent from './src/Components/Login/Login';
import { UsuarioProvider, useUsuario } from './src/Context/usuarioContext';
import RegistroComponent from './src/Components/Registro/Registro';
import Carrito from './src/Components/Carrito/Carrito';
import VentanaFiltro from './src/Components/Filtro/Ventanafiltro';
import SearchBar from './src/Components/Busqueda/SearchBar';
import AddProduct from './src/Components/Perfil/AddProduct';

export default () => (
  <UsuarioProvider>
    <App></App>
  </UsuarioProvider>
);

function App() {
  const { usuario } = useUsuario();
  const Drawer = createDrawerNavigator();

  return (
    <>
      {usuario ? (
        <NavigationContainer>
          <Drawer.Navigator drawerContent={(props) => <Menu {...props} />}>
            <Drawer.Screen name="Home" component={Main} />
            <Drawer.Screen name="Perfil" component={AddProduct} />
            <Drawer.Screen name="Carrito" component={Carrito} />
            <Drawer.Screen name="Filtro" component={VentanaFiltro} />
            <Drawer.Screen name="SearchBar" component={SearchBar} />
            <Drawer.Screen name="DetailProduct" component={DetailProduct} />
          </Drawer.Navigator>
        </NavigationContainer>
      ) : (
        <NavigationContainer>
          <Drawer.Navigator>
            <Drawer.Screen name="Login" component={LoginComponent} />
            <Drawer.Screen name="Registro" component={RegistroComponent} />
          </Drawer.Navigator>
        </NavigationContainer>
      )}
    </>
  );
}

StyleSheet.create({
  container: {
    backgroundColor: '#E8E8F0',
  },
});
