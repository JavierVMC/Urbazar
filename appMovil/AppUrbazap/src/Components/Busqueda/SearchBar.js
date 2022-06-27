import React, { useState, useEffect } from 'react';
import NavBar from '../navBar/NavigationBar';
import { View, Text, FlatList, Image } from 'react-native';
import { NativeBaseProvider } from "native-base";
import CategoriesBar from '../navBar/CategoriesBar';
import data from '../../../enviroment';
import styles from "../Main/styles";



function _renderItem({ item, index }) {
    return (
        <View style={styles.boxProduct}>

            <Image source={{ uri: item.source }} style={{
                height: 150, width: 150
            }}
            />
            <View style={{ marginTop: 1, borderWidth: 0.5, borderColor: "#e6e6e6" }} />
            <View style={{ marginLeft: 10 }}>
                <Text style={{ fontSize: 20 }}>{item.nombre}</Text>
                <Text> ${item.precio}</Text>
            </View>
        </View>

    )
}



const SearchBar = (props) => {


    const [filtro, setFiltro] = useState([]);
    const [master, setMaster] = useState([]);
    const [activeIndex, setActiveIndex] = useState(0);
    const { data1 } = props.route.params;

    const [data2, settext1] = useState('');

    useEffect(() => {
        fetchPosts();



    }, [])


    /*
        const searchfilter = (text) => {
            if (text) {
                const newData = master.filter((item) => {
                    const itemData = item.nombre ?
                        item.nombre.toUpperCase()
                        : ''.toUpperCase();
    
                    const textData = text.toUpperCase();
                    return itemData.indexOf(textData) > -1;
                });
                setFiltro(newData);
                //  setSearch(text);
    
            } else {
                setFiltro(master);
                // setSearch(text);
    
            }
            return filtro;
        }*/

    const fetchPosts = () => {
        //const data1 = 'iph';
        settext1(data1);
        const apiURL = `http://${data.number}/productos/nombre/${data1}`;


        fetch(apiURL)
            .then((response) => response.json())
            .then((responseJson) => {
                setFiltro(responseJson);
                setMaster(responseJson);
                /*if (data1) {
                    const newData = master.filter((item) => {

                        const itemData = item.nombre ?
                            item.nombre.toUpperCase()
                            : ''.toUpperCase();

                        const textData = data1.toUpperCase();
                        return itemData.indexOf(textData) > -1;
                    });
                    setFiltro(newData);
                    //  setSearch(text1);

                } else {
                    setFiltro(master);
                    //setSearch(text1);

                }*/

            }).catch((error) => {
                console.error(error);
            })


    }

    return (
        <>
            <NativeBaseProvider>

                <NavBar navigation={props.navigation} />
                <CategoriesBar navigation={props.navigation}/>
                <View style={{ flex: 19 }}>

                    {/*Banner principal */}

                    <View>




                        <FlatList
                            data={filtro}
                            keyExtractor={(item, index) => index.toString()}
                            renderItem={_renderItem}

                        />

                    </View>






                </View>



            </NativeBaseProvider>
        </>
    );
}

export default SearchBar;
