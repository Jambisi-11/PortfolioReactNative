// import React from "react";
// import {
//   View,
//   Text,
//   Image,
//   useWindowDimensions,
//   StyleSheet,
//   ImageBackground,
//   ScrollView,
// } from "react-native";

// const About = () => {
//   const { width } = useWindowDimensions();
//   const isMobile = width < 768;

//   return (
//     <ImageBackground
//       source={require("../../assets/images/Backgground.png")}
//       style={styles.background}
//       resizeMode="cover"
//     >
//       <ScrollView contentContainerStyle={styles.scrollContainer}>
//         <View
//           style={[
//             styles.contentContainer,
//             isMobile ? styles.mobileContent : styles.desktopContent,
//           ]}
//         >
//           {/* Image Section */}
//           <View
//             style={[
//               styles.imageContainer,
//               isMobile ? styles.mobileImage : styles.desktopImage,
//             ]}
//           >
//             <View style={styles.imageWrapper}>
//               <Image
//                 source={require("../../assets/images/About.png")}
//                 style={
//                   isMobile ? styles.mobileImageSize : styles.desktopImageSize
//                 }
//                 resizeMode="cover"
//               />
//               <View  />
//             </View>
//           </View>

//           {/* Text Section */}
//           <View style={styles.textContainer}>
//             <View style={styles.textWrapper}>
//               <Text style={styles.text}>
//                 <Text style={styles.strong}>"Hi, I'm Ajide Olabisi James, </Text>{" "}
//                 an intermediate Front-End Developer with expertise in HTML, CSS,
//                 JavaScript (beginner), React.js, Tailwind, and collaborative tools
//                 like GitHub. I also have a foundational understanding of UX/UI
//                 design, which I've cultivated through hands-on experience and
//                 self-directed learning. While I'm not formally trained in design,
//                 I'm passionate about creating intuitive and visually appealing
//                 interfaces that enhance user experiences.
//                 {"\n\n"}
//                 I'm a full-time staff member at Living Seed Team, Media
//                 Department, based in Gboko, where I also work with the Software
//                 Department. For me, delving into the world of coding is not a
//                 career shift—it's the fulfillment of a long-standing prophecy
//                 aimed at bringing value and relief to our software team. While I'm
//                 not yet where I want to be, I am deeply committed to continuously
//                 learning and acquiring new skills to enhance the software field. I
//                 thrive on tackling new challenges and collaborating with
//                 like-minded creatives to bring ideas to life, and I don't easily
//                 give up.{"\n\n"}
//                 Let's connect and build something amazing together!"
//               </Text>
//             </View>
//           </View>
//         </View>
//       </ScrollView>
//     </ImageBackground>
//   );
// };

