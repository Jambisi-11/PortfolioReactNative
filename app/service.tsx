import React from 'react';
import { View, Text, Image, StyleSheet, ImageBackground, ScrollView, Dimensions } from 'react-native';

// Import your images (make sure paths are correct)
const htmlImg = require('../assets/images/html.png');
const cssImg = require('../assets/images/css.png');
const jsImg = require('../assets/images/js.png');
const reactImg = require('../assets/images/react.png');
const tailwindImg = require('../assets/images/tailwind.png');
const gitImg = require('../assets/images/git.png');
const soundEngineerImg = require('../assets/images/soundEngineer.png');
const fashionDesignerImg = require('../assets/images/fashionDesigner.png');
const filmEditorImg = require('../assets/images/filmEditor.png');
const audioEditorImg = require('../assets/images/audioEditor.png');
const ReactNative = require('../assets/images/ReactNative.png');
interface ServiceItem {
  name: string;
  img: any;
}

interface ServiceCategory {
  title: string;
  items: ServiceItem[];
}

const { width, height } = Dimensions.get('window');

const Service = () => {
  const categories: ServiceCategory[] = [
    {
      title: "Software Development",
      items: [
        { name: "HTML", img: htmlImg },
        { name: "CSS", img: cssImg },
        { name: "JavaScript", img: jsImg },
        { name: "React", img: reactImg },
        { name: "Tailwind CSS", img: tailwindImg },
        { name: "GitHub", img: gitImg }
      ]
    },
    {
      title: "Others",
      items: [
        { name: "Sound Engineer", img: soundEngineerImg },
        { name: "Fashion Designer", img: fashionDesignerImg },
        { name: "Film Editor", img: filmEditorImg },
        { name: "Audio Editor", img: audioEditorImg }
      ]
    }
  ];

  return (
    <ImageBackground
      source={require("../assets/images/Backgground.png")}
      style={styles.background}
      resizeMode="cover"
    >
      <ScrollView 
        contentContainerStyle={[styles.container, { minHeight: height }]}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.header}>Services</Text>
        <View style={styles.categoriesContainer}>
          {categories.map((category, index) => (
            <View key={index} style={styles.categoryCard}>
              <Text style={styles.categoryTitle}>{category.title}</Text>
              <View style={styles.itemsContainer}>
                {category.items.map((item, idx) => (
                  <View key={idx} style={styles.itemWrapper}>
                    <Image
                      source={item.img}
                      style={styles.itemImage}
                      resizeMode="cover"
                    />
                    <Text style={styles.itemText}>{item.name}</Text>
                  </View>
                ))}
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  container: {
    padding: 20,
    paddingBottom: 40, // Extra padding at bottom
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#fff',
    textAlign: 'center',
  },
  categoriesContainer: {
    flexDirection: 'column',
    gap: 20,
  },
  categoryCard: {
    width: '100%',
    padding: 15,
    borderRadius: 10,
    backgroundColor: 'rgba(45, 55, 72, 0.8)', // Semi-transparent
  },
  categoryTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 15,
    color: '#68d391',
    textAlign: 'center',
  },
  itemsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 10,
  },
  itemWrapper: {
    width: '48%',
    marginBottom: 15,
    alignItems: 'center',
  },
  itemImage: {
    width: '100%',
    height: 120,
    borderRadius: 8,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: '#68d391',
  },
  itemText: {
    color: '#68d391',
    fontSize: 16,
    fontWeight: '500',
  },
});

export default Service;