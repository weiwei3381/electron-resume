import React from 'react';
import './index.less';

interface IProps {
  /**
   * @description 标题
   */
  text: string;
  /**
   * @description 样式
   */
  styles?: React.CSSProperties;
}

function Title({ text, styles }: IProps) {
  return (
    <div style={styles} styleName="title">
      {text} in here
    </div>
  );
}

export default Title;
