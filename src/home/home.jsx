import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Mualike } from '../api/userAPI';
import { notifiContext } from '../context/notifiContext';
import { userContext } from '../context/userContext';
const HomeScreen = () => {
  const { setNotifi } = React.useContext(notifiContext);
  const { user, setUser } = React.useContext(userContext);
  const navigation = useNavigation();

  const handleNapTienPress = async() => {
    // Điều hướng sang màn hình Nạp Tiền
    const res = await Mualike();
    console.log("naptien",res);
    // navigation.navigate('NapTienScreen');
  };

  const handleLichSuGiaoDichPress = () => {
    // Điều hướng sang màn hình Lịch Sử Giao Dịch
    navigation.navigate('LikeTymCMTScreen');
  };

  return (
    <View style={styles.container}>
      {/* Navbar */}
      <View style={styles.navbar}>
        {/* Các mục menu đa cấp */}
        {/* Ví dụ: */}
        <TouchableOpacity style={styles.menuItem}>
          <Text>Menu 1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Text>Menu 2</Text>
        </TouchableOpacity>
        {/* Thêm các mục menu khác tương tự ở đây */}
      </View>

      {/* Ô chính phía trên */}
      <View style={styles.topContainer}>
        {/* Ô bên trái hiển thị số tiền */}
        <TouchableOpacity
          style={styles.moneyContainer}
          // onPress={handleLichSuGiaoDichPress}
        >
          <Text style={styles.moneyText}>{user.money}</Text>
          {/* Hiển thị số tiền ở đây */}
        </TouchableOpacity>

        {/* Ô bên phải hiển thị nạp tiền */}
        <TouchableOpacity
          style={styles.napTienContainer}
          onPress={handleNapTienPress}
        >
          <Text style={styles.napTienText}>Nạp Tiền</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff', // Màu nền của màn hình
  },
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  menuItem: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: '#eee', // Màu nền của mục menu
    borderRadius: 8,
  },
  topContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: '#fff', // Màu nền của ô chính trên
    elevation: 4, // Hiệu ứng nổi bật
  },
  moneyContainer: {
    flex: 1,
    padding: 16,
    alignItems: 'center',
    borderRightWidth: 1,
    borderColor: '#ccc', // Màu viền
  },
  moneyText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  napTienContainer: {
    flex: 1,
    padding: 16,
    alignItems: 'center',
    backgroundColor:"black"
  },
  napTienText: {
    fontSize: 18,
    color: 'white', // Màu chữ trắng cho nút Nạp Tiền
    fontWeight: 'bold',
  },
});

export default HomeScreen;
