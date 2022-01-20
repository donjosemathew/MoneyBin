import {
  Text,
  TouchableOpacity,
  Alert,
  View,
  StatusBar,
  StyleSheet,
  BackHandler,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Icon } from "react-native-elements";
import React, { useState, useEffect } from "react";
import { RFValue } from "react-native-responsive-fontsize";
import { Dimensions } from "react-native";
import TransactionCard from "../Components/transactionCard";
import FAB from "../Components/fab";
import NameDialogue from "../Components/Models/namedialoague";
import AddTransactionDialogue from "../Components/Models/AddTransaction";
import ViewTransaction from "../Components/Models/ViewTransaction";
import { getTransactionData } from "../DB/database";
import LottieView from "lottie-react-native";
import { useRoute } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { getdata } from "../redux/dataRedux";
import CreditsDialogue from "../Components/Models/creditsDialogue";
const Home = ({ navigation }) => {
  const route = useRoute();
  ////////////////////backhandlerjesusSaviour
  let backHandlerCounter = 0;
  useEffect(() => {
    const backAction = () => {
      if (backHandlerCounter == 1) {
        BackHandler.exitApp();
      }
      if (backHandlerCounter == 0) {
        backHandlerCounter++;
        setTimeout(() => {
          backHandlerCounter = 0;
        }, 1500);
      }

      return true;
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove();
  }, []);

  ///////////Add Name Dialogue
  const [nameDialogue, setNameDialogue] = useState(true);
  const closeAddNameDialogue = (value) => {
    if (value != false) {
      setUsername(value);
    }
    setNameDialogue(false);
  };
  const ShowAddNameDialogue = () => {
    setNameDialogue(true);
  };

  //////////////////Database Part
  /////UserName
  const [isLoading, setIsLoading] = useState(true);
  const [username, setUsername] = useState("");
  /////////Function to get data Name//////////////
  const getNameData = async () => {
    try {
      const value = await AsyncStorage.getItem("username");

      setIsLoading(false);
      if (value !== null) {
        // value previously stored
        setUsername(value);
      }
    } catch (e) {
      // error reading value
    }
  };
  /*if name is not available it will show dialogue and add data */
  const storeNameData = async (value) => {
    try {
      await AsyncStorage.setItem("username", value);
    } catch (e) {
      // saving error
    }
  };

  /*
  
*/
  ////Data
  const alldata = useSelector((state) => state.dataOperations.data);
  const disatch = useDispatch();

  /////transaction Data
  const [data, setData] = useState([]);
  const [totalTransactionincome, setTotalTransactionincome] = useState(0);
  const [totalTransactionExpense, setTotalTransactionExpense] = useState(0);
  const gettransactionDataFromDB = async () => {
    const data = await getTransactionData();

    //setData(data);
    disatch(getdata(data));
  };
  useEffect(() => {
    setData(alldata);
    let income = 0;
    if (alldata) {
      alldata.forEach((item) => {
        if (item.type == "income") {
          income = income + parseInt(item.amount);
        }
      });
      setTotalTransactionincome(income);
      let expense = 0;
      alldata.forEach((item) => {
        if (item.type == "expense") {
          expense = expense + parseInt(item.amount);
        }
      });
      setTotalTransactionExpense(expense);
    }
  }, [alldata]);

  useEffect(() => {
    getNameData();

    gettransactionDataFromDB();
    setTimeout(() => {
      setTimer(true);
    }, 3000);
  }, []);
  //////////////////Animation
  const [timer, setTimer] = useState(false);

  ////////////////Credis Dialogue
  const [creditsDia, setCreditsDia] = useState(false);
  const CloseCreditsDia = () => {
    setCreditsDia(false);
  };
  const OpenCreditsDia = () => {
    setCreditsDia(true);
  };
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

        {!isLoading ? (
          !username && nameDialogue ? (
            <NameDialogue
              closeAddNameDialogue={closeAddNameDialogue}
              storeNameData={storeNameData}
            />
          ) : null
        ) : null}

        <View style={styles.home}>
          <TouchableOpacity onPress={OpenCreditsDia}>
            <Icon
              name="reorder-two"
              type="ionicon"
              color="#263238"
              size={45}
              style={{
                zIndex: 100,
              }}
            />
          </TouchableOpacity>
          <Text style={styles.name}>MoneyBin</Text>
          <Icon
            name="reorder-two"
            type="ionicon"
            color="#fff"
            size={45}
            style={{
              zIndex: 100,
            }}
          />
        </View>
        <View style={styles.homeCard}>
          <View style={styles.circle1} />
          <View style={styles.circle2} />
          <View style={styles.homeCardContentHolder}>
            <Text style={styles.userName}>
              Hi{" "}
              <Text style={styles.userNameBold}>
                {username ? username : ""}
              </Text>
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
                  Total Income
                </Text>

                <Text style={styles.cardTotalTransactionsValue}>
                  ₹{" "}
                  <Text style={styles.cardTotalTransactionsValueBold}>
                    {totalTransactionincome > 1000
                      ? (totalTransactionincome / 1000).toFixed(2) + "k"
                      : totalTransactionincome}
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
                  Total Spendings
                </Text>
                <Text style={styles.cardTotalTransactionsValue}>
                  ₹{" "}
                  <Text style={styles.cardTotalTransactionsValueBold}>
                    {totalTransactionExpense * -1 > 1000
                      ? ((totalTransactionExpense * -1) / 1000).toFixed(2) + "k"
                      : totalTransactionExpense * -1}
                  </Text>
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.homeMiddle}>
          <Text style={styles.HomeSectionHead}>Recent Transactions</Text>
          <View style={styles.HomeSectionHeadRow}>
            <Text style={styles.HomeSectionSubTxt}>Recent 3 </Text>

            <TouchableOpacity
              onPress={() => {
                navigation.navigate("AllTransactions", {
                  data: data,
                });
              }}
            >
              <Text style={styles.HomeSectionSubTxt}>Search </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={
            !timer
              ? [
                  styles.transactions,
                  { alignItems: "center", justifyContent: "flex-start" },
                ]
              : styles.transactions
          }
        >
          {!isLoading && timer ? (
            <View>
              {data && data.length >= 1 ? (
                <TransactionCard data={data[0]} />
              ) : null}
              {data && data.length >= 2 ? (
                <TransactionCard data={data[1]} />
              ) : null}
              {data && data.length >= 3 ? (
                <TransactionCard data={data[2]} />
              ) : null}
              {data.length == 0 ? (
                <View style={styles.emptyspace}>
                  <Text style={styles.HomeSectionSubTxt}>
                    No Recent Transactions 😴
                  </Text>
                </View>
              ) : null}
            </View>
          ) : (
            <LottieView
              loop={true}
              autoPlay
              style={{
                width: 150,
                height: 200,
              }}
              source={require("../assets/animations/loading.json")}
            />
          )}
        </View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("AllTransactions", {
              data: data,
            });
          }}
        >
          <Text style={styles.HomeBtmTxt}>More →</Text>
        </TouchableOpacity>
        <FAB />
      </View>
      <ViewTransaction />
      {route.name == "Home" ? (
        <AddTransactionDialogue
          gettransactionDataFromDB={gettransactionDataFromDB}
        />
      ) : null}
      {creditsDia ? (
        <CreditsDialogue CloseCreditsDia={CloseCreditsDia} />
      ) : null}
    </>
  );
};

const styles = StyleSheet.create({
  emptyspace: {
    width: "100%",
    height: "90%",

    alignItems: "center",
    justifyContent: "center",
  },
  home: {
    padding: 22,
    position: "relative",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",

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
    zIndex: 2,
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
