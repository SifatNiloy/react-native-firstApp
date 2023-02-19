import { StyleSheet, Text, View, st, Dimensions, Pressable } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <Pressable>
                <View style={styles.itemButton}>
                    <Text>Add new note</Text>
                    <Icon name='arrow-forward-outline'></Icon>
                </View>
            </Pressable>
            <Pressable>
                <View style={styles.itemButton}>
                    <Text>View All Notes</Text>
                    <Icon name='arrow-forward-outline'></Icon>
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
    }
})