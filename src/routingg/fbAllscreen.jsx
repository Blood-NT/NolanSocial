import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

const FbAllScreen = ({ navigation }) => {
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
        {renderButton(1, 'fbCmt', 'fbCmt', require('../../assets/icon.png'))}
        {renderButton(2, 'fbFollow', 'fbFollow', require('../../assets/icon.png'))}
        {renderButton(3, 'fbLike', 'fbLike', require('../../assets/icon.png'))}
      </View>

      <View style={styles.buttonRow}>
        {renderButton(4, 'fbLikePage', 'fbLikePage', require('../../assets/icon.png'))}
        {renderButton(5, 'fbLikeTym', 'fbLikeTym', require('../../assets/icon.png'))}
        {renderButton(6, 'fbLikeTymCMT', 'fbLikeTymCMT', require('../../assets/icon.png'))}
      </View>

      <View style={styles.buttonRow}>
        {renderButton(7, 'fbLikeVip', 'fbLikeVip', require('../../assets/icon.png'))}
        {renderButton(8, 'fbShareFake', 'fbShareFake', require('../../assets/icon.png'))}
        {renderButton(9, 'fbShareReal', 'fbShareReal', require('../../assets/icon.png'))}
      </View>

      <View style={styles.buttonRow}>
        {renderButton(10, 'fbViewStory', 'fbViewStory', require('../../assets/icon.png'))}
        {renderButton(11, 'Screen11', 'Button 11', require('../../assets/icon.png'))}
        {renderButton(12, 'Screen12', 'Button 12', require('../../assets/icon.png'))}
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

export default FbAllScreen;
