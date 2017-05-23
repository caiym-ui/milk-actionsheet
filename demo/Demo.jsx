/**
 * Actionsheet of milkui-component
 * @author caiyongmin
 *
 * Copyright 2017-2019, All rights reserved.
 */

import React, { Component } from 'react';

import Actionsheet from './../src';
import './Demo.scss';

class Demo extends Component {
  constructor(props) {
    super(props);
    this.state = { show: false };
    this.handlerClick = this.handlerClick.bind(this);
  }

  render() {
    const { show } = this.state;
    const actions = [
      { label: '控制台打印1', onClick: () => { console.info('1'); } },
      { label: '控制台打印2', onClick: () => { console.info('2'); } },
    ];

    return (
      <div className="demo-panel">
        <div className="demo-title">Milk Ui</div>
        <div className="demo-description">
          Demo Page 😀.
        </div>
        <div className="demo-item">
          <div className="milkui-btn milkui-btn_default"
            onClick={this.handlerClick}
          >iOS ActionSheet</div>
          <Actionsheet show={show} actions={actions} />
        </div>
      </div>
    );
  }

  handlerClick() {
    this.setState({ show: true });
  }
}

export default Demo;
