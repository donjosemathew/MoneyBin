import { useFonts } from "expo-font";
import {
  Text,
  TouchableOpacity,
  Image,
  View,
  StatusBar,
  StyleSheet,
} from "react-native";
import React from "react";
import { RFValue } from "react-native-responsive-fontsize";
import { Dimensions } from "react-native";

const Intro = ({ navigation }) => {
  const [isLoaded] = useFonts({
    DMSansRegular: require("../assets/fonts/DMSans-Regular.ttf"),
    DMSansMedium: require("../assets/fonts/DMSans-Medium.ttf"),
    DMSansBold: require("../assets/fonts/DMSans-Bold.ttf"),
  });
  if (!isLoaded) {
    return <View></View>;
  } else {
    return (
      <>
        <View
          style={{
            backgroundColor: "#FFFFFF",
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
          <View style={styles.home}>
            <Text style={styles.name}>MoneyBin</Text>
            <Text style={styles.fontHead}>
              Simple way <Text style={styles.fontHeadLight}>to</Text>
              {"\n"}
              <Text>
                <Text style={styles.fontHeadLight}>control your</Text> {"\n"}
                <Text>Transactions</Text>
              </Text>
            </Text>
          </View>

          <Image
            source={require("../assets/images/introimg.png")}
            style={styles.introImg}
          />
          <View style={styles.introBtnHolder}>
            <TouchableOpacity
              onPress={() => navigation.navigate("Home")}
              style={styles.introBtn}
            >
              <Text style={styles.introBtnText}>Get Started →</Text>
            </TouchableOpacity>
          </View>
        </View>
      </>
    );
  }
};

const styles = StyleSheet.create({
  home: {
    padding: 22,
    paddingLeft: 24,
    flexDirection: "column",

    width: "100%",
  },
  name: {
    //marginTop: Dimensions.get("window").height / 50,
    color: "#263238",
    fontSize: RFValue(29),
    fontFamily: "DMSansRegular",
    letterSpacing: -1.100001,
  },
  fontHead: {
    fontSize: RFValue(39),
    fontFamily: "DMSansMedium",
    lineHeight: 48,
    marginTop: 13,
    letterSpacing: -2.000001,
    color: "#263238",
  },
  fontHeadLight: {
    color: "#90A4AE",
  },
  introImg: {
    padding: 5,
    height: Dimensions.get("window").height / 2.3,
    position: "relative",
    resizeMode: "contain",
    marginRight: -Dimensions.get("window").width / 2.45,
  },

  introBtnHolder: {
    width: "100%",
    padding: 6,
    paddingLeft: 24,
    flexDirection: "row",
    marginTop: 4,
  },
  introBtnText: {
    fontSize: RFValue(21),
    fontFamily: "DMSansMedium",

    letterSpacing: -1.0,
    color: "#263238",
  },
});
export default Intro;
