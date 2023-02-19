import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const BackButton = () => {
    return (
        <View style={styles.container}>
            <View style={styles.Button}>
                <Button title='< Back' />
            </View>
        </View>
    )
}

export default BackButton

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        
    },
    button:{
        margin: 10,
    }
})




