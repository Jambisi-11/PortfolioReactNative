
import { Stack } from "expo-router";
import { View, StatusBar } from "react-native";
import Navbar from "./Component/Navbar"; 
import Footer from "./Component/Footer";
import MyComponent from "./Component/MyComponent";


export default function RootLayout() {
  return (
    <View style={{ flex: 1, marginTop: 35 }}>
      <StatusBar hidden={false} barStyle="dark-content" backgroundColor="transparent" translucent />
      
      <Navbar />

      <View style={{ flex: 1 }}> 
        <Stack screenOptions={{ headerShown: false }} />
      </View>
      <Footer />
    </View>
  );
}
