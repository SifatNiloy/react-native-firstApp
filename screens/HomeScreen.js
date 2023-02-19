import { StyleSheet, Text, View, st, Dimensions, Pressable } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import { ScreenType } from '../constance/constance'
const HomeScreen = ({onExit}) => {
    return (
        <View style={styles.container}>
            <Pressable onPress={onExit(ScreenType.addNote)}>
                <View style={styles.itemButton}>
                    <Text style={styles.title}>Add new note</Text>
                    <Icon style={styles.icon} name='arrow-forward-outline'></Icon>
                </View>
            </Pressable>
            <Pressable onPress={onExit(ScreenType.allNotes)}>
                <View style={styles.itemButton}>
                    <Text style={styles.title}>View All Notes</Text>
                    <Icon style={styles.icon} name='arrow-forward-outline'></Icon>
                </View>
            </Pressable>
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        marginTop: 40,
    },
    itemButton:{
        width: Dimensions.get("window").width -100 ,
        height: "50%",
        marginVertical: 30,
        backgroundColor: "#f5f5f5",
        justifyContent: 'center',
        alignItems:'center',
        elevation: 10,
        shadowOffset:{width:2, height:10},
        shadowColor: "black",
        shadowOpacity: 0.3,
        shadowRadius: 2,
    },
    title: {
        fontSize:35,
        fontWeight: "bold",
        textAlign: 'center',

    },
    icon:{
        fontSize: 25,
        paddingTop: 20,
    }
})