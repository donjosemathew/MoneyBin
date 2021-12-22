import {
  Text,
  TouchableOpacity,
  View,
  FlatList,
  StatusBar,
  TextInput,
  StyleSheet,
} from "react-native";
import { Icon } from "react-native-elements";
import React from "react";
import { RFValue } from "react-native-responsive-fontsize";
import { Dimensions } from "react-native";
import TransactionCard from "../Components/transactionCard";
import FAB from "../Components/fab";
import ViewTransaction from "../Components/Models/ViewTransaction";
import AddTransactionDialogue from "../Components/Models/AddTransaction";

const AllTransactions = ({ navigation, route }) => {
  const { data } = route.params;

  return (
    <>
      <View
        style={{
          //paddingTop: StatusBar.currentHeight,
          backgroundColor: "#FFFFFF",
          flex: 1,
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
        <View style={styles.home}>
          <Text style={styles.name}>MoneyBin</Text>
        </View>

        <View style={styles.homeMiddle}>
          <Text style={styles.HomeSectionHead}>All Transaction</Text>
          <View style={styles.HomeSectionHeadRow}>
            <TouchableOpacity>
              <Text style={styles.HomeSectionSubTxt}>Sort by</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.HomeSectionSubTxt}>Search </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.inputSearchHolder}>
            <Icon size={25} name="search" type="ionicon" color="#263238" />
            <TextInput
              style={styles.input}
              placeholder="Search Your Transcations"
              keyboardType="numeric"
            />
          </View>
        </View>
        <View style={styles.transactions}>
          {data.length == 0 ? (
            <View style={styles.emptyspace}>
              <Text style={styles.HomeSectionSubTxt}>
                No Recent Transactions 😴
              </Text>
            </View>
          ) : null}
          <FlatList
            showsVerticalScrollIndicator={false}
            scrollEnabled={true}
            overScrollMode={"never"}
            contentContainerStyle={{
              paddingBottom: 15,
            }}
            data={data}
            renderItem={(item) => <TransactionCard data={item.item} />}
            keyExtractor={(item, index) => index}
          />
        </View>

        <FAB />
      </View>
      <ViewTransaction />
    </>
  );
};

const styles = StyleSheet.create({
  emptyspace: {
    width: "100%",

    height: "80%",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    fontFamily: "DMSansRegular",
    flex: 1,
    letterSpacing: -0.500001,
    padding: 4,
    marginLeft: 4,
    fontSize: RFValue(15),
  },
  inputSearchHolder: {
    flexDirection: "row",
    padding: 6,
    paddingLeft: 8,
    paddingRight: 8,
    alignItems: "center",
    width: "100%",
  },
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

  homeMiddle: {
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
    marginBottom: 7,
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
    height: "100%",
    flex: 1,
    marginTop: 4,
  },
});
export default AllTransactions;
