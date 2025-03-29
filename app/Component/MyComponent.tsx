// import React, { useEffect, useRef, useState } from "react";
// import { View, Text, Image, StyleSheet, Animated, Dimensions } from "react-native";

// const { width } = Dimensions.get("window");

// const MyComponent = () => {
//   const [showFirstSection, setShowFirstSection] = useState(true);

//   // Animation references
//   const fadeAnim = useRef(new Animated.Value(1)).current; // Opacity animation

//   useEffect(() => {
//     const interval = setInterval(() => {
//       // Fade out current section
//       Animated.timing(fadeAnim, {
//         toValue: 0,
//         duration: 500,
//         useNativeDriver: true,
//       }).start(() => {
//         // Toggle section
//         setShowFirstSection((prev) => !prev);

//         // Fade in new section
//         Animated.timing(fadeAnim, {
//           toValue: 1,
//           duration: 500,
//           useNativeDriver: true,
//         }).start();
//       });
//     }, 5000); // Switch every 3 seconds

//     return () => clearInterval(interval); // Cleanup on unmount
//   }, [fadeAnim]);

//   return (
//     <View style={styles.container}>
//       <Animated.View style={[styles.section, { opacity: fadeAnim }]}>
//         {showFirstSection ? (
//           <>
//             <Text style={[styles.text, width <= 768 ? styles.mobileText : styles.desktopText]}>
//               The Best I can be <Text style={styles.greenText}>WITHOUT JESUS</Text> is{" "}
//               <Text style={styles.greenText}>NOTHING!</Text>
//             </Text>
//             <Image
//               source={require("../../assets/images/one (1).png")}
//               style={styles.image}
//               resizeMode="cover"
//             />
//           </>
//         ) : (
//           <>
//             <Text style={[styles.text, width <= 768 ? styles.mobileText : styles.desktopText]}>
//               The least I can be <Text style={styles.greenText}>WITH JESUS</Text> is{" "}
//               <Text style={styles.greenText}>EXCELLENT!</Text>
//             </Text>
//             <Image
//               source={require("../../assets/images/one (2).png")}
//               style={styles.image}
//               resizeMode="cover"
//             />
//           </>
//         )}
//       </Animated.View>
//     </View>
//   );
// };

// // Styles
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: "center",
//     paddingTop: 5,
//   },
//   section: {
//     width: "100%",
//     alignItems: "center",
//     marginVertical: 20,
//   },
//   text: {
//     textAlign: "center",
//     fontWeight: "bold",
//     color: "#fff",
//     fontFamily: "CooperBlack",
//   },
//   mobileText: {
//     fontSize: 50,
//     fontFamily: "CooperBlack",
//   },
//   desktopText: {
//     fontSize: 40,
//   },
//   greenText: {
//     color: "rgb(39, 207, 101)green",
//   },
//   image: {
//     width: 230,
//     height: 300,
//     marginTop: 10,
//     borderRadius: 20,
//   },
// });

// export default MyComponent;



import React, { useEffect, useRef, useState } from "react";
import { View, Text, Image, StyleSheet, Animated } from "react-native";

const MyComponent = () => {
  const [showFirstSection, setShowFirstSection] = useState(true);
  const fadeAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    const interval = setInterval(() => {
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true, // Mobile-only, no web checks needed
      }).start(() => {
        setShowFirstSection((prev) => !prev);
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 500,
          useNativeDriver: true,
        }).start();
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [fadeAnim]);

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.section, { opacity: fadeAnim }]}>
        {showFirstSection ? (
          <>
            <Text style={styles.text}>
              The Best I can be <Text style={styles.greenText}>WITHOUT JESUS</Text> is{" "}
              <Text style={styles.greenText}>NOTHING!</Text>
            </Text>
            <Image
              source={require("../../assets/images/one (1).png")}
              style={styles.image}
              resizeMode="cover"
            />
          </>
        ) : (
          <>
            <Text style={styles.text}>
              The least I can be <Text style={styles.greenText}>WITH JESUS</Text> is{" "}
              <Text style={styles.greenText}>EXCELLENT!</Text>
            </Text>
            <Image
              source={require("../../assets/images/one (2).png")}
              style={styles.image}
              resizeMode="cover"
            />
          </>
        )}
      </Animated.View>
    </View>
  );
};

// Mobile-only styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: 5,
  },
  section: {
    width: "100%",
    alignItems: "center",
    marginVertical: 20,
  },
  text: {
    fontSize: 50, // Hardcoded mobile size
    textAlign: "center",
    fontWeight: "bold",
    color: "#fff",
    fontFamily: "CooperBlack", // Ensure this font is loaded
  },
  greenText: {
    color: "rgb(39, 207, 101)",
  },
  image: {
    width: 250, 
    height: 330,
    marginTop: 10,
    borderRadius: 20,
  },
});

export default MyComponent;