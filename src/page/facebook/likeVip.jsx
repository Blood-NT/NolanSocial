import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { postFBLikeVip } from '../../api/facebookAPI';
const FBLikeVipScreen = () => {
    const [memoryCode, setMemoryCode] = useState('');
    const [path, setPath] = useState('');
    const [quantity, setQuantity] = useState('');
    const [selectServer, setSelectServer] = useState('1');
    const [selectquantify, setSelectquantify] = useState('50');
    const [selectday, setSelecteday] = useState('7');

    const calculateTotal = () => {
        const pricePerSpeed = selectServer === 'q' ? 10 : 20;
        const parsedQuantity = parseFloat(quantity);

        if (isNaN(parsedQuantity) || parsedQuantity <= 0) {
            return '0'; // Nếu quantity không hợp lệ, trả về '0.00'
        }

        const total = parsedQuantity * pricePerSpeed;
        return total.toFixed(2);
    };

    const handleBuyButton = async () => {
        const res = await postFBLikeVip(memoryCode, path, quantity, selectedLike, selectedDay, selectedSpeed);
        console.log(res);
    }

    return (
        <View style={styles.container}>
            <View style={styles.resultContainer}>
                <Text style={styles.resultLabel}>Tăng like định kỳ </Text>

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
            <Text style={styles.label}>Chọn số lượng ngày:</Text>
            <Picker
                selectedValue={selectday}
                style={styles.picker}
                onValueChange={(itemValue) => setSelecteday(itemValue)}
            >
                <Picker.Item label="7 Ngày" value="7" />
                <Picker.Item label="15 Ngày" value="15" />
                <Picker.Item label="30 Ngày" value="30" />
                <Picker.Item label="60 Ngày" value="60" />
                <Picker.Item label="90 Ngày" value="90" />
                <Picker.Item label="120 Ngày" value="120" />

            </Picker>

            <Text style={styles.label}>Chọn số lượng like mỗi bài:</Text>
            <Picker
                selectedValue={selectquantify}
                style={styles.picker}
                onValueChange={(itemValue) => setSelectquantify(itemValue)}
            >
                <Picker.Item label="50 like" value="50" />
                <Picker.Item label="100 like" value="100" />
                <Picker.Item label="150 like" value="150" />
                <Picker.Item label="200 like" value="200" />
                <Picker.Item label="300 like" value="300" />
                <Picker.Item label="400 like" value="400" />
                <Picker.Item label="500 like" value="500" />
                <Picker.Item label="600 like" value="600" />
                <Picker.Item label="700 like" value="700" />
                <Picker.Item label="800 like" value="800" />
                <Picker.Item label="900 like" value="900" />
                <Picker.Item label="1000 like" value="1000" />
                <Picker.Item label="1500 like" value="1500" />
                <Picker.Item label="2000 like" value="2000" />
            </Picker>
            <Text style={styles.label}>Server:</Text>
            <Picker
                selectedValue={selectServer}
                style={styles.picker}
                onValueChange={(itemValue, itemIndex) => setSelectServer(itemValue)}
            >
                <Picker.Item label="server 1" value="1" />
                <Picker.Item label="server 2" value="2" />
            </Picker>
            <View style={styles.resultContainer}>
                <Text style={styles.resultLabel}>Thành tiền:</Text>
                <Text style={styles.resultText}>{calculateTotal()} đ</Text>
            </View>
            <TouchableOpacity style={styles.button} onPress={handleBuyButton}>
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

export default FBLikeVipScreen;
