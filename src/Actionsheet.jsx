/**
 * Actionsheet of milk-component
 * @author caiyongmin
 *
 * Copyright 2017-2019, All rights reserved.
 */


import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import Mask from 'milk-mask';

import './index.scss';

class Actionsheet extends Component {
  static propTypes = {
    show: PropTypes.bool,
    className: PropTypes.string,
    actions: PropTypes.array,
    onHideSheet: PropTypes.func,
  }

  static defaultProps = {
    show: false,
    className: '',
    actions: [],
  }

  constructor(props) {
    super(props);
    this.state = {
      show: this.props.show,
    };
    this.onHideSheet = this.props.onHideSheet && this.props.onHideSheet.bind(this);
    this.hideSheet = this.hideSheet.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ show: nextProps.show });
  }

  render() {
    const { className } = this.props;
    const { show } = this.state;
    const toggleClassName = classnames(
      'milkui-actionsheet',
      { 'milkui-actionsheet__toggle': show },
      className
    );
    const maskClassName = classnames(
      'milkui-actionsheet__mask',
      { 'milkui-actionsheet__mask_show': show }
    );

    return (
      <div>
        <Mask className={maskClassName} onClick={this.hideSheet} />
        <div className={toggleClassName}>
          {this.renderActions()}
          <div className="milkui-actionsheet__menu">
            <div className="milkui-actionsheet__cell" onClick={this.hideSheet}>取消</div>
          </div>
        </div>
      </div>
    );
  }

  renderActions() {
    const { actions } = this.props;
    return (
      <div className="milkui-actionsheet__action">
        {actions.map((action) => {
          const { label, ...others } = action;
          return (
            <div className="milkui-actionsheet__cell"
              key={label} {...others}
            >{label}</div>
          );
        })}
      </div>
    );
  }

  hideSheet() {
    this.setState({ show: false }, () => {
      if (this.onHideSheet) {
        this.onHideSheet();
      }
    });
  }
}

export default Actionsheet;
