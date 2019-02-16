import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, TextInput, TouchableOpacity, Dimensions } from 'react-native'
import insta from '../Assets/Images/insta.png'
import Hr from "react-native-hr-component";
import facebook from '../Assets/Images/facebook.png';

export default class Instagram extends Component {
  render() {
    return (
      <View style={style.container}>
      <TouchableOpacity><Text style={{marginTop:10}}>English (United States) <Text style={{fontSize:13, fontFamily:"monospace"}}>v</Text></Text></TouchableOpacity>
      <View style={{alignItems:"center"}}>
      <Image source={insta} style={style.insta}></Image>
      </View>
      <View style={style.txtView}>
          <TextInput style={style.txtInput} placeholder="Phone number, email or username" placeholderTextColor="#A9A9A9"></TextInput>
          <TextInput style={style.txtInput} placeholder="Phone number, email or username" placeholderTextColor="#A9A9A9"></TextInput>
      </View>
      <View style={{width:"80%", alignItems:"flex-end"}}>
      <TouchableOpacity>
        <Text style={{fontSize:13, marginLeft:30, fontWeight:"bold"}}>Forgot password?</Text>
      </TouchableOpacity>
      </View>
      <View style={style.loginBtnView}>
        <TouchableOpacity style={style.loginBtn}>
          <Text style={{color:"white", fontWeight:"bold"}}>Log In</Text>
        </TouchableOpacity>
        <Hr text="OR" lineColor="#C0C0C0" width={1}/>
        <TouchableOpacity style={style.loginBtn}>
          <Text style={{color:"white", fontWeight:"bold"}}><Image source={facebook} style={{borderRadius:5}}/> &nbsp;Log In with facebook</Text>
        </TouchableOpacity>
      </View>
      <View style={style.bottomView}>
        <Text style={{paddingTop:"3%", fontSize:SCREEN_WIDTH * 0.03}}>Don't have an account? <Text style={{fontWeight:"bold", color:"black"}}>Sign up.</Text></Text>
      </View>
      </View>
    )
  }
}

const style = StyleSheet.create({
   container:{
    flex:1,
    alignItems:"center",
    backgroundColor:"white",
    width:"100%",
   },
   insta:{
    width:220, 
    height:50,
    marginTop:30
   },
   txtView:{marginTop:50, 
    width:"80%", 
    alignItems:"center"
  },
   txtInput:{
       borderColor:"black",
       borderWidth:1,
       width:"100%",
       borderRadius:5,
       backgroundColor:"rgba(220,220,220,0.3)",
       marginTop:10
   },
   loginBtnView:{
    width:"80%", 
    alignItems:"center",
    flex:0.8
   },
   loginBtn:{
     backgroundColor:'rgb(56,151,241)',
     width:"100%",
     height:40,
     alignItems:"center",
     justifyContent:"center",
     borderRadius:5,
     marginTop:10
   },
   bottomView:{ 
     marginTop:"20%", 
     flex:0.2, borderTopWidth:1, 
     borderColor:"#C0C0C0", 
     width:"100%", 
     justifyContent:"flex-start", 
     alignItems:"center" 
  }
}
)

const {
  width: SCREEN_WIDTH,
  height: SCREEN_HEIGHT,
} = Dimensions.get('window');