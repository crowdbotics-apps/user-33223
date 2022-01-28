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
      <View style={styles.View_30_122} />
      <TouchableOpacity
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/406b/bcdf/8a6e7ef4e498233dd37b394d863c2c7e"
        }}
        style={styles.TouchableOpacity_30_123}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("30_544"))
        }
      />
      <View style={styles.View_30_124}>
        <Text style={styles.Text_30_124}>Produk</Text>
      </View>
      <TouchableOpacity
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/406b/bcdf/8a6e7ef4e498233dd37b394d863c2c7e"
        }}
        style={styles.TouchableOpacity_30_125}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("30_700"))
        }
      />
      <View style={styles.View_30_126}>
        <Text style={styles.Text_30_126}>Pengembalian</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bddc/34aa/1c26456f5d75f1471ef37ed19a23be26"
        }}
        style={styles.ImageBackground_30_127}
      />
      <View style={styles.View_30_128}>
        <Text style={styles.Text_30_128}>Keluar </Text>
      </View>
      <View style={styles.View_30_129}>
        <Text style={styles.Text_30_129}>Hai, Qinan</Text>
      </View>
      <View style={styles.View_30_130}>
        <Text style={styles.Text_30_130}>
          apa yang ingin kamu beli hari ini ?
        </Text>
      </View>
      <TouchableOpacity
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e00c/dd19/a5f83628d1e8416121e18cd210870c10"
        }}
        style={styles.TouchableOpacity_30_131}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("30_678"))
        }
      />
      <TouchableOpacity
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7f70/359a/29cf11128a5bf38735d105c86495e799"
        }}
        style={styles.TouchableOpacity_30_132}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("30_370"))
        }
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d66d/266c/ae3701bf7e9c7be12eb26b19ce594318"
        }}
        style={styles.ImageBackground_30_133}
      />
      <View style={styles.View_30_134}>
        <Text style={styles.Text_30_134}>Troli</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/758d/c038/50ac81e55b21b64311f7d9542e311dbd"
        }}
        style={styles.ImageBackground_30_135}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a63e/bce5/4887d79325cad26818faab8ea54ddab6"
        }}
        style={styles.ImageBackground_30_136}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bfa7/81b4/c5de3df789acd83b2e7563710c382954"
        }}
        style={styles.ImageBackground_34_741}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("112%") },
  View_30_122: {
    width: wp("100%"),
    height: hp("113%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(24, 52, 64, 1)"
  },
  TouchableOpacity_30_123: {
    width: wp("29%"),
    height: hp("16%"),
    top: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%")
  },
  View_30_124: {
    width: wp("23%"),
    top: hp("33%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    justifyContent: "flex-start"
  },
  Text_30_124: {
    color: "rgba(23, 25, 63, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_30_125: {
    width: wp("29%"),
    height: hp("16%"),
    top: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("62%")
  },
  View_30_126: {
    width: wp("26%"),
    top: hp("33%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65%"),
    justifyContent: "flex-start"
  },
  Text_30_126: {
    color: "rgba(23, 25, 63, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_30_127: {
    width: wp("29%"),
    height: hp("16%"),
    top: hp("48%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("62%")
  },
  View_30_128: {
    width: wp("23%"),
    top: hp("61%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73%"),
    justifyContent: "flex-start"
  },
  Text_30_128: {
    color: "rgba(23, 25, 63, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_30_129: {
    width: wp("40%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    justifyContent: "flex-start"
  },
  Text_30_129: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_30_130: {
    width: wp("56%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    justifyContent: "flex-start"
  },
  Text_30_130: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_30_131: {
    width: wp("15%"),
    height: hp("7%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81%")
  },
  TouchableOpacity_30_132: {
    width: wp("29%"),
    height: hp("16%"),
    top: hp("48%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%")
  },
  ImageBackground_30_133: {
    width: wp("17%"),
    height: hp("9%"),
    top: hp("51%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68%"),
    resizeMode: "cover"
  },
  View_30_134: {
    width: wp("22%"),
    top: hp("61%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    justifyContent: "flex-start"
  },
  Text_30_134: {
    color: "rgba(23, 25, 63, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_30_135: {
    width: wp("24%"),
    height: hp("8%"),
    top: hp("51%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    resizeMode: "cover"
  },
  ImageBackground_30_136: {
    width: wp("17%"),
    height: hp("11%"),
    top: hp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68%"),
    resizeMode: "cover"
  },
  ImageBackground_34_741: {
    width: wp("26%"),
    height: hp("11%"),
    top: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
