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
      <View style={styles.View_30_679} />
      <View style={styles.View_30_680}>
        <Text style={styles.Text_30_680}>Nama</Text>
      </View>
      <View style={styles.View_30_681}>
        <Text style={styles.Text_30_681}>Nomor kontak</Text>
      </View>
      <View style={styles.View_30_682}>
        <Text style={styles.Text_30_682}> Email</Text>
      </View>
      <View style={styles.View_30_683}>
        <Text style={styles.Text_30_683}>Username</Text>
      </View>
      <View style={styles.View_30_684}>
        <Text style={styles.Text_30_684}>Password</Text>
      </View>
      <View style={styles.View_30_685}>
        <Text style={styles.Text_30_685}>Alamat</Text>
      </View>
      <View style={styles.View_30_686} />
      <View style={styles.View_30_687} />
      <View style={styles.View_30_688} />
      <View style={styles.View_30_689} />
      <View style={styles.View_30_690} />
      <TouchableOpacity
        style={styles.TouchableOpacity_30_691}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("30_121"))
        }
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dd13/04fb/541e73b662ab31dc9296485bccdbaa5c"
        }}
        style={styles.ImageBackground_30_692}
      />
      <View style={styles.View_30_693}>
        <Text style={styles.Text_30_693}>Nama</Text>
      </View>
      <View style={styles.View_30_694}>
        <Text style={styles.Text_30_694}>Nomor kontak</Text>
      </View>
      <View style={styles.View_30_695}>
        <Text style={styles.Text_30_695}>Alamat email</Text>
      </View>
      <View style={styles.View_30_696}>
        <Text style={styles.Text_30_696}>Username</Text>
      </View>
      <View style={styles.View_30_697}>
        <Text style={styles.Text_30_697}>Password</Text>
      </View>
      <View style={styles.View_30_698}>
        <Text style={styles.Text_30_698}>Alamat </Text>
      </View>
      <View style={styles.View_30_699}>
        <Text style={styles.Text_30_699}>Simpan</Text>
      </View>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("112%") },
  View_30_679: {
    width: wp("100%"),
    height: hp("114%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(24, 52, 64, 1)"
  },
  View_30_680: {
    width: wp("35%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    justifyContent: "flex-start"
  },
  Text_30_680: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_30_681: {
    width: wp("51%"),
    top: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    justifyContent: "flex-start"
  },
  Text_30_681: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_30_682: {
    width: wp("51%"),
    top: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    justifyContent: "flex-start"
  },
  Text_30_682: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_30_683: {
    width: wp("51%"),
    top: hp("36%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    justifyContent: "flex-start"
  },
  Text_30_683: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_30_684: {
    width: wp("51%"),
    top: hp("49%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    justifyContent: "flex-start"
  },
  Text_30_684: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_30_685: {
    width: wp("51%"),
    top: hp("61%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    justifyContent: "flex-start"
  },
  Text_30_685: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_30_686: {
    width: wp("85%"),
    height: hp("6%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    backgroundColor: "rgba(209, 220, 189, 1)"
  },
  View_30_687: {
    width: wp("85%"),
    height: hp("6%"),
    top: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    backgroundColor: "rgba(209, 220, 189, 1)"
  },
  View_30_688: {
    width: wp("85%"),
    height: hp("6%"),
    top: hp("29%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    backgroundColor: "rgba(209, 220, 189, 1)"
  },
  View_30_689: {
    width: wp("85%"),
    height: hp("6%"),
    top: hp("41%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    backgroundColor: "rgba(209, 220, 189, 1)"
  },
  View_30_690: {
    width: wp("85%"),
    height: hp("6%"),
    top: hp("53%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    backgroundColor: "rgba(209, 220, 189, 1)"
  },
  TouchableOpacity_30_691: {
    width: wp("85%"),
    height: hp("6%"),
    top: hp("98%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_30_692: {
    width: wp("85%"),
    height: hp("28%"),
    top: hp("67%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  View_30_693: {
    width: wp("40%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    justifyContent: "flex-start"
  },
  Text_30_693: {
    color: "rgba(169, 165, 165, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_30_694: {
    width: wp("55%"),
    top: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    justifyContent: "flex-start"
  },
  Text_30_694: {
    color: "rgba(169, 165, 165, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_30_695: {
    width: wp("55%"),
    top: hp("30%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    justifyContent: "flex-start"
  },
  Text_30_695: {
    color: "rgba(169, 165, 165, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_30_696: {
    width: wp("23%"),
    top: hp("42%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    justifyContent: "flex-start"
  },
  Text_30_696: {
    color: "rgba(169, 165, 165, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_30_697: {
    width: wp("55%"),
    top: hp("54%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    justifyContent: "flex-start"
  },
  Text_30_697: {
    color: "rgba(169, 165, 165, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_30_698: {
    width: wp("55%"),
    top: hp("68%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    justifyContent: "flex-start"
  },
  Text_30_698: {
    color: "rgba(169, 165, 165, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_30_699: {
    width: wp("18%"),
    top: hp("99%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40%"),
    justifyContent: "flex-start"
  },
  Text_30_699: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
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
