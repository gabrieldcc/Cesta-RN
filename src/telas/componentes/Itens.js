import react from "react";
import { Image, View } from "react-native";

import Texto from "../../componentes/Texto";

export default function Itens({ titulo, lista }) {
    return <>
        <Texto>{titulo}</Texto>
        {lista.map(({ nome, imagem }) => {
            return <View key={nome}>
                <Texto>{nome}</Texto>
                <Image source={imagem} />
            </View>
        })}
    </>
}