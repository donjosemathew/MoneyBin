import { useFonts } from "expo-font";
import {
  Text,
  TouchableOpacity,
  Image,
  View,
  StatusBar,
  StyleSheet,
} from "react-native";
import { Icon } from "react-native-elements";
import React, { useState } from "react";
import { RFValue } from "react-native-responsive-fontsize";
import { Dimensions } from "react-native";
import TransactionCard from "../Components/transactionCard";
import FAB from "../Components/fab";
import NameDialogue from "../Components/Models/namedialoague";

const Home = ({ navigation }) => {
  const [nameDialogue, setNameDialogue] = useState(false);
  const closeAddNameDialogue = () => {
    setNameDialogue(false);
  };
  return (
    <>
      <View
        style={{
          //paddingTop: StatusBar.currentHeight,
          backgroundColor: "#FFFFFF",
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
        {nameDialogue ? (
          <NameDialogue
            closeAddNameDialogue={closeAddNameDialogue}
            nameDialogue={nameDialogue}
          />
        ) : null}
        <View style={styles.home}>
          <Text style={styles.name}>MoneyBin</Text>
        </View>
        <View style={styles.homeCard}>
          <View style={styles.circle1} />
          <View style={styles.circle2} />
          <View style={styles.homeCardContentHolder}>
            <Text style={styles.userName}>
              Hi <Text style={styles.userNameBold}>Sam</Text>
            </Text>

            <View style={styles.cardTotalTransactions}>
              <View style={styles.cardTotalTransactionsCols}>
                <Icon
                  size={30}
                  name="arrow-up-circle"
                  type="ionicon"
                  color="#263238"
                />
                <Text style={styles.cardTotalTransactionsText}>
                  Your Income
                </Text>

                <Text style={styles.cardTotalTransactionsValue}>
                  ₹{" "}
                  <Text style={styles.cardTotalTransactionsValueBold}>
                    15510
                  </Text>
                </Text>
              </View>
              <View style={styles.cardTotalTransactionsCols2}>
                <Icon
                  size={30}
                  name="arrow-down-circle"
                  type="ionicon"
                  color="#263238"
                />
                <Text style={styles.cardTotalTransactionsText}>
                  Your Spending
                </Text>
                <Text style={styles.cardTotalTransactionsValue}>
                  ₹{" "}
                  <Text style={styles.cardTotalTransactionsValueBold}>
                    14456
                  </Text>
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.homeMiddle}>
          <Text style={styles.HomeSectionHead}>Recent Transaction</Text>
          <View style={styles.HomeSectionHeadRow}>
            <TouchableOpacity>
              <Text style={styles.HomeSectionSubTxt}>Sort by</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.HomeSectionSubTxt}>Search </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.transactions}>
          <TransactionCard />
          <TransactionCard />
          <TransactionCard />
        </View>
        <TouchableOpacity
          onPress={() => {
            //navigation.navigate("AllTransactions");
            setNameDialogue(true);
          }}
        >
          <Text style={styles.HomeBtmTxt}>More →</Text>
        </TouchableOpacity>
        <FAB />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  home: {
    padding: 22,

    flexDirection: "column",
    justifyContent: "center",
    width: "100%",
    flexDirection: "row",
  },
  name: {
    //marginTop: Dimensions.get("window").height / 50,
    color: "#263238",
    fontSize: RFValue(29),
    textAlign: "center",
    fontFamily: "DMSansRegular",
    letterSpacing: -1.100001,
  },
  homeCard: {
    width: "90%",
    height: "28%",
    backgroundColor: "#3FE0AE",
    overflow: "hidden",
    borderRadius: 7,
  },
  circle1: {
    width: Dimensions.get("window").width / 3.5,
    height: Dimensions.get("window").width / 3.5,

    position: "absolute",
    top: -Dimensions.get("window").width / 16,
    right: -Dimensions.get("window").width / 16,
    borderRadius: Dimensions.get("window").width / 7,
    backgroundColor: "rgba(255, 255, 255, 0.17)",
  },
  circle2: {
    width: Dimensions.get("window").width / 5,
    height: Dimensions.get("window").width / 5,

    position: "absolute",
    bottom: -Dimensions.get("window").width / 16,
    left: -Dimensions.get("window").width / 16,
    borderRadius: Dimensions.get("window").width / 7,
    backgroundColor: "rgba(255, 255, 255, 0.17)",
  },
  homeCardContentHolder: {
    padding: 20,
    flex: 1,
  },
  userName: {
    fontSize: RFValue(34),
    fontFamily: "DMSansRegular",
    letterSpacing: -2.000001,
    color: "#ffffff",
  },
  userNameBold: {
    fontFamily: "DMSansMedium",
  },
  cardTotalTransactions: {
    flex: 1,

    justifyContent: "space-between",
    flexDirection: "row",
  },

  cardTotalTransactionsCols: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-end",
    flex: 1,
    paddingBottom: 9,
  },
  cardTotalTransactionsCols2: {
    flexDirection: "column",
    alignItems: "flex-end",
    justifyContent: "flex-end",
    flex: 1,
    paddingBottom: 9,
  },
  cardTotalTransactionsText: {
    fontSize: RFValue(17),
    fontFamily: "DMSansRegular",
    letterSpacing: -0.800001,
    color: "#ffffff",
  },
  cardTotalTransactionsValue: {
    fontSize: RFValue(32),
    fontFamily: "DMSansRegular",
    letterSpacing: -0.500001,
    color: "#ffffff",
    lineHeight: 42,
  },
  cardTotalTransactionsValueBold: {
    fontFamily: "DMSansBold",
  },
  homeMiddle: {
    marginTop: 26,
    width: "90%",
    alignItems: "flex-start",
  },
  HomeSectionHead: {
    fontFamily: "DMSansMedium",
    fontSize: RFValue(18),
    letterSpacing: -1.300001,
    color: "#263238",
  },
  HomeSectionHeadRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginTop: 5,
  },
  HomeSectionSubTxt: {
    fontFamily: "DMSansMedium",
    fontSize: RFValue(15),
    letterSpacing: -0.700001,
    color: "#90A4AE",
  },
  HomeBtmTxt: {
    fontFamily: "DMSansMedium",
    fontSize: RFValue(14),
    letterSpacing: -0.700001,
    color: "#90A4AE",
    margin: 15,
  },
  transactions: {
    width: "90%",
    flexDirection: "column",
    flex: 1,
  },
});
export default Home;
