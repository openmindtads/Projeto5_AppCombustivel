import * as  React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import AutonomyScreen from '../screens/AutonomyScreen';
import Results from '../screens/Results';


const Stack = createNativeStackNavigator();

const Router = () => {
    return (
        <SafeAreaProvider>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen
                        name="Home"
                        component={Home}
                        options={{
                            headerShown: false
                        }}
                    />

                    <Stack.Screen
                        name="AutonomyScreen"
                        component={AutonomyScreen}
                        options={{
                            headerShown: false
                        }}
                    />

                    <Stack.Screen
                        name="Results"
                        component={Results}
                        options={{
                            headerShown: false
                        }}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </SafeAreaProvider>
    )
}

export default Router;