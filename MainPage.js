import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, ImageBackground } from 'react-native';

export default class MainPage extends React.Component {
    state = {

    }

    handleClick() {

    }

    render() {
        return (
        <View style={styles.constainer}>
            <View style={styles.header}>
                
                <View style={styles.menu}>
                    <Image 
                        style={styles.menuImg}
                        source={{ uri: 'https://cdn2.iconfinder.com/data/icons/food-restaurant-1/128/flat-56-128.png',}}
                    />
                </View>
                <Text style={styles.title}>M.S.G</Text>
                <View style={styles.myPage}>
                    <Image 
                        style={styles.myPageImg}
                        source={{ uri: 'https://cdn0.iconfinder.com/data/icons/user-interface-873/32/27_user_user_profile_profile_my_profile_avatar-128.png',}}
                    />
                </View>
            </View>
            <View style={styles.constainerSearch}>
                <TextInput
                    style={styles.input}
                    placeholder=" 맛집을 검색하세요!"
                />
                <Text style={styles.serachButton}>검 색</Text>
            </View>
            <View style={styles.constainerFood}>
                <View style={styles.food}>
                    <Image 
                        style={styles.foodImg}
                        source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSH0ZC63kE3q_Ezo7vrMDgi_2Qc5hrt8AmxKQ&usqp=CAU',
        }}
                    />
                    <View style={styles.nameAndRating}>
                        <Text style={styles.foodName}>윙스버거</Text>
                        <Text style={styles.rating}>4.6</Text>
                    </View>
                    <View style={styles.count}>
                        <Text style={styles.searchCount}>조회수 | 999</Text>
                        <Text style={styles.reviewCount}>리뷰수 | 54</Text>
                    </View>
                </View>
                <View style={styles.food}>
                    <Image style={styles.foodImg}
                        source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ47jyEB8O5aBIpIz4Lqz6VZjDn1n-n1Ysdg&usqp=CAU',
        }}
                    />
                    <View style={styles.nameAndRating}>
                        <Text style={styles.foodName}>엉클족</Text>
                        <Text style={styles.rating}>4.5</Text>
                    </View>
                    <View style={styles.count}>
                        <Text style={styles.searchCount}>조회수 | 878</Text>
                        <Text style={styles.reviewCount}>리뷰수 | 30</Text>
                    </View>
                </View>
                <View style={styles.food}>
                    <Image style={styles.foodImg}
                        source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQihhGfSXAwtpJ3F5VHzvN7QXVgn05Ntg2InA&usqp=CAU',
        }}
                    />
                    <View style={styles.nameAndRating}>
                        <Text style={styles.foodName}>까르니두브라질</Text>
                        <Text style={styles.rating}>4.7</Text>
                    </View>
                    <View style={styles.count}>
                        <Text style={styles.searchCount}>조회수 | 699</Text>
                        <Text style={styles.reviewCount}>리뷰수 | 45</Text>
                    </View>
                </View>
                <View style={styles.food}>
                    <Image style={styles.foodImg}
                        source={{ uri: 'data:image/jpeg;base64,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',
        }}
                    />
                    <View style={styles.nameAndRating}>
                        <Text style={styles.foodName}>김네집</Text>
                        <Text style={styles.rating}>4.8</Text>
                    </View>
                    <View style={styles.count}>
                        <Text style={styles.searchCount}>조회수 | 699</Text>
                        <Text style={styles.reviewCount}>리뷰수 | 45</Text>
                    </View>
                </View>
            </View>
            <View style={styles.footer}>
                <Text>만든이들</Text>
                <Text>GIMHAE</Text>
            </View>
        </View>

        )
    }
}

const styles = StyleSheet.create({
    constainer: {
        flex: 1,
        backgroundColor: "#ffffff",
    },
    header: {
        flex: 0.5,
        flexDirection: "row",
        borderBottomColor: "gray",
        borderBottomWidth: StyleSheet.hairlineWidth
    },
    menu: {
        // backgroundColor: "blue",
        marginLeft: 20,
        paddingTop: "9%",
    },
    menuImg: {
        width: 50,
        height: 50
    },
    title: {
        // flex: 0.,
        // backgroundColor: "orange",
        // justifyContent: 'flex-end',
        // alignContent: 'flex-end',
        // paddingLeft: "43%",
        paddingTop: "5%",
        fontSize: 40,
        fontWeight: "bold",
        marginLeft: "43%",
        
    },
    // headerLeft: {
    //     flexDirection: "row"
    // },
    myPage: {
        // backgroundColor: "red",
        marginLeft: "43%",
        paddingTop: "9%",
    },
    myPageImg: {
        width: 50,
        height: 50
    },
    constainerSearch: {
        flex: .1,
        // backgroundColor: "pink",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    input: {
        width: 300,
        height: 30,
        marginRight: 10,
        borderWidth: 1,
        borderColor: "gray",
        borderRadius: 6,
    },
    serachButton: {
        borderWidth: 1,
        borderColor: "gray",
        borderRadius: 6,
        backgroundColor: "lightgray",
        padding: 5,
    },
    constainerFood: {
        // backgroundColor: "green",
        flex: 1,
        flexDirection: "row",
        alignItems: "stretch",

    },
    food: {
        padding: 15,
        alignItems: "center",
        justifyContent: "center",
    },
    foodImg:{
        width: 150,
        height: 120,
        margin: 30,

    },
    nameAndRating: {
        flexDirection: 'row',
    },
    foodName: {
        marginLeft: 30,
        marginRight: 40,
        fontSize: 17,
        fontWeight: "bold"
    },
    rating: {
        fontStyle: "italic",
        fontSize: 25,
        fontWeight: "bold",
        marginBottom: 5,
    },
    count: {
        flexDirection: "row",
        marginRight: 10,
    },
    searchCount: {
        paddingHorizontal: 5,
        marginRight: 10,
        marginLeft: 30,
        borderWidth: 1,
        borderColor: "#2c2c2c",
        backgroundColor: "lightgray",
        fontSize: 10,
        fontWeight: "bold"
    },
    reviewCount: {
        paddingHorizontal: 5,
        borderWidth: 1,
        borderColor: "#2c2c2c",
        backgroundColor: "lightgray",
        fontSize: 10,
        fontWeight: "bold"
    },
    footer: {
        flex: .2,
        padding: 10,
        backgroundColor: "gray"
    }

})