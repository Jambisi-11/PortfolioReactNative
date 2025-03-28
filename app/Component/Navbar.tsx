import { View, StyleSheet } from "react-native";
import { Link } from "expo-router";

export default function Navbar() {
  return (
    <View style={styles.container}>
      <View style={styles.navItem}>
        <Link href="/" style={styles.text}>Home</Link>
      </View>
      <View style={styles.navItem}>
        <Link href="/about" style={styles.text}>About</Link>
      </View>
      <View style={styles.navItem}>
        <Link href="/service" style={styles.text}>Service</Link>
      </View>
      <View style={styles.navItem}>
        <Link href="/portfolio" style={styles.text}>Portfolio</Link>
      </View>
      <View style={styles.navItem}>
        <Link href="/pages" style={styles.text}>Pages</Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1a295a",
    height: 50,
    paddingHorizontal: 10,
    width: "100%",
    // marginTop: 30,
    
    
  },
  navItem: {
    marginRight: 10,
  },
  text: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
});
