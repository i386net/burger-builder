import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import styles from './Layout.module.css';
import Toolbar from '../Toolbar/Toolbar';
import Sidebar from '../Sidebar/Sidebar';

export default class Layout extends Component {
  state = {
    showSideBar: true,
  }
  sideBarClosedHandler = () => {
    this.setState({
      showSideBar: false,
    })
  }


  render() {
    return (
      <Aux>
        <Sidebar
          closed={this.sideBarClosedHandler}
          open={this.state.showSideBar} />
        <Toolbar />
        <main className={styles.Content}>
          {this.props.children}
        </main>
      </Aux>
    )
  }
}
