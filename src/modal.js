import React, { Component } from 'react'
import { bool, func, string } from 'prop-types'

import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
  TextField
} from 'material-ui'

class NaughtyModal extends Component {
  constructor(props) {
    super(props)
    this.state = {
      prompt: 'abcde',
      input: ''
    }
  }

  handleInputChange = input => {
    const { prompt } = this.state
    if (prompt.length - input.length < 3) {
      this.setState({
        prompt: prompt,
        input
      })
    } else {
      this.setState({
        input
      })
    }
  }

  render() {
    const { open, onClose } = this.props
    const { prompt, input } = this.state
    return (
      <Dialog open={open}>
        <DialogTitle>Confirm Action</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please type out the following line to confirm your action and close
            the Dialog
          </DialogContentText>
          <DialogContentText>{prompt}</DialogContentText>
          <TextField
            onChange={e => this.handleInputChange(e.target.value)}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button disabled={prompt !== input} onClick={onClose}>
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    )
  }
}

NaughtyModal.propTypes = {
  open: bool.isRequired,
  onClose: func.isRequired
}

export default NaughtyModal
