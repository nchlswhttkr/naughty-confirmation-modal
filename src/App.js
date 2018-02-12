import React, { Component } from 'react'

import { Button } from 'material-ui'

import NaughtyModal from './modal'

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
    const { open } = this.state
    return (
      <div>
        <Button variant="raised" onClick={() => this.setIsModalOpen(true)}>
          Confirm Action
        </Button>
        <NaughtyModal open={open} onClose={() => this.setIsModalOpen(false)} />
      </div>
    )
  }
}

export default App
