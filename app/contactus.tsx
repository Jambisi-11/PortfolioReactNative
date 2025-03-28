import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  ImageBackground,
  Linking,
  Alert,
} from "react-native";
import emailjs from "emailjs-com";
import { FontAwesome } from "@expo/vector-icons";

interface FormData {
  to_name: string;
  from_name: string;
  message: string;
  reply_to?: string; // Added for better email functionality
}

const ContactUs: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    to_name: "",
    from_name: "",
    message: "",
  });

  const handleChange = (name: keyof FormData, value: string) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    const serviceID = "service_fslhwzt";
    const templateID = "template_spvhx8q";
    const userID = "_3OftAm-n54lfi8ql";

    // Create a properly typed object for emailjs
    const emailData = {
      ...formData,
      reply_to: formData.from_name.includes("@")
        ? formData.from_name
        : undefined,
    };

    emailjs
      .send(serviceID, templateID, emailData, userID)
      .then(() => {
        Alert.alert("Success", "Message sent successfully!");
        setFormData({ to_name: "", from_name: "", message: "" });
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        Alert.alert("Error", "Failed to send message. Please try again.");
      });
  };

  const socialIcons = [
    {
      id: "facebook",
      icon: "facebook",
      link: "https://facebook.com/Banjames/",
    },
    { id: "twitter", icon: "twitter", link: "https://x.com/JambisO" },
    { id: "linkedin", icon: "linkedin", link: "https://t.co/DhAUDu6Nq3" },
    {
      id: "instagram",
      icon: "instagram",
      link: "https://www.instagram.com/more_of_you_lord/",
    },
    { id: "telegram", icon: "send", link: "https://t.me/Winnowing_Fan" },
    { id: "whatsapp", icon: "whatsapp", link: "https://bitly.cx/AOJambis" },
  ];

  return (
    <ImageBackground
      source={require("../assets/images/Backgground.png")}
      style={styles.background}
      resizeMode="cover"
    >
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.heading}>Contact Me</Text>
        <View style={styles.infoContainer}>
          <Text style={styles.infoText}>
            Back of Winika Hotel, GRA, Gboko, Benue State, Nigeria.
          </Text>
          <Text style={styles.infoText}>+2347032398646 / +2348026898601</Text>
          <Text
            style={styles.emailText}
            onPress={() => Linking.openURL("mailto:jambis.banji@yahoo.com")}
          >
            jambis.banji@yahoo.com
          </Text>
          <Text
            style={styles.emailText}
            onPress={() => Linking.openURL("mailto:jamesjoanna1117@gmail.com")}
          >
            jamesjoanna1117@gmail.com
          </Text>
        </View>

        <Text style={styles.subHeading}>Connect via:</Text>
        <View style={styles.socialIcons}>
          {socialIcons.map(({ id, icon, link }) => (
            <TouchableOpacity key={id} onPress={() => Linking.openURL(link)}>
              <FontAwesome name={icon as any} size={32} color="#1DB954" />
            </TouchableOpacity>
          ))}
        </View>

        <Text style={styles.subHeading}>Send a Message</Text>
        <View style={styles.formContainer}>
          <TextInput
            placeholder="Your Name"
            value={formData.to_name}
            onChangeText={(value) => handleChange("to_name", value)}
            style={styles.input}
          />
          <TextInput
            placeholder="Your Email"
            value={formData.from_name}
            onChangeText={(value) => handleChange("from_name", value)}
            style={styles.input}
            keyboardType="email-address"
          />
          <TextInput
            placeholder="Your Message"
            value={formData.message}
            onChangeText={(value) => handleChange("message", value)}
            style={styles.textArea}
            multiline
          />
          <TouchableOpacity onPress={handleSubmit} style={styles.submitButton}>
            <Text style={styles.submitText}>Send</Text>
          </TouchableOpacity>
        </View>
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
  container: {
    padding: 40,
    alignItems: "center",
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "white",
  },
  subHeading: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 20,
    color: "white",
  },
  infoContainer: {
    alignItems: "center",
  },
  infoText: {
    fontSize: 16,
    textAlign: "center",
    color: "white",
  },
  emailText: {
    fontSize: 16,
    color: "#1DB954",
    textDecorationLine: "underline",
  },
  socialIcons: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 15,
    marginVertical: 10,
  },
  formContainer: {
    width: "100%",
    marginTop: 20,
  },
  input: {
    width: "100%",
    padding: 12,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    backgroundColor: "white",
  },
  textArea: {
    width: "100%",
    padding: 12,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    height: 100,
    textAlignVertical: "top",
    backgroundColor: "white",
  },
  submitButton: {
    backgroundColor: "#1DB954",
    paddingVertical: 12,
    alignItems: "center",
    borderRadius: 8,
    marginTop: 10,
  },
  submitText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
  },
});

export default ContactUs;
