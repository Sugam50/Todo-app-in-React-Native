import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { AntDesign } from '@expo/vector-icons';

export default function Card({ t,items,setItems }) {
    function onDeleteHandler(){
        setItems(items.filter((i,v)=>i.key!==t.key))
    }
    return (
        <View style={styles.cardmain}>
            <Text>{t.title}</Text>
            <TouchableOpacity onPress={onDeleteHandler}>
                <AntDesign name="delete" size={24} color="black" />
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    cardmain: {
        borderColor: '#ccc',
        borderWidth: 2,
        padding: 20,
        backgroundColor: '#fff',
        margin: 2,
        borderRadius:10,
        justifyContent: "space-between",
        display: 'flex',
        flexDirection: 'row'
    },
})

