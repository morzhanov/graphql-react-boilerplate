import React from 'react'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button'
import ClickAwayListener from '@material-ui/core/ClickAwayListener'
import Grow from '@material-ui/core/Grow'
import Paper from '@material-ui/core/Paper'
import Popper from '@material-ui/core/Popper'
import MenuItem from '@material-ui/core/MenuItem'
import MenuList from '@material-ui/core/MenuList'
import { withStyles } from '@material-ui/core/styles'
import { Link } from 'react-router-dom'
import { Urls } from '../../router/routeUrls'
import { logout } from '../../utils/heplers'
import { inject } from 'mobx-react'

const toggleButtonStyles = {
  position: 'absolute',
  top: 8,
  right: '10px'
}

@inject('routerStore')
class Header extends React.Component {
  state = {
    open: false
  }

  handleToggle = () => {
    this.setState(state => ({ open: !state.open }))
  }

  handleLogout = () => {
    this.handleClose()
    logout()
    this.props.routerStore.push(Urls.auth.login)
  }

  handleClose = event => {
    this.setState({ open: false })
  }

  render() {
    const { open } = this.state

    return (
      <div>
        <div>
          <Button
            style={toggleButtonStyles}
            buttonRef={node => (this.anchorEl = node)}
            onClick={this.handleToggle}
          >
            <i className="material-icons">more_vert</i>
          </Button>
          <Popper open={open} anchorEl={this.anchorEl} transition disablePortal>
            {({ TransitionProps, placement }) => (
              <Grow
                {...TransitionProps}
                id="menu-list-grow"
                style={{
                  transformOrigin:
                    placement === 'bottom' ? 'center top' : 'center bottom'
                }}
              >
                <Paper>
                  <ClickAwayListener onClickAway={this.handleClose}>
                    <MenuList>
                      <MenuItem onClick={this.handleClose}>
                        <Link to={Urls.home}>Home</Link>
                      </MenuItem>
                      <MenuItem onClick={this.handleClose}>
                        <Link to={Urls.posts.all}>Posts</Link>
                      </MenuItem>
                      <MenuItem onClick={this.handleClose}>
                        <Link to={Urls.profile}>Profile</Link>
                      </MenuItem>
                      <MenuItem onClick={this.handleLogout}>Logout</MenuItem>
                    </MenuList>
                  </ClickAwayListener>
                </Paper>
              </Grow>
            )}
          </Popper>
        </div>
      </div>
    )
  }
}

export default Header
