import React from 'react';
import { Image, StyleSheet, Dimensions } from 'react-native';

import Texto from '../../componentes/Texto';
import topo from '../../../assets/topo.png';

const screenWidht = Dimensions.get('screen').width;
const imageHeight = 768
const imageWidth = 578

export default function Topo({ titulo }) {
    return <>
        <Image source={topo} style={estilos.topo} />
        <Texto style={estilos.titulo}>{ titulo }</Texto>
    </>

}

const estilos = StyleSheet.create({
    topo: {
        width: "100%",
        height: imageWidth / imageHeight * screenWidht,
        fontFamily: "Montserrat"
    },
    titulo: {
        width: "100%",
        position: "absolute",
        textAlign: "center",
        fontSize: 16,
        lineHeight: 26,
        color: "white",
        fontWeight: "bold",
        padding: 16
    },
})