import { useNavigation, useRoute } from '@react-navigation/native';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Snackbar from 'react-native-snackbar';


const Details = () => {
    const route = useRoute();
    const navigation = useNavigation();

    const { product } = route.params
    return (
        <ScrollView style={styles.container}>
            <View>
                <Image
                    source={{ uri: product.image }}
                    style={styles.image}

                />
            </View>
            <Text style={styles.titletxt}>
                {product.title}
            </Text>
            <Text style={styles.descriptiontxt}>
                {product.description}
            </Text>

            <View style={styles.pricecontainer}>
                <Text style={styles.pricetxt}>
                    ₹{Math.floor(product.price * 82).toLocaleString('en-IN')}
                </Text>

                <Text style={styles.rating}>
                    {product.rating.rate}*
                </Text>

                <Text style={styles.ratingcount}>
                    ({product.rating.count})
                </Text>
            </View>


            <View style={styles.mainbtnContainer}>

                <TouchableOpacity style={styles.cartbtnContainer} onPress={() => {
                    Snackbar.show({
                        text: 'Add to cart',
                        duration: Snackbar.LENGTH_SHORT,
                        backgroundColor: "#E74292"
                    });
                }
                }>
                    <Text style={styles.btnTxt}>
                        Add to cart
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnContainer} onPress={() => {
                    Snackbar.show({
                        text: 'Order Placed',
                        duration: Snackbar.LENGTH_SHORT,
                        backgroundColor: "#43BE31"
                    });
                }
                }>
                    <Text style={styles.btnbuyTxt}>
                        Buy Now
                    </Text>
                </TouchableOpacity>
            </View>

        </ScrollView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10

    },
    image: {
        width: '100%',
        height: 500,
        borderRadius: 5,
        marginBottom: 20

    },
    titletxt: {
        color: "#000000",
        fontSize: 22,
        fontWeight: "500",
        marginTop: 10,
        marginLeft: 8,
        marginBottom: 2

    },
    descriptiontxt: {
        color: "#000000",
        fontSize: 15,
        fontWeight: "400",
        marginTop: 2,
        marginLeft: 8,
        marginBottom: 5
    },
    pricetxt: {
        fontSize: 30,
        marginLeft: 8,
        color: "#45CE30",
        fontWeight: "bold"
    },
    pricecontainer: {
        flexDirection: "row",
        alignItems: "center"

    },
    ratingcount: {
        color: '#4834DF',
        fontWeight: '300',
        fontSize: 12,
        marginLeft: 5

    },
    rating: {
        color: 'green',
        fontWeight: '700',
        fontSize: 18,
        marginLeft: 12,

    },
    mainbtnContainer: {
        flexDirection: "row"

    },
    btnContainer: {
        width: "auto",
        height: "auto",
        padding: 10,
        backgroundColor: "#FFE11B",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
        margin: 30
    },
    cartbtnContainer: {
        width: "auto",
        height: "auto",
        padding: 10,
        backgroundColor: "#FFFFFF",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
        margin: 30
    },

    btnTxt: {
        fontSize: 20,
        color: "#000000",
        fontWeight: "900"
    },
    btnbuyTxt:{
        fontSize: 20,
        color: "#000000",
        fontWeight: "900"

    },
    addtoCart: {
        backgroundColor: "#FFE11B"
    }



})

export default Details
