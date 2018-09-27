import React from 'react'
import {
    View,
    Image,
    Dimensions,
    Keyboard,
    Button,
    Text,
    // AvoidKeyboard,
    StyleSheet
} from 'react-native'
import AvoidKeyboard from '../../Components/AvoidKeyboard'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import GradientButton from '../../Components/GradientButton'
import { scale, scaleModerate, scaleVertical } from '../../Util/Scale'
import SocialMediaButton from '../../Components/SocialMediaButton'
import TextInput from '../../Components/TextInput'
import FullButton from '../../Components/FullButton'

export default class LoginScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  constructor (props) {
    super(props)
  }

  _renderImage (image) {
    let contentHeight = scaleModerate(375, 1)
    let height = Dimensions.get('window').height - contentHeight
    let width = Dimensions.get('window').width

    image = (<Image style={[styles.image, { height, width }]}
      source={require('../../Images/cr-logo.png')} />)

    return image
  }

  render () {
    let image = this._renderImage()

    return (
      <AvoidKeyboard
        onStartShouldSetResponder={(e) => true}
        onResponderRelease={(e) => Keyboard.dismiss()}
        style={styles.screen}>
        {image}
        <View style={styles.container}>
          <View style={styles.buttons}>
            <SocialMediaButton
              network='twitter'
              spacing='right'
              onPress={() => null}
                        />
            <SocialMediaButton
              network='github'
              spacing='right'
              onPress={() => null}
                        />
          </View>
          <TextInput Type='rounded' placeholder='Username' />
          <TextInput Type='rounded' placeholder='Password' secureTextEntry />
          <GradientButton onPress={() => {
            this.props.navigation.goBack()
          }} Type='large' style={styles.save} text='LOGIN' />
          <View style={styles.footer}>
            <View style={styles.textRow}>
              <Text Type='primary3'>Don’t have an account?</Text>
              <FullButton Type='clear' text={'Sign up now'} />

            </View>
          </View>
        </View>
      </AvoidKeyboard>
    )
  }
}

let styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center'
        // backgroundColor: theme.colors.screen.base
  },
  image: {
    resizeMode: 'cover',
    marginBottom: scaleVertical(10)
  },
  container: {
    paddingHorizontal: 17,
    paddingBottom: scaleVertical(22),
    alignItems: 'center',
    flex: -1
  },
  footer: {
    justifyContent: 'flex-end',
    flex: 1
  },
  buttons: {
    flexDirection: 'row',
    marginBottom: scaleVertical(24)
  },
  button: {
    marginHorizontal: 14
  },
  save: {
    marginVertical: 9
  },
  textRow: {
    justifyContent: 'center',
    flexDirection: 'row'
  }
})
