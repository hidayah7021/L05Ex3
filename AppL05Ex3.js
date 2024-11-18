import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SectionList, TouchableOpacity, Image, Button } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; // Import FontAwesome

const AppL05Ex3 = () => {
  return (
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <Button title="Add Pokemon" onPress={() => {}} /> {/* Empty onPress */}
        </View>
        <SectionList
            sections={datasource}
            renderItem={renderItem}
            renderSectionHeader={({ section: { title, icon, bgColor } }) => (
                <View style={[styles.headerContainer, { backgroundColor: bgColor }]}>
                  <FontAwesome name={icon} size={24} color="white" />
                  <Text style={styles.headerText}>{title}</Text>
                </View>
            )}
            keyExtractor={(item, index) => item.key + index}
        />
        <StatusBar style="auto" />
      </View>
  );
};

const renderItem = ({ item }) => {
  return (
      <TouchableOpacity style={styles.itemContainer}>
        <Text style={styles.textStyle}>{item.key}</Text>
        <Image source={{ uri: item.image }} style={styles.imageStyle} />
      </TouchableOpacity>
  );
};

const datasource = [
  {
    title: 'Fire',
    icon: 'fire',
    bgColor: 'orange',
    data: [
      {
        key: 'Vulpix',
        image: 'https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_37-2x.png',
      },
      {
        key: 'Rapidash',
        image: 'https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_78-2x.png',
      },
    ],
  },
  {
    title: 'Water',
    icon: 'tint',
    bgColor: 'lightblue',
    data: [
      {
        key: 'Vaporeon',
        image: 'https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_134-2x.png',
      },
      {
        key: 'Gyarados',
        image: 'https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_130-2x.png',
      },
    ],
  },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  buttonContainer: {
    padding: 50,
    backgroundColor: '#f8f8f8', // Optional: subtle background for button area
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  headerText: {
    fontSize: 20,
    marginLeft: 10,
    fontWeight: 'bold',
    color: 'white',
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  textStyle: {
    fontSize: 18,
  },
  imageStyle: {
    width: 100, // Increased width
    height: 150, // Increased height
    resizeMode: 'contain',
  },
});

export default AppL05Ex3;
