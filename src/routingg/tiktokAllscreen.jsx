import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

const TiktokAllScreen = ({ navigation }) => {
  const handleButtonClick = (screenName) => {
    navigation.navigate(screenName);
  };

  const renderButton = (buttonNumber, screenName, buttonTitle, backgroundImagee) => (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: "black" }]}
      onPress={() => handleButtonClick(screenName)}
      key={buttonNumber}
    >
      {/* <Image source={backgroundImagee}  style={styles.img}/> */}

      {/* Dòng tên nút xuống dưới */}
      <Text style={styles.buttonSubtitle}>{buttonTitle}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Title</Text>

      <View style={styles.buttonRow}>
        {renderButton(1, 'tiktokCmt', 'tiktokCmt', require('../../assets/icon.png'))}
        {renderButton(2, 'tiktokFollow', 'tiktokFollow', require('../../assets/icon.png'))}
        {renderButton(3, 'tiktokLikeVip', 'tiktokLikeVip', require('../../assets/icon.png'))}
      </View>

      <View style={styles.buttonRow}>
        {renderButton(4, 'tiktokShare', 'tiktokShare', require('../../assets/icon.png'))}
        {renderButton(5, 'tiktokShareLive', 'tiktokShareLive', require('../../assets/icon.png'))}
        {renderButton(6, 'tiktokTym', 'tiktokTym', require('../../assets/icon.png'))}
      </View>

      <View style={styles.buttonRow}>
        {renderButton(7, 'tiktokView', 'tiktokView', require('../../assets/icon.png'))}
       </View>

      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  buttonRow: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  button: {
    flex: 1,
    aspectRatio: 1, // Hình vuông
    justifyContent: 'flex-end', // Hiệu ứng dòng tên xuống dưới
    alignItems: 'center',
    margin: 8,
    borderRadius: 8,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
  buttonSubtitle: {
    color: 'white',
    fontSize: 12,
    marginTop: 4,
  },
});

export default TiktokAllScreen;
