import { useState } from "react"
import {Button, StyleSheet,Text,View,} from "react-native"

export default function App() {
    const [count,setCount]=useState(0)
    const increment = ()=>{
        setCount(count + 1)
    }
    const decrement = ()=>{
        setCount(count - 1)
    }
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{count}</Text>
            <View style={styles.buttonContainer}>
                <Button title="Increment" onPress={increment}/>
                <Button title="Decrement" onPress={decrement} />
            </View>
           
        </View>
    )
}



const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"white",
        alignItems:'center',
        justifyContent:"center"
    },
    text:{
        fontSize:50,
        marginBottom:10
    },
    buttonContainer:{
        flexDirection:"row",
        justifyContent:"space-around",
        width:"80%"
    }
})