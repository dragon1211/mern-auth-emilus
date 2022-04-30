import * as React from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import { Badge } from 'antd';
import classNames from 'classnames';
import * as AntdIcons from '@ant-design/icons';

const allIcons = AntdIcons;

const CopyableIcon = ({
  name,
  isNew,
  justCopied,
  onCopied,
  theme,
}) => {
  const className = classNames({
    copied: justCopied === name,
    [theme]: !!theme,
  });
  return (
    <CopyToClipboard text={`<${name} />`} onCopy={(text) => onCopied(name, text)}>
      <li className={className}>
        {React.createElement(allIcons[name])}
        <span className="anticon-class">
          <Badge dot={isNew}>{name}</Badge>
        </span>
      </li>
    </CopyToClipboard>
  );
};

export default CopyableIcon;
