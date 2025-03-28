import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  ImageBackground,
  StyleSheet,
  Dimensions,
} from "react-native";

interface EducationItemProps {
  title: string;
  institution: string;
  town: string;
  date: string;
  description: string;
}

const EducationItem: React.FC<EducationItemProps> = ({
  title,
  institution,
  town,
  date,
  description,
}) => {
  return (
    <View style={styles.educationItem}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.institution}>{institution}</Text>
      <Text style={styles.date}>{date}</Text>
      <Text style={styles.description}>{description}</Text>
      <Text style={styles.town}>{town}</Text>
    </View>
  );
};

const Portfolio: React.FC = () => {
  const [skills] = useState([
    { name: "HTML", percentage: 90 },
    { name: "CSS", percentage: 85 },
    { name: "React", percentage: 70 },
    { name: "GitHub", percentage: 90 },
    { name: "JavaScript", percentage: 50 },
    { name: "Tailwind", percentage: 65 },
    { name: "React Native", percentage: 30 },
  ]);

  const educationData: EducationItemProps[] = [
    {
      title: "National Diploma in Computer Science.",
      institution: "Igbajo Polytechnic, Igbajo.",
      town: "Igbajo",
      date: "2012 - 2014",
      description: "Graduated with Distinction, Best Student.",
    },
    {
      title: "Senior High School,",
      institution: "Ogiyan Community High School,",
      town: "Ejigbo,",
      date: "2005 - 2008",
      description:
        "Completed high school with a focus on \nmathematics and science. Also, Senior Prefect",
    },
  ];

  const educationData1: EducationItemProps[] = [
    {
      title: "Junior High School,",
      institution: "Asewele Community High School,",
      town: "Asewele Korede",
      date: "2001 - 2004",
      description: "Best student in mathematics",
    },
    {
      title: "Primary School,",
      institution: "Baptist Primary School,",
      town: "Isanlu Isin",
      date: "1995-2001",
      description:
        "Completed high school with a focus on \nmathematics and science. Also, Senior Prefect",
    },
  ];

  const workExperience: EducationItemProps[] = [
    {
      title: "Staff Of Peace House",
      institution: "Media Department,",
      town: "Gboko",
      date: "2024 - till date",
      description: "Labouring in Audio Section",
    },
    {
      title: "Full-Time Disciple",
      institution: "Revival Labours in Osun Zone",
      town: "Osogbo",
      date: "2019 - 2024",
      description:
        "Laboured as Tech. Man, Media Head, \nClass Leader, Field Leader.",
    },
  ];

  const workExperience1: EducationItemProps[] = [
    {
      title: "Public Servant",
      institution: "Transporter",
      town: "Osogbo",
      date: "2017-2018",
      description: "Within Osogbo and its environ",
    },
    {
      title: "Computer Operator",
      institution: "Ola-Oluwa Aina, Wire Industry",
      town: "Osogbo",
      date: "2015 - 2017",
      description: "I specialize in managing and \noptimizing daily workflows",
    },
  ];

  return (
    <ImageBackground
      source={require("../assets/images/Backgground.png")}
      style={styles.background}
      resizeMode="cover"
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.container}>
          <View style={styles.imageContainer}>
            <Image
              source={require("../assets/images/About.png")}
              style={styles.image}
            />
          </View>
          <Text style={styles.sectionTitle}>My Skills</Text>
          <View style={styles.skillsContainer}>
            {skills.map((skill, index) => (
              <View key={index} style={styles.skillItem}>
                <Text style={styles.skillText}>
                  {skill.name} - {skill.percentage}%
                </Text>
              </View>
            ))}
          </View>
          <Text style={styles.sectionTitle}>The Journey So Far</Text>
          <Text style={styles.subTitle}>Education📖</Text>
          <View style={styles.educationItem}>
            {educationData.map((item, index) => (
              <EducationItem key={index} {...item} />
            ))}
            {educationData1.map((item, index) => (
              <EducationItem key={index} {...item} />
            ))}
            <Text style={styles.subTitle}>Work Experience📖</Text>
            {workExperience.map((item, index) => (
              <EducationItem key={index} {...item} />
            ))}
            {workExperience1.map((item, index) => (
              <EducationItem key={index} {...item} />
            ))}
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

const windowHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: "100%",
    height: windowHeight,
  },
  scrollContainer: {
    flexGrow: 1,
    paddingBottom: 40,
  },
  container: {
    padding: 20,
    alignItems: "center",
  },
  imageContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  image: {
    width: 200,
    height: 350,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#39CF65",
  },
  sectionTitle: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#39CF65",
    marginBottom: 10,
    textAlign: "center",
  },
  subTitle: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 10,
    color: "white",
    textAlign: "center",
    marginTop: 15,
  },
  skillsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    marginBottom: 20,
  },
  skillItem: {
    backgroundColor: "#2D2D2D",
    padding: 10,
    margin: 5,
    borderRadius: 10,
  },

  skillText: {
    color: "#39CF65",
    fontWeight: "bold",
  },
  educationItem: {
    backgroundColor: "rgba(45, 45, 45, 0.8)",
    padding: 15,
    marginVertical: 10,
    borderRadius: 10,
    width: "100%",
    maxWidth: 500,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#fff",
  },
  institution: {
    color: "#39CF65",
    fontWeight: "bold",
    marginTop: 5,
    fontSize: 18,
  },
  date: {
    fontSize: 18,
    color: "#39CF65",
    marginTop: 5,
  },
  description: {
    color: "#bbb",
    marginTop: 8,
    fontSize: 18,
    textAlign: "center",
    lineHeight: 24,
  },

  town: {
    color: "#bbb",
    marginTop: 5,
    fontStyle: "italic",
    fontSize: 18,
  },
});

export default Portfolio;
