import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import styles from './Layout.module.css';
import Toolbar from '../Toolbar/Toolbar';
import Sidebar from '../Sidebar/Sidebar';

export default class Layout extends Component {
  state = {
    showSideBar: false,
  }
  sideBarClosedHandler = () => {
    this.setState({
      showSideBar: false,
    })
  }

  sideBarOpenHandler = () => {
    this.setState({
      showSideBar: true,
    })
  }


  render() {
    return (
      <Aux>
        <Sidebar
          closed={this.sideBarClosedHandler}
          open={this.state.showSideBar}
        />
        <Toolbar
          open={this.sideBarOpenHandler}
        />
        <main className={styles.Content}>
          {this.props.children}
        </main>
      </Aux>
    )
  }
}
