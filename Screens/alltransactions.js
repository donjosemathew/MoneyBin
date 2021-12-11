import { useFonts } from "expo-font";
import {
  Text,
  TouchableOpacity,
  ScrollView,
  View,
  FlatList,
  StatusBar,
  StyleSheet,
} from "react-native";
import { Icon } from "react-native-elements";
import React from "react";
import { RFValue } from "react-native-responsive-fontsize";
import { Dimensions } from "react-native";
import TransactionCard from "../Components/transactionCard";
import FAB from "../Components/fab";

const AllTransactions = ({ navigation }) => {
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
        </View>
        <View style={styles.transactions}>
          <FlatList
            showsVerticalScrollIndicator={false}
            scrollEnabled={true}
            overScrollMode={"never"}
            contentContainerStyle={{
              paddingBottom: 15,
            }}
            data={[
              {
                id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
                title: "First Item",
              },
              {
                id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
                title: "Second Item",
              },
              {
                id: "58694a0f-3da1-471f-bd96-145571e29d72",
                title: "Third Item",
              },
              {
                id: "5869sds4a0f-3da1-471f-bd96-145571e29d72",
                title: "Third Item",
              },
              {
                id: "5sdd8694a0f-3da1-471f-bd96-145571e29d72",
                title: "Third Item",
              },
              {
                id: "58694a0f-3sdssdda1-471f-bd96-145571e29d72",
                title: "Third Item",
              },
            ]}
            renderItem={() => <TransactionCard />}
            keyExtractor={(item) => item.id}
          />
        </View>
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
  },
});
export default AllTransactions;
