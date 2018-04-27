# MaterialR Toolbar

**@materialr/toolbar**

[![Build Status](https://travis-ci.org/materialr/toolbar.svg?branch=master)](https://travis-ci.org/materialr/toolbar)
[![Coverage Status](https://coveralls.io/repos/github/materialr/toolbar/badge.svg?branch=master)](https://coveralls.io/github/materialr/toolbar?branch=master)
[![NSP Status](https://nodesecurity.io/orgs/materialr/projects/a7f5afc0-c59f-46b3-a146-ebbb7eced9ee/badge)](https://nodesecurity.io/orgs/materialr/projects/a7f5afc0-c59f-46b3-a146-ebbb7eced9ee)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

Material Toolbar implementation for React

## Installation

```sh
$ npm install --save @materialr/toolbar
```

## Demo

A full demo is available on the [MaterialR website](https://materialr.github.io/components/toolbar)
showcasing all variants.

## Components

### Default export

```js
import Toolbar from '@materialr/toolbar';
```

**Props**

| Prop               | Type           | Required | Default   | Description                                            |
| ------------------ | -------------- | -------- | --------- | ------------------------------------------------------ |
| `children`         | node           | Yes      | N/A       | The child elements to render inside the list           |
| `className`        | string         | No       | undefined | Additional classNames to add                           |
| `fixed`            | bool           | No       | false     | Whether the toolbar s fixed at the top of the screen   |
| `fixedLastRowOnly` | bool           | No       | false     | Whether the last row is fixed at the top of the screen |
| `flexible`         | enum (1/2/3/4) | No       | 1         | The amount of rows that the flexible toolbar spans     |
| `waterfall`        | bool           | No       | false     | Whether this is a waterfall toolbar                    |

### Named exports

```js
import { ToolbarIcon } from '@materialr/toolbar';
```

**Props**

| Prop        | Type   | Required | Default   | Description                              |
| ----------- | ------ | -------- | --------- | ---------------------------------------- |
| `className` | string | No       | undefined | Additional classNames to add             |
| `icon`      | string | Yes      | N/A       | The material icon to render              |
| `menuIcon`  | bool   | No       | false     | Whether the icon is the main menu icon   |
| `onClick`   | func   | No       | undefined | The click handler for the icon           |
| `title`     | string | Yes      | N/A       | The title attribute for the icon element |

```js
import { ToolbarRow } from '@materialr/toolbar';
```

**Props**

| Prop        | Type        | Required | Default   | Description                   |
| ----------- | ----------- | -------- | --------- | ----------------------------- |
| `children`  | node        | Yes      | N/A       | The children to render within |
| `className` | string      | No       | undefined | Additional classNames to add  |

```js
import { ToolbarSection } from '@materialr/toolbar';
```

**Props**

| Prop          | Type        | Required | Default   | Description                                                     |
| ------------- | ----------- | -------- | --------- | --------------------------------------------------------------- |
| `alignEnd`    | bool        | No       | false     | Whether to align the section contents to the end                |
| `alignStart`  | bool        | No       | false     | Whether to align the section contents to the start              |
| `children`    | node        | Yes      | N/A       | The children to render within                                   |
| `className`   | string      | No       | undefined | Additional classNames to add                                    |
| `shrinkToFit` | bool        | No       | false     | Whether the section should shrink to make other sections larger |

```js
import { ToolbarTitle } from '@materialr/toolbar';
```

**Props**

| Prop        | Type        | Required | Default   | Description                   |
| ----------- | ----------- | -------- | --------- | ----------------------------- |
| `children`  | node        | Yes      | N/A       | The children to render within |
| `className` | string      | No       | undefined | Additional classNames to add  |
