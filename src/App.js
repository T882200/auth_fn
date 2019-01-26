import React, { Component } from 'react'
import firebase from 'firebase';
import { View } from 'react-native';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

// firebase setup

/* <script src="https://www.gstatic.com/firebasejs/5.8.1/firebase.js"></script>
<script>
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCwuUAlNk4GZRmyVWemxm1C0CvSbXRDUFc",
    authDomain: "loginapp-4c855.firebaseapp.com",
    databaseURL: "https://loginapp-4c855.firebaseio.com",
    projectId: "loginapp-4c855",
    storageBucket: "loginapp-4c855.appspot.com",
    messagingSenderId: "973637920890"
  };
  firebase.initializeApp(config);        
</script> */


class App extends Component {
  
  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyCwuUAlNk4GZRmyVWemxm1C0CvSbXRDUFc",
      authDomain: "loginapp-4c855.firebaseapp.com",
      databaseURL: "https://loginapp-4c855.firebaseio.com",
      projectId: "loginapp-4c855",
      storageBucket: "loginapp-4c855.appspot.com",
      messagingSenderId: "973637920890"
    });
  }
  
  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <LoginForm />
      </View>
    )
  }
}

export default App;