// const styles = StyleSheet.create({
//   background: {
//     flex: 1,
//     width: '100%',
//     height: '100%',
//   },
//   scrollContainer: {
//     flexGrow: 1,
//     padding: 16,
//   },
//   container: {
//     flex: 1,
//     width: "100%",
//   },
//   contentContainer: {
//     flexDirection: "row",
//   },
//   mobileContent: {
//     flexDirection: "column",
//     gap: 32,
//   },
//   desktopContent: {
//     marginTop: 16,
//     gap: 32,
//   },
//   imageContainer: {
//     width: "100%",
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   mobileImage: {
//     marginTop: 8,
//   },
//   desktopImage: {
//     marginTop: 48,
//   },
//   imageWrapper: {
//     width: "100%",
//     justifyContent: "center",
//     alignItems: "center",
//     position: "relative",
    
//   },
//   mobileImageSize: {
//     width: 250,
//     height: 400,
//     borderRadius: 125, 
//     borderBottomColor: "green",
//     borderBottomWidth: 4,
//   },
//   desktopImageSize: {
//     width: 320,
//     height: 480,
//     borderRadius: 10,
//   },
//   gradientOverlay: {
//     position: "absolute",
//     bottom: 0,
//     left: 0,
//     right: 0,
//     height: "100%",
//     backgroundColor: "rgba(0,0,0,0.5)",
//   },
//   textContainer: {
//     width: "100%",
//     justifyContent: "center",
//     alignItems: "center",
//     paddingHorizontal: 16,
//   },
//   textWrapper: {
//     padding: 18,
//     backgroundColor: "#4ade80",
//     borderBottomRightRadius: 48,
//     borderTopLeftRadius: 48,
//     width: "100%",
//     maxWidth: 600, // prevents text from stretching too wide on large screens
//   },
//   text: {
//     fontStyle: "italic",
//     color: "#000",
//     lineHeight: 24,
//     fontSize: 24,
//   },
//   strong: {
//     fontWeight: "bold",
//     fontStyle: "italic",
//   },
// });

// export default About;


import React from "react";
import {
  View,
  Text,
  Image,
  useWindowDimensions,
  StyleSheet,
  ImageBackground,
  ScrollView,
} from "react-native";
import Footer from "../Component/Footer";
const About = () => {
  const { width } = useWindowDimensions();
  const isMobile = width < 768;

  // console.log("About component rendered");

  return (
    <ImageBackground
      source={require("../../assets/images/Backgground.png")}
      style={styles.background}
      resizeMode="cover"
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View
          style={[
            styles.contentContainer,
            isMobile ? styles.mobileContent : styles.desktopContent,
          ]}
        >
          {/* Image Section */}
          <View
            style={[
              styles.imageContainer,
              isMobile ? styles.mobileImage : styles.desktopImage,
            ]}
          >
            <View style={styles.imageWrapper}>
              <Image
                source={require("../../assets/images/About.png")}
                style={
                  isMobile ? styles.mobileImageSize : styles.desktopImageSize
                }
                resizeMode="cover"
              />
            </View>
          </View>

          {/* Text Section */}
          <View style={styles.textContainer}>
            <View style={styles.textWrapper}>
              <Text style={styles.text}>
                <Text style={styles.strong}>"Hi, I'm Ajide Olabisi James, </Text>{" "}
                an intermediate Front-End Developer with expertise in HTML, CSS,
                JavaScript (beginner), React.js, Tailwind, and collaborative tools
                like GitHub. I also have a foundational understanding of UX/UI
                design, which I've cultivated through hands-on experience and
                self-directed learning. While I'm not formally trained in design,
                I'm passionate about creating intuitive and visually appealing
                interfaces that enhance user experiences.
                {"\n\n"}
                I'm a full-time staff member at Living Seed Team, Media
                Department, based in Gboko, where I also work with the Software
                Department. For me, delving into the world of coding is not a
                career shift—it's the fulfillment of a long-standing prophecy
                aimed at bringing value and relief to our software team. While I'm
                not yet where I want to be, I am deeply committed to continuously
                learning and acquiring new skills to enhance the software field. I
                thrive on tackling new challenges and collaborating with
                like-minded creatives to bring ideas to life, and I don't easily
                give up.{"\n\n"}
                Let's connect and build something amazing together!"
              </Text>
            </View>
          </View>
        </View>
        <Footer />
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  scrollContainer: {
    flexGrow: 1,
    padding: 16,
  },
  contentContainer: {
    flexDirection: "row",
  },
  mobileContent: {
    flexDirection: "column",
    gap: 32,
  },
  desktopContent: {
    marginTop: 16,
    gap: 32,
  },
  imageContainer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  mobileImage: {
    marginTop: 8,
  },
  desktopImage: {
    marginTop: 48,
  },
  imageWrapper: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  mobileImageSize: {
    width: 250,
    height: 400,
    borderRadius: 125,
    borderBottomColor: "green",
    borderBottomWidth: 4,
  },
  desktopImageSize: {
    width: 320,
    height: 480,
    borderRadius: 10,
  },
  textContainer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 16,
  },
  textWrapper: {
    padding: 18,
    backgroundColor: "#4ade80",
    borderBottomRightRadius: 48,
    borderTopLeftRadius: 48,
    width: "100%",
    maxWidth: 600, // prevents text from stretching too wide on large screens
  },
  text: {
    fontStyle: "italic",
    color: "#000",
    lineHeight: 24,
    fontSize: 24,
  },
  strong: {
    fontWeight: "bold",
    fontStyle: "italic",
  },
});

export default About;
