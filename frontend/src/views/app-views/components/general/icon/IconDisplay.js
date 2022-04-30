import React, { Component } from 'react'
import { FilledIcon, OutlinedIcon, TwoToneIcon } from './themeIcons';
import { categories } from './fields';
import { Radio, Input } from 'antd';
import Category from './Category';
import debounce from 'lodash/debounce';
import Icon, * as AntdIcons from '@ant-design/icons';

const allIcons = AntdIcons;

export const ThemeType = {
  Filled: 'Filled',
  Outlined: 'Outlined',
  TwoTone: 'TwoTone',
}

class IconDisplay extends Component {
  static categories = categories;

  static newIconNames = [];

  state = {
    theme: ThemeType.Outlined,
    searchKey: '',
  };

  constructor(props) {
    super(props);
    this.handleSearchIcon = debounce(this.handleSearchIcon, 300);
  }

  handleChangeTheme = e => {
    this.setState({
      theme: e.target.value,
    });
  };

  handleSearchIcon = (searchKey) => {
    this.setState(prevState => ({
      ...prevState,
      searchKey,
    }));
  };

  renderCategories() {
    const { searchKey = '', theme } = this.state;

    return Object.keys(categories)
      .map((key) => {
        let iconList = categories[key];
        if (searchKey) {
          iconList = iconList.filter(iconName =>
            iconName.toLowerCase().includes(searchKey.toLowerCase()),
          );
        }

        return {
          category: key,
          icons: iconList.map(iconName => iconName + theme).filter(iconName => allIcons[iconName]),
        };
      })
      .filter(({ icons }) => !!icons.length)
      .map(({ category, icons }) => (
        <Category
          key={category}
          title={category}
          theme={theme}
          icons={icons}
          newIcons={IconDisplay.newIconNames}
        />
      ));
  }

  render() {
    return (
      <>
        <div className="d-md-flex">
          <Radio.Group
            value={this.state.theme}
            onChange={this.handleChangeTheme}
            buttonStyle="solid"
          >
            <Radio.Button value={ThemeType.Outlined}>
              <Icon component={OutlinedIcon} /> outlined
            </Radio.Button>
            <Radio.Button value={ThemeType.Filled}>
              <Icon component={FilledIcon} /> filled
            </Radio.Button>
            <Radio.Button value={ThemeType.TwoTone}>
              <Icon component={TwoToneIcon} /> two-tone
            </Radio.Button>
          </Radio.Group>
          <div className="mt-3 mt-md-0 ml-md-3 d-inline-flex flex-fill">
            <Input.Search
              placeholder='Search icon here'
              allowClear
              onChange={e => this.handleSearchIcon(e.currentTarget.value)}
              autoFocus
            />
          </div>
        </div>
        {this.renderCategories()}
      </>
    );
  }
}

export default IconDisplay
