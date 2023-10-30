import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { postFBLike } from '../../api/facebookAPI';

const FBLikeScreen = () => {
    const [memoryCode, setMemoryCode] = useState('');
    const [path, setPath] = useState('');
    const [quantity, setQuantity] = useState('');
    const [selectedAlbum, setSelectedAlbum] = useState('');
    const [selectedSpeed, setSelectedSpeed] = useState('');
    const [price, setprice] = useState(10);

    const calculateTotal = () => {
        const pricePerSpeed = selectedSpeed === 'Thấp' ? 10 : 20;
        // const priceAlbum = selectedSpeed === 'Album1' ? 10 : 20;

        const parsedQuantity = parseFloat(quantity);

        if (isNaN(parsedQuantity) || parsedQuantity <= 0) {
            return '0';
        }

        const total = parsedQuantity * pricePerSpeed * price;
        return total.toFixed(2);
    };
    const handleBuyButtonPress = async () => {
        // Đếm số dòng trong multiLineText
        const res = await postFBLike(memoryCode,path,quantity,selectedAlbum,selectedSpeed);
        console.log(res);
    };


    return (
        <View style={styles.container}>
            <View style={styles.resultContainer}>
                <Text style={styles.resultLabel}>Tăng like bài viết</Text>

            </View>

            <Text style={styles.label}>Mã ghi nhớ:</Text>
            <TextInput
                style={styles.input}
                onChangeText={text => setMemoryCode(text)}
                value={memoryCode}
            />
            <Text style={styles.label}>Đường dẫn:</Text>
            <TextInput
                style={styles.input}
                onChangeText={text => setPath(text)}
                value={path}
            />
            <Text style={styles.label}>Số lượng:</Text>
            <TextInput
                style={styles.input}
                onChangeText={text => setQuantity(text)}
                value={quantity}
                keyboardType="numeric"
            />
            <Text style={styles.label}>Thể loại:</Text>
            <Picker
                selectedValue={selectedAlbum}
                style={styles.picker}
                onValueChange={(itemValue, itemIndex) => setSelectedAlbum(itemValue)}
            >
                <Picker.Item label="bài viết, ảnh, video" value="Album1" />
                <Picker.Item label="album" value="Album2" />
                {/* Thêm các tùy chọn album khác tại đây */}
            </Picker>
            <Text style={styles.label}>Tốc độ:</Text>
            <Picker
                selectedValue={selectedSpeed}
                style={styles.picker}
                onValueChange={(itemValue, itemIndex) => setSelectedSpeed(itemValue)}
            >
                <Picker.Item label="Nhanh" value="Thấp" />
                <Picker.Item label="Chậm" value="Cao" />
            </Picker>
            <View style={styles.resultContainer}>
                <Text style={styles.resultLabel}>Thành tiền:</Text>
                <Text style={styles.resultText}>{calculateTotal()} đ</Text>
            </View>
            <TouchableOpacity style={styles.button} onPress={handleBuyButtonPress}>
                <Text style={styles.buttonText}>Mua</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.importantButton}>
                <Text style={styles.importantButtonText}>
                    Mở công khai bài viết và mở cho mọi người like và comment.
                </Text>
                <Text style={styles.importantButtonText}>
                    Nếu gặp lỗi vui lòng kiểm tra lại các cài đặt trên rồi mua thêm 20 like để chạy tiếp!
                </Text>
            </TouchableOpacity>
        </View>
    );
};



const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 8,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 4,
        paddingHorizontal: 8,
        fontSize: 16,
        marginTop: 8,
    },
    pickerContainer: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 4,
        marginTop: 8,
        overflow: 'hidden', // Loại bỏ viền ở ngoài
    },
    picker: {
        fontSize: 16,

        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 4,
        paddingHorizontal: 8,
        fontSize: 16,
        marginTop: 8,
        backgroundColor: '#f3f3f3', // Màu nền của Picker
        color: '#333', // Màu văn bản trong Picker
        height: 40, // Chiều cao của Picker

    },
    resultContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 16,
    },
    resultLabel: {
        fontSize: 18,
        fontWeight: 'bold',
        marginRight: 8,
    },
    resultText: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    button: {
        backgroundColor: '#007bff',
        padding: 12,
        borderRadius: 4,
        alignItems: 'center',
        marginTop: 16,
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    importantButton: {
        backgroundColor: '#ff5733', // Màu nền mới
        padding: 12,
        borderRadius: 4,
        alignItems: 'center',
        marginTop: 16,
    },
    importantButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default FBLikeScreen;
