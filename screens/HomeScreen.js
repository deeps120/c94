import React from 'react';
import { StyleSheet, Text, View ,TextInput,
    TouchableOpacity, Alert,Modal,KeyboardAvoidingView,
ScrollView,FlatList} from 'react-native';
import db from '../config';
import firebase from 'firebase';
import MyHeader from '../component/MyHeader';

export default class HomeScreen extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.title}>
                HomeScreen
                </Text>

                <TouchableOpacity style={styles.button}
        >
                    <Text>
                        homework and assingments
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button}
                >
                    <Text>
                        subjects
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button}
                >
                    <Text>
                        study streak
                    </Text>
                </TouchableOpacity>

               
                <TouchableOpacity style={styles.button}>
                    <Text>
                        analysis
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'cyan',
        alignItems: 'center',
        justifyContent: 'center',
      },
      title :{
          fontSize:65,
          fontWeight:'300',
          paddingBottom:30,
          color : 'black',
            textAlign:'center'
        },
        button:{
          width:300,
          height:50,
          justifyContent:'center',
          alignItems:'center',
          borderRadius:25,
          backgroundColor:"white",
          shadowColor: "#000",
          shadowOffset: {
             width: 0,
             height: 8,
            
          },
          margin:10,
          alignSelf:'center'
        }
    
    })
  