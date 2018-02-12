import React, { Component } from 'react'

import { withStyles } from 'material-ui/styles'
import { Button, Paper, Typography } from 'material-ui'

import NaughtyModal from './modal'

const styles = theme => ({
  root: {
    boxSizing: 'border-box',
    margin: '64px auto 0',
    width: '40%',
    minWidth: 256,
    padding: '16px'
  },
  title: {
    textAlign: 'center'
  },
  button: {
    margin: '16px auto'
  }
})

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false
    }
  }

  setIsModalOpen = open => {
    this.setState({ open })
  }

  render() {
    const { classes: { root, title, button } } = this.props
    const { open } = this.state
    return (
      <Paper classes={{ root: root }}>
        <Typography classes={{ root: title }} variant="headline">
          Try out this confirmation modal!
        </Typography>
        <Button
          classes={{ root: button }}
          variant="raised"
          onClick={() => this.setIsModalOpen(true)}
          size="large"
          fullWidth
        >
          Confirm Action
        </Button>
        <NaughtyModal open={open} onClose={() => this.setIsModalOpen(false)} />
      </Paper>
    )
  }
}

export default withStyles(styles)(App)
