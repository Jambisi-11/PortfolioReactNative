import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { useRouter } from "expo-router";

const Footer = () => {
  const router = useRouter();
  const isMobile = Dimensions.get("window").width < 768;

  return (
    <View style={styles.footer}>
      <View style={styles.container}>
        <View
          style={[
            styles.navList,
            isMobile ? styles.mobileNav : styles.desktopNav,
          ]}
        >
          <TouchableOpacity onPress={() => router.push("/about")}>
            <Text style={styles.link}>ABOUT</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => router.push("/career")}>
            <Text style={styles.link}>CAREER</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => router.push("/pages/blog")}>
            <Text style={styles.link}>BLOG</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => router.push("/gallery")}>
            <Text style={styles.link}>GALLERY</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => router.push("/contactus")}>
            <Text style={styles.link}>CONTACT</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.copyright}>© Ajide Olabis James - 2025</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    height: 100,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    alignItems: "center",
  },
  navList: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
    paddingVertical: 10,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: "white",
  },
  mobileNav: {
    width: "70%",
  },
  desktopNav: {
    width: "60%",
  },
  link: {
    color: "white",
    fontWeight: "bold",
    fontSize: 14,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  copyright: {
    color: "white",
    marginTop: 10,
    fontSize: 12,
  },
});

export default Footer;
