import {Text,View,StyleSheet} from 'react-native'
import {Link} from 'expo-router'

export default function Notfound(){
    return(
        <View style={styles.container}>
            <Text style={styles.text}>wrong page</Text>
            <Link style={styles.button} href="/tabs">home</Link>
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:'#000',
    },
    text:{
        color:'#fff'
    },
    button:{
        color:'#fff'
    }
})