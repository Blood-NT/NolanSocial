import React, { useState, useContext, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as SecureStore from 'expo-secure-store';
import { notifiContext } from '../context/notifiContext';
import { login, loginByToken } from '../api/userAPI';
import { userContext } from '../context/userContext';
export default function LoginScreen() {
  const navigation = useNavigation();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { setNotifi } = useContext(notifiContext);
  const { user, setUser } = useContext(userContext);

  // useEffect(() => {
  //   const checkLogin = async () => {
  //     const res = await loginByToken();
  //     if (res.statusCode === "200") {
  //       setUser(res.data);
  //     if (isLoggedIn === 'true') {
  //       navigation.navigate('HomeScreen');
  //     }
  //   };
  // }
  //   checkLogin();
  // }
  // , []);


  const handleLogin = async () => {
    // Xử lý đăng nhập ở đây (kiểm tra tên người dùng và mật khẩu, gọi API, vv.)
    // Nếu đăng nhập thành công, lưu trạng thái đăng nhập
    if (!username) {
      setUsername('');
      setNotifi(['Tên đăng nhập không được để trống']);
      return
    }
    if (!password) {
      setPassword('');
      setNotifi(['Mật khẩu không được để trống']);
      return
    }

    const res = await login(username, password);
    if (res.statusCode === 201) {
      setNotifi(['Tên đăng nhập không tồn tại']);
      return
    }
    setNotifi(['Đăng nhập thành công']);
    setUser({
      uid: res.user.id,
      money: res.user.money,
    });
    await SecureStore.setItemAsync('uid', res.user.id);
    await SecureStore.setItemAsync('isLoggedIn', 'true');
    // Chuyển đến trang Home
    navigation.navigate('HomeScreen');
  };
  const handleLogout = async () => {
    await SecureStore.setItemAsync('isLoggedIn', 'false');
    navigation.navigate('Login');
  };

  return (
    <ImageBackground
      // source={require('../assets/background.jpg')}

      style={styles.container}
    >
      <View style={styles.formContainer}>
        <Text style={styles.title}>Đăng nhập</Text>
        <TextInput
          style={styles.input}
          placeholder="Tên đăng nhập"
          value={username}
          onChangeText={setUsername}
          autoCapitalize="none" // Không tự động viết hoa
        />
        <TextInput
          style={styles.input}
          placeholder="Mật khẩu"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          autoCapitalize="none" // Không tự động viết hoa
        />
        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginButtonText}>Đăng nhập</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.registerButton}
          onPress={() => navigation.navigate('Register')}
        >
          <Text style={styles.registerButtonText}>Đăng ký</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.forgotPasswordButton}
          onPress={() => navigation.navigate('ForgotPassword')}
        >
          <Text style={styles.forgotPasswordButtonText}>Quên mật khẩu</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  formContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    padding: 20,
    borderRadius: 10,
    width: '80%',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingLeft: 10,
  },
  loginButton: {
    backgroundColor: 'blue',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 10,
  },
  loginButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  registerButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 10,
  },
  registerButtonText: {
    color: 'blue',
    fontSize: 16,
    fontWeight: 'bold',
  },
  forgotPasswordButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 10,
  },
  forgotPasswordButtonText: {
    color: 'blue',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
