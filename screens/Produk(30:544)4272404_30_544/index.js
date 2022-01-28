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
      <View style={styles.View_30_545} />
      <TouchableOpacity
        style={styles.TouchableOpacity_30_564}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("30_588"))
        }
      />
      <TouchableOpacity
        style={styles.TouchableOpacity_30_566}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("30_121"))
        }
      />
      <View style={styles.View_30_567}>
        <Text style={styles.Text_30_567}>Kembali</Text>
      </View>
      <View style={styles.View_30_568} />
      <View style={styles.View_30_570}>
        <Text style={styles.Text_30_570}>cari produk</Text>
      </View>
      <View style={styles.View_30_571} />
      <View style={styles.View_30_572} />
      <View style={styles.View_30_573} />
      <View style={styles.View_30_574} />
      <View style={styles.View_30_575} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7394/dd78/38d29520cd41e3dae97e00a6cd0b5502"
        }}
        style={styles.ImageBackground_30_576}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2e42/18ad/dc5ee57c36609b280dc4c006b303d79b"
        }}
        style={styles.ImageBackground_30_577}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fc3c/44a6/17dbc7f78744e98da9b8e12d6444489d"
        }}
        style={styles.ImageBackground_30_578}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7b4a/1662/07cf0f61d19074e06952e3d65495cf1b"
        }}
        style={styles.ImageBackground_30_579}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/df45/570e/fb4223948e148c49b6f9057b253015b3"
        }}
        style={styles.ImageBackground_30_580}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/149e/087c/c7adad0ac692ed7e2e20be30a5b02b91"
        }}
        style={styles.ImageBackground_30_581}
      />
      <View style={styles.View_30_582}>
        <View style={styles.View_30_583}>
          <Text style={styles.Text_30_583}>Kategori</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3153/213c/70540e4c533f3de973fcbd050c447dbb"
          }}
          style={styles.ImageBackground_30_584}
        />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("112%") },
  View_30_545: {
    width: wp("100%"),
    height: hp("114%"),
    top: hp("-1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(24, 52, 64, 1)"
  },
  TouchableOpacity_30_564: {
    width: wp("34%"),
    height: hp("21%"),
    top: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    backgroundColor: "rgba(209, 220, 189, 1)"
  },
  TouchableOpacity_30_566: {
    width: wp("42%"),
    height: hp("7%"),
    top: hp("102%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_30_567: {
    width: wp("20%"),
    top: hp("104%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    justifyContent: "flex-start"
  },
  Text_30_567: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_30_568: {
    width: wp("91%"),
    height: hp("6%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    backgroundColor: "rgba(252, 255, 246, 1)"
  },
  View_30_570: {
    width: wp("52%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%"),
    justifyContent: "flex-start"
  },
  Text_30_570: {
    color: "rgba(169, 165, 165, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_30_571: {
    width: wp("34%"),
    height: hp("21%"),
    top: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("59%"),
    backgroundColor: "rgba(209, 220, 189, 1)"
  },
  View_30_572: {
    width: wp("34%"),
    height: hp("20%"),
    top: hp("46%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    backgroundColor: "rgba(209, 220, 189, 1)"
  },
  View_30_573: {
    width: wp("34%"),
    height: hp("20%"),
    top: hp("46%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("59%"),
    backgroundColor: "rgba(209, 220, 189, 1)"
  },
  View_30_574: {
    width: wp("34%"),
    height: hp("20%"),
    top: hp("77%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    backgroundColor: "rgba(209, 220, 189, 1)"
  },
  View_30_575: {
    width: wp("34%"),
    height: hp("20%"),
    top: hp("77%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("59%"),
    backgroundColor: "rgba(209, 220, 189, 1)"
  },
  ImageBackground_30_576: {
    width: wp("30%"),
    height: hp("18%"),
    top: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%")
  },
  ImageBackground_30_577: {
    width: wp("30%"),
    height: hp("17%"),
    top: hp("78%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%")
  },
  ImageBackground_30_578: {
    width: wp("29%"),
    height: hp("18%"),
    top: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("62%")
  },
  ImageBackground_30_579: {
    width: wp("30%"),
    height: hp("18%"),
    top: hp("47%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%")
  },
  ImageBackground_30_580: {
    width: wp("29%"),
    height: hp("18%"),
    top: hp("47%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("62%")
  },
  ImageBackground_30_581: {
    width: wp("30%"),
    height: hp("17%"),
    top: hp("78%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("62%")
  },
  View_30_582: {
    width: wp("27%"),
    minWidth: wp("27%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68%"),
    top: hp("11%")
  },
  View_30_583: {
    width: wp("20%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_30_583: {
    color: "rgba(169, 165, 165, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_30_584: {
    width: wp("7%"),
    height: hp("0%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
