import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Login = () => {
  return (
    <View style={styles.container}>
      <Text>Ini Halaman Login</Text>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F1EDE4',
  },
});
