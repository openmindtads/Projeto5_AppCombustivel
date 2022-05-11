import {StyleSheet} from 'react-native'

export default StyleSheet.create({

    container: {
        flexGrow: 1,
        backgroundColor: '#f7da8b',
        alignItems: 'center'
    },

    viewBack: {
        flexDirection: "row",
        marginRight: 40
    },

    iconBack: {
        marginTop: 42
    },

    title: {
        padding: 35,
        lineHeight: 30,
        fontSize: 25,
        color: '#000',
        textAlign: 'center',
        marginTop: 10
    },

    line: {
        borderBottomColor: '#000',
        borderBottomWidth: 1,
        width: 360,
    },

    text: {
        lineHeight: 30,
        fontSize: 25,
        color: '#000',
        textAlign: 'center',
        marginTop: 140

    },

    results: {
        color: '#000',
        fontSize: 40,
        marginTop: 30,
        marginBottom: 10,
    },

    buttonCalc: {
        alignItems: 'center',
        backgroundColor: '#ebebeb',
        alignSelf: 'center',
        paddingTop: 25,
        height: 50,
        width: 415,
        borderWidth: 1,
        borderColor: '#000',
        marginTop: 135,
        borderTopEndRadius: 25,
        borderTopStartRadius: 25,
    },

    textButton: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000',
        marginTop: -12
    },
})