import React, {useState} from "react";
import {
    View,
    Text,
    TouchableOpacity,
    SafeAreaView,
    TextInput,
} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import Style1 from "../styles/Style1";


const Home = ({route, navigation}) => {

    const [travel, setTravel] = useState();
    
    return(
        <SafeAreaView style={Style1.container}>

             {/* -------------------------------------------------- */}    

            <Text style={Style1.title}>
                Seja bem-vindo ao {'\n'} Fuel Economy!
            </Text>

             {/* -------------------------------------------------- */}

            <Icon name="dashboard" size ={60} color= "black"/>

             {/* -------------------------------------------------- */}

            <Text style={Style1.description}>
                • Calcule seu gasto de combustível!
                {'\n'}
                • Te ajuda antes da viagem!
                {'\n'}
                • Facíl de utilizar!
            </Text>

             {/* -------------------------------------------------- */}
            <View style={{marginTop: 190}}>
                <Icon name="caret-down" size ={70} color= "black" sstyle={Style1.icon2}/>
            </View>
             {/* -------------------------------------------------- */}
            <TouchableOpacity
                style={Style1.goButton}
                onPress={() => navigation.navigate('AutonomyScreen')}>
                <Text style={Style1.textGoButton}>Vamos lá!</Text>
            </TouchableOpacity>
            
        </SafeAreaView>
    );
};

export default Home;