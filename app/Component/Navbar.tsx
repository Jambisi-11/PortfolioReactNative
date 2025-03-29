// import { View, StyleSheet } from "react-native";
// import { Link } from "expo-router";

// export default function Navbar() {
//   return (
//     <View style={styles.container}>
//       <View style={styles.navItem}>
//         <Link href="/" style={styles.text}>Home</Link>
//       </View>
//       <View style={styles.navItem}>
//         <Link href="/about" style={styles.text}>About</Link>
//       </View>
//       <View style={styles.navItem}>
//         <Link href="/service" style={styles.text}>Service</Link>
//       </View>
//       <View style={styles.navItem}>
//         <Link href="/portfolio" style={styles.text}>Portfolio</Link>
//       </View>
//       <View style={styles.navItem}>
//         <Link href="/pages" style={styles.text}>Pages</Link>
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flexDirection: "row",
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "#1a295a",
//     height: 50,
//     paddingHorizontal: 10,
//     width: "100%",
//     // marginTop: 30,
    
    
//   },
//   navItem: {
//     marginRight: 10,
//   },
//   text: {
//     color: "white",
//     fontSize: 20,
//     fontWeight: "bold",
//   },
// });


// import { View, StyleSheet } from "react-native";
// import { Link, usePathname, type LinkProps } from "expo-router";

// export default function Navbar() {
//   const pathname = usePathname(); // Get the current route

//   return (
//     <View style={styles.container}>
//       {menuItems.map((item) => (
//         <View
//           key={String(item.href)} // Ensure key is a string
//           style={[
//             styles.navItem,
//             pathname === item.href ? styles.activeNavItem : null, // Apply active style
//           ]}
//         >
//           <Link href={item.href as LinkProps["href"]} style={styles.text}>
//             {item.label}
//           </Link>
//         </View>
//       ))}
//     </View>
//   );
// }

// const menuItems: { href: LinkProps["href"]; label: string }[] = [
//   { href: "/" as LinkProps["href"], label: "Home" },
//   { href: "/about" as LinkProps["href"], label: "About" },
//   { href: "/service" as LinkProps["href"], label: "Service" },
//   { href: "/portfolio" as LinkProps["href"], label: "Portfolio" },
//   { href: "/pages" as LinkProps["href"], label: "Pages" },
// ];

// const styles = StyleSheet.create({
//   container: {
//     flexDirection: "row",
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "#1a295a",
//     height: 50,
//     paddingHorizontal: 10,
//     width: "100%",
//   },
//   navItem: {
//     marginRight: 1,
//     paddingVertical: 5,
//     paddingHorizontal: 10,
    
//   },
//   activeNavItem: {
//     backgroundColor: "green", // Highlight the active menu item
//     borderRadius: 15,
//   },
//   text: {
//     color: "white",
//     fontSize: 18,
//     fontWeight: "bold",
//   },
// });



import { View, StyleSheet } from "react-native";
import { Link, usePathname } from "expo-router";

const menuItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/service", label: "Service" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/pages", label: "Pages" },
] as const;

export default function Navbar() {
  const pathname = usePathname();

  // console.log('Current pathname:', pathname);

  return (
    <View style={styles.container}>
      {menuItems.map((item) => (
        <View
          key={item.href}
          style={[
            styles.navItem,
            pathname === item.href && styles.activeNavItem,
          ]}
        >
          <Link href={item.href} style={styles.text}>
            {item.label}
          </Link>
        </View>
      ))}
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
    // marginTop: 5,
  },
  navItem: {
    marginRight: 1,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  activeNavItem: {
    backgroundColor: "green",
    borderRadius: 15,
  },
  text: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});
