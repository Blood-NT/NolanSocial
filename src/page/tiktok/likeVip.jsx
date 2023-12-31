import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { postTiktokLikeVip } from '../../api/tiktokAPI';

const TiktokLikeVipScreen = () => {
    const [memoryCode, setMemoryCode] = useState('');
    const [path, setPath] = useState('');
    const [quantity, setQuantity] = useState('');
    const [selectedServer, setSelectedServer] = useState('sv1');
    const [selectedLike, setSelectedLike] = useState('');
    const [selectedDay, setSelectedDay] = useState('7');

    const calculateTotal = () => {
        const pricePerSpeed = selectedServer === 'sv1' ? 10 : 20;
        const parsedQuantity = parseFloat(quantity);

        if (isNaN(parsedQuantity) || parsedQuantity <= 0) {
            return '0'; // Nếu quantity không hợp lệ, trả về '0.00'
        }

        const total = parsedQuantity * pricePerSpeed;
        return total.toFixed(2);
    };

    const handleBuyButtonPress = async() => {
        const res = await postTiktokLikeVip(memoryCode, path, quantity, selectedDay, selectedLike, selectedServer);
        console.log(res);
    }

    return (
        <View style={styles.container}>
            <View style={styles.resultContainer}>
                <Text style={styles.resultLabel}>Tăng like tym tiktok theo lịch</Text>

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
            <Text style={styles.label}>Số bài viết mỗi ngày:</Text>
            <TextInput
                style={styles.input}
                onChangeText={text => setQuantity(text)}
                value={quantity}
                keyboardType="numeric"
            />
            <Text style={styles.label}>Chọn số ngày:</Text>
            <Picker
                selectedValue={selectedDay}
                style={styles.picker}
                onValueChange={(itemValue) => setSelectedDay(itemValue)}
            >
                <Picker.Item label="7 Ngày" value="7" />
                <Picker.Item label="15 Ngày" value="15" />
                <Picker.Item label="30 Ngày" value="30" />
                <Picker.Item label="60 Ngày" value="60" />
                <Picker.Item label="90 Ngày" value="90" />

            </Picker>

            <Text style={styles.label}>Số lượng tym:</Text>
            <TextInput
                style={styles.input}
                onChangeText={text => setSelectedLike(text)}
                value={selectedLike}
                keyboardType="numeric"
            />


            <Text style={styles.label}>Server:</Text>
            <Picker
                selectedValue={selectedServer}
                style={styles.picker}
                onValueChange={(itemValue, itemIndex) => setSelectedServer(itemValue)}
            >
                <Picker.Item label="server 1" value="sv1" />
                <Picker.Item label="server 2" value="sv2" />
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

export default TiktokLikeVipScreen;
