import React from 'react'
import { BackHandler, ScrollView, View, Image, TouchableOpacity, ViewStyle } from 'react-native'
import {
  Left, Right, Body, Button, Title
} from 'native-base'
import { NavigationActions } from 'react-navigation'
import { connect } from 'react-redux'
import PurpleGradient from '../Components/PurpleGradient'
import styles from './Styles/MainContainerStyle'
import { Images, Colors } from '../Themes'
import GradientHeader from '../Components/GradientHeader'


function ContainerWithScrolling(props) {
  return (
    <ScrollView>
      <View style={[styles.container, props.style]}>
        {props.children}
      </View>
    </ScrollView>
  )
}

function ContainerWithoutScrolling(props) {
  return (
    <View style={[styles.container, props.style]}>
      {props.children}
    </View>
  )
}

function Navbar(props) {
  const { headerLeft, goBack, headerTitle, headerRight } = props;

  return (
    <GradientHeader>
      <View style={[styles.header]}>
        <Left>
          {
            headerLeft ? headerLeft : (
              <TouchableOpacity style={styles.backButton} onPress={goBack || this.goBack}>
                <Image style={styles.backButtonIcon} source={Images.arrowIcon} />
              </TouchableOpacity>
            )
          }
        </Left>
        <Body>
          <Title style={{ color: Colors.snow }}>{headerTitle || 'Missing title'}</Title>
        </Body>
        <Right>
          {headerRight && headerRight}
        </Right>
      </View>
    </GradientHeader>
  )
}

interface MainContainerProps {
  navigation?: { dispatch(param): void }
  header?: { headerLeft?: React.ReactElement<any>; headerTitle?: string; goBack?(): void; headerRight?: React.ReactElement<any>; }
  children?: any[]
  scrollEnabled?: boolean
  style?: ViewStyle;
  theme: string
}

class MainContainer extends React.Component<MainContainerProps> {
  static defaultProps = {
    navigation: null,
    header: {
      headerLeft: null,
      headerTitle: 'Missing title',
      goBack: () => alert('Missing handler'),
      headerRight: null
    },
    children: null,
    scrollEnabled: false,
    style: null,
    theme: 'Purple'
  };

  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.goBack)
  }

  render() {
    const { header, scrollEnabled, children, style, theme } = this.props;

    return (
      <PurpleGradient style={[styles.linearGradient, { flex: 1 }]}>
        {header && <Navbar {...header} />}
        {scrollEnabled ?
          <ContainerWithScrolling style={style}>{children}</ContainerWithScrolling>
          :
          <ContainerWithoutScrolling style={style}>{children}</ContainerWithoutScrolling>
        }
      </PurpleGradient>
    );
  }

  goBack = () => {
    const { navigation, style } = this.props;
    navigation.dispatch(NavigationActions.back())
  }

  renderScrollView = (children, style) => (
    <ScrollView>
      <View style={[styles.container, style]}>
        {children}
      </View>
    </ScrollView>
  )
}

const mapStateToProps = (state) => {
  return {
    theme: state.theme.name
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer)
