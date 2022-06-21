import React  from "react";
import {View , StyleSheet ,Text, TouchableOpacity} from  'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

const Account = props =>{
    return(
        <TouchableOpacity style={[styles.container ,{backgroundColor:props.color}]}>
            <Icon style={styles.action} name={props.Icon}/>
            <Text style={styles.textTitle}>{props.title}</Text>

        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection :'row',
        width:120,
        height:45,
        marginHorizontal:10, 
        marginVertical:15,
        borderWidth:0,
    },
    action:{
        fontSize:15,
        color:'white',
        marginHorizontal:10,
        marginVertical:10
    },
    textTitle:{
        fontSize:15,
        fontWeight:'bold',
        color:'white',
        marginHorizontal:5,
        marginVertical:10
    }

});

export default Account;