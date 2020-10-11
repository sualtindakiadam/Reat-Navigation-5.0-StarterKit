var React = require('react-native');

var {
  StyleSheet,
} = React;




module.exports = StyleSheet.create({
 container:{
     flex:1,
     justifyContent:'center',
     alignItems:'center',
 },
 buttonContainer:{
    width:300,
    height:50,
    backgroundColor:'red',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:20,
    marginVertical:10,
  },
  buttonText:{
      fontSize:20,
      fontWeight:'500',
      color:'white'
  }



});