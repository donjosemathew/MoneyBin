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
import React, { useState, useEffect } from "react";
import { RFValue } from "react-native-responsive-fontsize";
import { Dimensions } from "react-native";
import TransactionCard from "../Components/transactionCard";
import FAB from "../Components/fab";
import ViewTransaction from "../Components/Models/ViewTransaction";
import AddTransactionDialogue from "../Components/Models/AddTransaction";
import { getTransactionData } from "../DB/database";
import { useDispatch, useSelector } from "react-redux";
import { getdata } from "../redux/dataRedux";
import { RadioButton } from "react-native-paper";
import DateTimePicker from "@react-native-community/datetimepicker";
const AllTransactions = ({ navigation, route }) => {
  const [data, setData] = useState([]);
  const alldata = useSelector((state) => state.dataOperations.data);
  const dispatch = useDispatch();
  const gettransactionDataFromDB = async () => {
    const data = await getTransactionData();
    dispatch(getdata(data));
  };
  useEffect(() => {
    gettransactionDataFromDB();
  }, []);
  useEffect(() => {
    setData(alldata);
  }, [alldata]);
  ////////////Search
  const [search, setSearch] = useState(false);
  let dataSearched;
  const searchData = (value) => {
    if (value) {
      dataSearched = [];
      data.map((item) => {
        if (item.label.includes(value)) {
          dataSearched.push(item);
        }
        setSearch(dataSearched);
        setData(dataSearched);
      });
    } else {
      setData(alldata);
      setSearch(false);
    }
  };
  //////////Monthly Data Filter
  let dataSorted;

  const [date, setDate] = useState(new Date());

  const [showDatepicker, setShowDatepicker] = useState(false);
  const onDateChanged = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowDatepicker(false);
    setDate(currentDate);
    setFilter(false);
    monthlyData(currentDate.getMonth(), currentDate.getFullYear());
  };
  function monthlyData(m, y) {
    console.log(m, y, "date");
    // console.log(currentDate);

    dataSorted = [];
    let datee = new Date(date);
    alldata.map((item) => {
      let dateItem = new Date(item.date);
      console.log(dateItem.getMonth(), m, "Date");
      if (dateItem.getMonth() == m && dateItem.getFullYear() == y) {
        dataSorted.push(item);
      }
    });
    setData(dataSorted);
    setDate(new Date());
  }
  useEffect(() => {
    setData(dataSorted);
  }, [dataSorted]);
  ///////radio Btn Filter
  const [filter, setFilter] = useState(false);
  const [value, setValue] = React.useState("income");
  const filterData = () => {
    if (value == "income") {
      dataSearched = [];
      alldata.map((item) => {
        if (item.type == "income") {
          dataSearched.push(item);
        }

        setData(dataSearched);
      });
    } else if (value == "expense") {
      dataSearched = [];
      alldata.map((item) => {
        if (item.type == "expense") {
          dataSearched.push(item);
        }

        setData(dataSearched);
      });
    } else {
      setFilter(false);
    }
    if (!filter) {
      setData(alldata);
    }
  };
  useEffect(() => {
    filterData();
  }, [value, filter]);
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
        {showDatepicker ? (
          <DateTimePicker
            textColor="#FFFFFF"
            testID="dateTimePicker"
            value={date}
            mode={"date"}
            is24Hour={true}
            display="default"
            onChange={onDateChanged}
            style={{
              backgroundColor: "red",
            }}
          />
        ) : null}
        <View style={styles.homeMiddle}>
          <Text style={styles.HomeSectionHead}>All Transaction</Text>
          <View style={styles.HomeSectionHeadRow}>
            <TouchableOpacity onPress={() => setShowDatepicker(true)}>
              <Text style={styles.HomeSectionSubTxt}>Sort by</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setFilter(!filter)}>
              <Text style={styles.HomeSectionSubTxt}>Filter </Text>
            </TouchableOpacity>
          </View>
          {filter ? (
            <View style={styles.HomeSectionFilterRow}>
              <TouchableOpacity
                onPress={() => setFilter(!filter)}
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Icon
                  name="close-circle"
                  type="ionicon"
                  color="#FC5664"
                  size={20}
                  style={{
                    marginRight: 2,
                  }}
                />
                <Text style={styles.HomeSectionSubTxt}>clear </Text>
              </TouchableOpacity>
              <RadioButton.Group
                onValueChange={(newValue) => {
                  setValue(newValue);
                  console.log(newValue);
                }}
                value={value}
              >
                <View
                  style={{
                    flexDirection: "row",
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Text style={styles.HomeSectionSubTxtDark}>Income</Text>
                    <RadioButton value="income" />
                  </View>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "center",
                      alignItems: "center",
                      marginLeft: 6,
                    }}
                  >
                    <Text style={styles.HomeSectionSubTxtDark}>Spendings</Text>
                    <RadioButton value="expense" />
                  </View>
                </View>
              </RadioButton.Group>
            </View>
          ) : null}
          <View style={styles.inputSearchHolder}>
            <Icon size={25} name="search" type="ionicon" color="#263238" />
            <TextInput
              style={styles.input}
              placeholder="Search Your Transcations"
              onChangeText={(text) => searchData(text)}
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
      <AddTransactionDialogue
        gettransactionDataFromDB={gettransactionDataFromDB}
      />
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
  HomeSectionFilterRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginTop: 0,
    marginBottom: 7,
    alignItems: "center",
  },
  HomeSectionSubTxt: {
    fontFamily: "DMSansMedium",
    fontSize: RFValue(15),
    letterSpacing: -0.700001,
    color: "#90A4AE",
  },
  HomeSectionSubTxtDark: {
    fontFamily: "DMSansMedium",
    fontSize: RFValue(15),
    letterSpacing: -0.700001,
    color: "#263238",
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
