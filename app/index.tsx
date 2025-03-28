// import {View, Text, ImageBackground, StatusBar,StyleSheet,
// } from "react-native";
// import MyComponent from "./Component/MyComponent";

// export default function Home() {
//   return (
//     <View style={styles.pageContainer}>
//       <StatusBar hidden={false} barStyle="dark-content" backgroundColor="transparent" translucent />
//       <ImageBackground
//         source={require("../assets/images/Backgground.png")}
//         style={styles.background}
//         resizeMode="cover"
//       >
//         <Text style={styles.heading}>Welcome To My Portfolio</Text>
//         <MyComponent />
//       </ImageBackground>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   pageContainer: {
//     flex: 1,
//     backgroundColor: "#f5f5f5",
//     paddingTop:1, 
//   },

//   background: {
//     flex: 1,
//     alignItems: "center",
//     width: "100%",
//     height: "100%",
//   },

//   heading: {
//     fontSize: 26,
//     fontWeight: "bold",
//     color: "white",
//     marginTop: 10,
//   },
// });


import { ScrollView, StatusBar, ImageBackground, Text, StyleSheet } from "react-native";
import MyComponent from "./Component/MyComponent";

export default function HomeScreen() {
  return (
    <ImageBackground
      source={require("../assets/images/Backgground.png")}
      style={styles.background}
      resizeMode="cover"
    >
      <StatusBar hidden={false} barStyle="dark-content" backgroundColor="transparent" translucent />
      
      <ScrollView contentContainerStyle={styles.pageContainer}>
        <Text style={styles.heading}>Welcome To My Portfolio</Text>
        <MyComponent />
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  pageContainer: {
    flexGrow: 1, // Allows scrolling but keeps background stretched
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    marginBottom: 20,
  },
});
