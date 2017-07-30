# milkui-actionsheet

> 从底部弹出的模态框，提供和当前场景相关的 2 个以上的操作动作，也支持提供标题和描述。内置固定的展示样式、不支持特别灵活的修改。

## Overview

![image](https://user-images.githubusercontent.com/11053605/28750873-9b808ecc-752a-11e7-80a0-e198dd84392c.png)

## Example

```js
import ActionSheet from 'milkui-actionsheet';

const { show } = this.state;
const actions = [
  { label: '控制台打印1', onClick: () => { console.info('1'); } },
  { label: '控制台打印2', onClick: () => { console.info('2'); } },
];

<ActionSheet show={show} actions={actions} />
```

## Properties

| Property | Type | Description | Default |
| -- | -- | -- | -- |
| className | String | 自定义的 class 类名 | '' |
| actions | Array | 动作项数组，label 属性必填 | [] |
| onHideSheet | Function | 关闭动作面板时的回调函数 | false |
| show | Boolean | 是否显示 | false |

## Develop

```bash
cnpm i milk-dev -g    # dev tool

cnpm install

npm start
```

## Links

- [Issues](https://github.com/milk-ui/milkui-actionsheet/issues)
