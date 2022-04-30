import React, { Component } from 'react'
import { message } from 'antd';
import CopyableIcon from './CopyableIcon';

class Category extends Component {

  copyId = '';

  state = {
    justCopied: null,
  };

  componentWillUnmount() {
    window.clearTimeout(this.copyId);
  }

  onCopied = (type, text) => {
    message.success(
      <span>
        <code className="copied-code">{text}</code> copied 🎉
      </span>,
    );
    this.setState({ justCopied: type }, () => {
      this.copyId = window.setTimeout(() => {
        this.setState({ justCopied: null });
      }, 2000);
    });
  };

  render() {
    const {
      icons,
      title,
      newIcons,
      theme,
    } = this.props;
    const items = icons.map(name => {
      return (
        <CopyableIcon
          key={name}
          name={name}
          theme={theme}
          isNew={newIcons.indexOf(name) >= 0}
          justCopied={this.state.justCopied}
          onCopied={this.onCopied}
        />
      );
    });

    return (
      <div>
        <h3 className="mt-5 mb-2">
					<span className="text-capitalize">{title} </span>
					<span>Icons</span>
				</h3>
        <ul className="anticons-list">{items}</ul>
      </div>
    );
  }
}

export default Category;
