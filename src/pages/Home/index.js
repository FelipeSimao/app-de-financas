import React from 'react';
import {  Text, View, StyleSheet, FlatList } from 'react-native';

import Header from '../../components/Header';
import Balance from '../../components/Balance';
import Moviments from '../../components/Moviments';
import Actions from '../../components/Actions';

const list = [
    {
        id: 1,
        label: 'Boleto conta luz',
        velue: '300.50',
        date: '17/09/2022',
        type: 0 // gastos
    },
    {
        id: 2,
        label: 'pix Cliente',
        velue: '300.50',
        date: '19/09/2022',
        type: 1 // gastos
    },
    {
        id: 3,
        label: 'salario',
        velue: '1200.00',
        date: '05/10/2022',
        type: 0 // gastos
    },
]

export default function Home() {
  return (
    <View style={styles.container} >
        <Header name="Felipe"/>

        <Balance allBalance="10.000.000" allExpenses="-50.000"/>

        <Actions/>

        <Text style={styles.title} >Histórico</Text>

        <FlatList 
            style={styles.list}
            data={list}
            keyExtractor={(item)=> String(item.id)}
            showsVerticalScrollIndicator={false}
            renderItem={({item})=> <Moviments data={item} /> }

        />

    </View>
  );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'FAFAFA'
    },
    title:{
        fontSize: 18,
        fontWeight: 'bold',
        margin: 14,
    },
    list:{
        marginStart: 14,
        marginEnd: 14,
    }
})