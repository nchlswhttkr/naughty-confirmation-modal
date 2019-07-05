import React, { Component } from 'react'
import { bool, func } from 'prop-types'

import { withStyles } from '@material-ui/core/styles'

import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
  TextField
} from '@material-ui/core'

const styles = theme => ({
  promptStyle: {
    textAlign: 'center',
    fontWeight: 700,
    margin: '16px 0'
  }
})

const originalPrompt = 'abcde'

class NaughtyModal extends Component {
  constructor(props) {
    super(props)
    this.state = {
      prompt: 'abcde',
      input: ''
    }
  }

  handleInputChange = input => {
    let f = ''
    for (let i = 0; i < input.length; i++) {
      f += 'f'
    }
    this.setState({
      prompt: originalPrompt + f,
      input
    })
  }

  render() {
    const {
      open,
      onClose,
      classes: { promptStyle }
    } = this.props
    const { prompt, input } = this.state
    return (
      <Dialog open={open}>
        <DialogTitle>Confirm Action</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please type out the following line to confirm your action and close
            the Dialog.
          </DialogContentText>
          <DialogContentText classes={{ root: promptStyle }}>
            {prompt}
          </DialogContentText>
          <TextField
            onChange={e => this.handleInputChange(e.target.value)}
            autoFocus
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

export default withStyles(styles)(NaughtyModal)
