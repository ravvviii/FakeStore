import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {
    ActivityIndicator,
    Image,
    Platform, // Import Platform
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';

function Home(): React.JSX.Element {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();

  useEffect(() => {
    const fetchStore = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        setArticles(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching news:', error);
        setLoading(false);
      }
    };
    fetchStore();
  }, []);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#841584" />
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {articles.map((product, index) => (
        <TouchableOpacity key={index} style={styles.productContainer(index)} onPress={()=> navigation.navigate("Details", {product})}>
          <View style={styles.imageContainer}>
            <Image source={{ uri: product.image }} style={styles.image} />
          </View>
          <View style={styles.detailsContainer}>
            <Text style={styles.title}>{product.title}</Text>
            <View style={styles.rating}>
              <Text style={styles.rate}>{product.rating.rate}*</Text>
              <Text style={styles.rateCount}>({product.rating.count} ratings)</Text>
            </View>
            <View style={styles.pricee}>
              <Text style={styles.price}>₹{Math.floor(product.price * 82).toLocaleString('en-IN')}</Text>
            </View>
            {/* Uncomment below to show category */}
            {/* <Text style={styles.category}>{product.category}</Text> */}
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 10,
  },
  productContainer: (index) => ({
    width: '50%', // Two items per row
    flexDirection: 'column',
    padding: 10,
    borderBlockColor: '#ccc',
    borderRightWidth: index % 2 === 0 ? 2 : 0, // Apply border only to even indices
    opacity: 0.9, // Add opacity here (adjust the value as needed)
  }),
  imageContainer: {
    marginRight: 10,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 150,
    height: 150,
  },
  detailsContainer: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'column'
  },
  title: {
    fontSize: 15,
    color: 'black',
    fontWeight: '900',
    marginLeft: 8,
  },
  rating: {
    flexDirection: 'row',
    color: 'green',
    alignItems: 'center',
  },
  rate: {
    color: 'green',
    fontWeight: '700',
    fontSize: 18,
    marginLeft: 8,
  },
  rateCount: {
    color: '#4834DF',
    fontWeight: '300',
    fontSize: 12,
    marginLeft: 5
  },
  price: {
    color: 'green',
    marginTop: 5,
    marginLeft: 8,
    fontWeight: 'bold',
    fontFamily: Platform.OS === 'android' ? 'monospace' : 'Arial', // Required for Android
  },
  pricee: {
    // justifyContent:"center",
    // alignItems:"center"
  },
  category: {
    color: 'black',
    marginTop: 5,
    fontSize: 16,
    fontWeight: '500',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Home;
