import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import {postFBCmt} from "../../api/facebookAPI";
const FBCmtScreen = () => {
    const [memoryCode, setMemoryCode] = useState('');
    const [path, setPath] = useState('');
    const [quantity, setQuantity] = useState('');
    const [multiLineText, setMultiLineText] = useState('');
    const [price, setprice] = useState(10);
    const calculateTotal = () => {
        const parsedQuantity = parseFloat(quantity);
        if (isNaN(parsedQuantity) || parsedQuantity <= 0) {
            return '0';
        }

        const total = parsedQuantity *price;
        return total.toFixed(2);
    };

    const checkText = ["đéo", "chó", "đm"]
    const handleBuyButtonPress = async() => {
        // Đếm số dòng trong multiLineText

        //multiLineText nếu có từ trong mảng checktext thì báo lỗi
        for (let i = 0; i < checkText.length; i++) {
            if (multiLineText.includes(checkText[i])) {
                alert("không được chứa từ ngữ nhạy cảm")
                return;
            }
        }
        //quantity phải lớn hơn 100
        if (quantity < 100) {
            alert("số lượng phải lớn hơn 100")
            return;
        }
        //quantity phải nhỏ hơn 10000
        if (quantity > 10000) {
            alert("số lượng phải nhỏ hơn 10000")
            return;
        }
        // path phải là link
        // if (path != /https/) {
        //     alert("đường dẫn phải là link")
        //     return;
        // }
        
        const res = await postFBCmt( path, quantity, multiLineText);

        const lineCount = (multiLineText.match(/\n/g) || []).length + 1;
        console.log(`Số dòng: ${lineCount}`);
        console.log(`Dữ liệu trong ô: ${multiLineText}`);
    };

    return (
        <View style={styles.container}>
            <View style={styles.resultContainer}>
                <Text style={styles.resultLabel}>Tăng comment bài viết</Text>
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
            <Text style={styles.label}>Nội dung cmt:</Text>
            <TextInput
                style={styles.multiLineInput}
                onChangeText={text => setMultiLineText(text)}
                value={multiLineText}
                multiline={true} // Cho phép nhập nhiều dòng
                numberOfLines={4} // Hiển thị 4 dòng, có thể cuộn khi cần
                placeholder="Nhập nhiều dòng..."
            />
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
    multiLineInput: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 4,
        paddingHorizontal: 8,
        fontSize: 16,
        marginTop: 8,
        maxHeight: 120, // Chiều cao tối đa trước khi cuộn
    },
    pickerContainer: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 4,
        marginTop: 8,
        overflow: 'hidden',
    },
    picker: {
        fontSize: 16,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 4,
        paddingHorizontal: 8,
        fontSize: 16,
        marginTop: 8,
        backgroundColor: '#f3f3f3',
        color: '#333',
        height: 40,
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
        backgroundColor: '#ff5733',
        padding: 12,
        borderRadius: 4,
        alignItems: 'center',
        marginTop: 16,
    },
    importantButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center', // Căn giữa văn bản
    },
});

export default FBCmtScreen;
