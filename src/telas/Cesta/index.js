import React from "react";
import { StyleSheet, SafeAreaView, View } from "react-native";

import Topo from '../componentes/Topo'
import Detalhes from "../componentes/Detalhes";

export default function Cesta({ topo, detalhes }) {

    return <>
        <SafeAreaView>
            <Topo {...topo}/>
            <View style={ estilos.cesta }>
                <Detalhes {...detalhes}/> 
            </View>
        </SafeAreaView>
    </>
}

const estilos = StyleSheet.create({

    cesta: {
        paddingVertical: 8,
        paddingHorizontal: 16,
    },

});