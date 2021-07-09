// 使用主题样式功能
import React from 'react';
import { css } from '@emotion/core';
import { useTheme } from 'emotion-theming';

// 第一种方式
const primaryColor = props => css`
  color: ${props.colors.primary}
`

function App() {
  // 第二种方式
  // const primaryColor = css({
  //   color: useTheme().colors.primary
  // })
  console.log( useTheme() );
  return <div css={primaryColor}>App works</div>;
}

export default App;

