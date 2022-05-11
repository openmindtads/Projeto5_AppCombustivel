import React, {useState} from "react";
import {
    Text,
    SafeAreaView,
    TextInput,
    TouchableOpacity,
    View,
    ToastAndroid,
    ScrollView,
} from "react-native";
import Style2 from "../styles/Style2";
import Icon from 'react-native-vector-icons/FontAwesome';

const AutonomyScreen = ({route, navigation}) => {

    const [fuel, setFuel] = useState()
    const [distance, setDistance] = useState()
    const [autonomy, setAutonomy] = useState()

    const calculaAutonomia = () => {

        if(fuel != null & distance != null & autonomy != null){
            if(fuel > 0 & distance >= 0 & autonomy >= 0){
            const total = (fuel * distance) / autonomy;
            navigation.navigate('Results', {total});

            }else {
                ToastAndroid.show('Por favor, insira valores maiores que 0!',
                ToastAndroid.SHORT);
            }
        }else{
            ToastAndroid.show('Por favor, preencha os campos!',
            ToastAndroid.SHORT); 
        }
    };

    const goBack = () => {
        navigation.goBack();
    };

    return(
        <SafeAreaView style={Style2.container}>
            
            <View style={Style2.viewBack}>
            <TouchableOpacity onPress={() => goBack()}>
            <Icon name="arrow-left" size={30} color="black" style={Style2.iconBack}/>
            </TouchableOpacity>
            <Text style={Style2.title}>Calcule seu gasto!</Text>
            </View>
            <Icon name="car" size ={60} color= "black"/>

            <Text style={Style2.hint}>Valor do combustível</Text>
            <TextInput 
            style={Style2.inputText1}
            placeholder="ex: 0.00 - R$"
            keyboardType="numeric"
            maxLength={10}
            value={fuel}
            onChangeText={text => setFuel(text)}/>

            {/* -------------------------------------------------- */}

            <Text style={Style2.hint2}>Distância</Text>
            <TextInput 
            style={Style2.inputText2}
            placeholder="ex: 0.00 - km"
            keyboardType="numeric"
            maxLength={10}
            value={distance}
            onChangeText={text => setDistance(text)}/>

            {/* -------------------------------------------------- */}

            <Text style={Style2.hint3}>Autonomia</Text>
            <TextInput 
            style={Style2.inputText3}
            placeholder="ex: 0.00 - km"
            keyboardType="numeric"
            maxLength={10}
            value={autonomy}
            onChangeText={text => setAutonomy(text)}/>

            {/* -------------------------------------------------- */}

            <TouchableOpacity style={Style2.buttonCalc}
            onPress={calculaAutonomia}> 
                <Text style={Style2.textButton}>Calcular</Text>
            </TouchableOpacity>
        </SafeAreaView>
    ); 
};

export default AutonomyScreen;