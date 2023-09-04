import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as SecureStore from 'expo-secure-store';

export default function RegisterScreen() {
  const navigation = useNavigation();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    // Xử lý đăng nhập ở đây (kiểm tra tên người dùng và mật khẩu, gọi API, vv.)
    // Nếu đăng nhập thành công, lưu trạng thái đăng nhập
    await SecureStore.setItemAsync('isLoggedIn', 'true');
    
    // Chuyển đến trang Home
    navigation.navigate('Home');
  };

  return (
    <View>
      <Text>Đăng nhập</Text>
      <TextInput
        placeholder="Tên đăng nhập"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        placeholder="Mật khẩu"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Đăng nhập" onPress={handleLogin} />
      <Button
        title="Đăng ký"
        onPress={() => navigation.navigate('Register')}
      />
      <Button
        title="Quên mật khẩu"
        onPress={() => navigation.navigate('ForgotPassword')}
      />
    </View>
  );
}
