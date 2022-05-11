import React, {useState} from 'react'
import {
    SafeAreaView,
    View,
    Text,
    TouchableOpacity
} from 'react-native'
import Style3 from '../styles/Style3';
import Icon from 'react-native-vector-icons/FontAwesome';


const Results = ({route, navigation}) => {
    const total = route.params?.total.toFixed(2)
    const goBack = () => {
        navigation.goBack();
    };

    return(

        <SafeAreaView style={Style3.container}>
            <View style={Style3.viewBack}>
            <TouchableOpacity onPress={() => goBack()}>
            <Icon name="arrow-left" size={30} color="black" style={Style3.iconBack}/>
            </TouchableOpacity>
            <Text style={Style3.title}>Gasto Calculado!</Text>
            </View>
        
            <Text style={Style3.text}> • Preço estimado:</Text>
            <Icon name="caret-down" size ={60} color= "black"/>
            <Icon name="money" size ={40} color= "black"/>
            <Text style={Style3.results}>R$ {total}</Text>

            <TouchableOpacity style={Style3.buttonCalc}
                onPress={goBack}> 
                <Text style={Style3.textButton}>Voltar</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}


export default Results;