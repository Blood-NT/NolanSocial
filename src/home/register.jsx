import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as SecureStore from 'expo-secure-store';
import { Register } from '../api/userAPI';

export default function RegisterScreen() {
  const navigation = useNavigation();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setemail] = useState('');
  const handleREgister = async () => {
    // kiểm tra các ô input
    if (!username || !password || !email) {
      // Nếu người dùng để trống một trong các ô input, focus vào ô trống
      if (!username) {
        setUsername('');
      }
      if (!password) {
        setPassword('');
      }
      if (!email) {
        setemail('');
      }
      return;
    }
    const res = await Register(username, password, email);
    console.log("click register done", res);
    // Xử lý đăng nhập ở đây (kiểm tra tên người dùng và mật khẩu, gọi API, vv.)
    // Nếu đăng nhập thành công, lưu trạng thái đăng nhập
    await SecureStore.setItemAsync('isLoggedIn', 'true');

    // Chuyển đến trang Home
    navigation.navigate('HomeScreen');
  };

  return (
    <View>
      <Text>Đăng kys</Text>
      <TextInput
        placeholder="Tên đăng nhập"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setemail}
      />
      <TextInput
        placeholder="Mật khẩu"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button
        title="Đăng ký"
        onPress={handleREgister}
      />
      <Button
        title="Quên mật khẩu"
        onPress={() => navigation.navigate('ForgotPassword')}
      />
    </View>
  );
}
