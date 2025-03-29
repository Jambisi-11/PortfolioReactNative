// import React from "react";
// import { View, Text, Pressable, StyleSheet } from "react-native";
// import { Link, type LinkProps } from "expo-router";

// // 1. Define route paths that match your EXACT file structure
// const ROUTES = {
//   BLOG: "/pages/blog",
//   CONTACT: "/contactus",
// } as const;

// // 2. Create menu items with proper typing
// const navItems = [
//   {
//     id: "blog",
//     name: "BLOG",
//     path: ROUTES.BLOG,
//   },
//   {
//     id: "contact",
//     name: "CONTACT",
//     path: ROUTES.CONTACT,
//   },
// ] satisfies { id: string; name: string; path: string }[];

// const Navbar = () => {
//   return (
    
//     <View style={styles.container}>
//       {navItems.map((item) => (
//         <Link
//           key={item.id}
//           href={item.path as LinkProps["href"]} // Type assertion here
//           asChild
//         >
//           <Pressable style={styles.navItem}>
//             {({ pressed }) => (
//               <Text style={[styles.text, pressed && styles.textPressed]}>
//                 {item.name}
//               </Text>
//             )}
//           </Pressable>
//         </Link>
//       ))}
//     </View>
//   );
// };
// const styles = StyleSheet.create({
//   container: {
//     flexDirection: "column",
//     justifyContent: "center",
//     alignItems: "flex-end", 
//     backgroundColor: "#1a295a",
//     height: 60,
//     paddingHorizontal: 13,
//     width: "28%",
//     alignSelf: "flex-end", 
//     marginLeft: "auto",
//   },
//   navItem: {
//     marginHorizontal: 2,
//     paddingVertical: 3,
//     paddingHorizontal: 5,
//   },
//   text: {
//     color: "white",
//     fontSize: 16,
//     fontWeight: "bold",
//   },
//   textPressed: {
//     color: "#22c55e",
//   },
// });

// export default Navbar;



import React from "react";
import { View, Text, Pressable, ImageBackground, StyleSheet } from "react-native";
import { Link, type LinkProps } from "expo-router";

const ROUTES = {
  BLOG: "/pages/blog",
  CONTACT: "/contactus",
} as const;

const navItems = [
  {
    id: "blog",
    name: "BLOG",
    path: ROUTES.BLOG,
  },
  {
    id: "contact",
    name: "CONTACT",
    path: ROUTES.CONTACT,
  },
] satisfies { id: string; name: string; path: string }[];

const Navbar = () => {
  return (
    <ImageBackground
      source={require("../../assets/images/Backgground.png")}
      style={styles.backgroundImage}
      resizeMode="cover"
    >
      <View style={styles.container}>
        {navItems.map((item) => (
          <Link
            key={item.id}
            href={item.path as LinkProps["href"]}
            asChild
          >
            <Pressable style={styles.navItem}>
              {({ pressed }) => (
                <Text style={[styles.text, pressed && styles.textPressed]}>
                  {item.name}
                </Text>
              )}
            </Pressable>
          </Link>
        ))}
      </View>
      
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    // justifyContent: 'center',
  },
  container: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-end",
    backgroundColor: "#1a295a",
    height: 60,
    paddingHorizontal: 13,
    width: "28%",
    alignSelf: "flex-end",
    marginLeft: "auto",
  },
  navItem: {
    marginHorizontal: 2,
    paddingVertical: 3,
    paddingHorizontal: 5,
  },
  text: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  textPressed: {
    color: "#22c55e",
  },
});

export default Navbar;