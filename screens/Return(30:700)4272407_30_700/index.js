import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { getNavigationScreen } from "@screens"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      style={styles.ScrollView_1}
    >
      <View style={styles.View_2} />
      <View style={styles.View_30_701} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8524/cd32/28df7333cebe58264b952e0eac41ddb1"
        }}
        style={styles.ImageBackground_30_702}
      />
      <View style={styles.View_30_704}>
        <Text style={styles.Text_30_704}>Muhammad Qinan Dzulfiqar</Text>
      </View>
      <View style={styles.View_30_705}>
        <Text style={styles.Text_30_705}>Pembayaran : Transfer</Text>
      </View>
      <View style={styles.View_30_706}>
        <Text style={styles.Text_30_706}>Status : Belum dibayar</Text>
      </View>
      <View style={styles.View_30_707}>
        <Text style={styles.Text_30_707}>
          tanggal terakhir pembayaran : 13 - 11 - 2021
        </Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8524/cd32/28df7333cebe58264b952e0eac41ddb1"
        }}
        style={styles.ImageBackground_30_708}
      />
      <View style={styles.View_30_710}>
        <Text style={styles.Text_30_710}>Muhammad Qinan Dzulfiqar</Text>
      </View>
      <View style={styles.View_30_711}>
        <Text style={styles.Text_30_711}>Pembayaran : Transfer</Text>
      </View>
      <View style={styles.View_30_712}>
        <Text style={styles.Text_30_712}>Status : Sudah di bayar</Text>
      </View>
      <View style={styles.View_30_713}>
        <Text style={styles.Text_30_713}>
          tanggal confirm pembayaran : 12 - 11 - 2021
        </Text>
      </View>
      <View style={styles.View_30_716} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a63e/bce5/4887d79325cad26818faab8ea54ddab6"
        }}
        style={styles.ImageBackground_34_742}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a63e/bce5/4887d79325cad26818faab8ea54ddab6"
        }}
        style={styles.ImageBackground_34_743}
      />
      <View style={styles.View_30_717}>
        <Text style={styles.Text_30_717}>Return</Text>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("112%") },
  View_30_701: {
    width: wp("100%"),
    height: hp("114%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(24, 52, 64, 1)"
  },
  ImageBackground_30_702: {
    width: wp("93%"),
    height: hp("17%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_30_704: {
    width: wp("38%"),
    top: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31%"),
    justifyContent: "flex-start"
  },
  Text_30_704: {
    color: "rgba(23, 25, 63, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_30_705: {
    width: wp("40%"),
    top: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31%"),
    justifyContent: "flex-start"
  },
  Text_30_705: {
    color: "rgba(23, 25, 63, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_30_706: {
    width: wp("40%"),
    top: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31%"),
    justifyContent: "flex-start"
  },
  Text_30_706: {
    color: "rgba(23, 25, 63, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_30_707: {
    width: wp("48%"),
    top: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31%"),
    justifyContent: "flex-start"
  },
  Text_30_707: {
    color: "rgba(23, 25, 63, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_30_708: {
    width: wp("93%"),
    height: hp("17%"),
    top: hp("32%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  View_30_710: {
    width: wp("38%"),
    top: hp("34%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31%"),
    justifyContent: "flex-start"
  },
  Text_30_710: {
    color: "rgba(23, 25, 63, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_30_711: {
    width: wp("40%"),
    top: hp("38%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31%"),
    justifyContent: "flex-start"
  },
  Text_30_711: {
    color: "rgba(23, 25, 63, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_30_712: {
    width: wp("40%"),
    top: hp("40%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31%"),
    justifyContent: "flex-start"
  },
  Text_30_712: {
    color: "rgba(23, 25, 63, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_30_713: {
    width: wp("48%"),
    top: hp("43%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31%"),
    justifyContent: "flex-start"
  },
  Text_30_713: {
    color: "rgba(23, 25, 63, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_30_716: {
    width: wp("100%"),
    height: hp("9%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(146, 170, 157, 1)"
  },
  ImageBackground_34_742: {
    width: wp("17%"),
    height: hp("11%"),
    top: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    resizeMode: "cover"
  },
  ImageBackground_34_743: {
    width: wp("17%"),
    height: hp("11%"),
    top: hp("35%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    resizeMode: "cover"
  },
  View_30_717: {
    width: wp("28%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35%"),
    justifyContent: "flex-start"
  },
  Text_30_717: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 32,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
