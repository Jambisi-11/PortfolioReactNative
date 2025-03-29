
// import { Stack } from "expo-router";
// import { View, StatusBar } from "react-native";
// import Navbar from "./Component/Navbar"; 
// import Footer from "./Component/Footer";
// import MyComponent from "./Component/MyComponent";


// export default function RootLayout() {
//   return (
//     <View style={{ flex: 1, marginTop: 35 }}>
//       <StatusBar hidden={false} barStyle="dark-content" backgroundColor="transparent" translucent />
      
//       <Navbar />

//       <View style={{ flex: 1 }}> 
//         <Stack screenOptions={{ headerShown: false }} />
//       </View>
//       <Footer />
//     </View>
//   );
// }



import { Stack } from "expo-router";
import { View, StatusBar, ScrollView } from "react-native";
import Navbar from "./Component/Navbar"; 
import Footer from "./Component/Footer";

export default function RootLayout() {
  return (
    <View style={{ flex: 1, marginTop: 35 }}>
      <StatusBar hidden={false} barStyle="dark-content" backgroundColor="transparent" translucent />

      <Navbar />

      {/* Scrollable Content Including Footer */}
      <ScrollView 
        contentContainerStyle={{ flexGrow: 1 }}
        showsVerticalScrollIndicator={false}
      >
        {/* Main Content */}
        <View style={{ flex: 1 }}>
          <Stack screenOptions={{ headerShown: false }} />
        </View>

        {/* Footer scrolls with the content */}
        
      </ScrollView>
    </View>
  );
}



// import { Stack } from "expo-router";
// import { View, StatusBar, StyleSheet } from "react-native";
// import Navbar from "./Component/Navbar"; 
// import Footer from "./Component/Footer";

// export default function RootLayout() {
//   return (
//     <View style={styles.desktopContainer}>
//       <View style={styles.mobileContainer}>
//         <StatusBar 
//           hidden={false} 
//           barStyle="dark-content" 
//           backgroundColor="transparent" 
//           translucent 
//         />
//         <Navbar />
//         <View style={styles.content}>
//           <Stack screenOptions={{ headerShown: false }} />
//         </View>
//         <Footer />
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   desktopContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#f0f0f0',
//   },
//   mobileContainer: {
//     width: 375,
//     height: '100%',
//     maxHeight: 812,
//     overflow: 'hidden',
//     backgroundColor: 'white',
//     // Only ViewStyle properties below:
//     borderWidth: 10,
//     borderColor: 'black',
//     borderRadius: 40,
//   },
//   content: {
//     flex: 1,
//   },
// });