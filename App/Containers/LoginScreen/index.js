import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Logo, Form, Wallpaper, ButtonSubmit, SignupSection } from './components'

export default class LoginScreen extends Component {
  render () {
    return (
      <Wallpaper>
        <Logo />
        <Form />
        <SignupSection />
        <ButtonSubmit navigation={this.props.navigation} />
      </Wallpaper>
    )
  }
}
