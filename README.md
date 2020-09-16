# 🧪 Mastercraft

Mastercraft is a design system crafted by a joint set of visual styles, components, and design assets extended continuously across all digital touch-points.

![GitHub](https://img.shields.io/github/license/bryancolosky/mastercraft)

## Overview 📒

![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/bryancolosky/mastercraft)
![GitHub language count](https://img.shields.io/github/languages/count/bryancolosky/mastercraft)
![GitHub top language](https://img.shields.io/github/languages/top/bryancolosky/mastercraft)

### Usage 📦

#### Visual foundations 🎨

**Project Directory**

```
.
├── src
│   ├── Color
│   │   └── index.js
│   └── Size
│       └── index.js
├── index.js
├── package.json
└── README.md
```

[Get Started](https://github.com/bryancolosky/mastercraft/blob/master/packages/foundations/README.md)

**npm**

[`@studiocraft/foundations`](https://www.npmjs.com/package/@studiocraft/foundations)

#### React components ⚛️

[![style: styled-components](https://img.shields.io/badge/style-%F0%9F%92%85%20styled--components-orange.svg?colorB=daa357&colorA=db748e)](https://github.com/styled-components/styled-components)

**Project Directory**

```
.
├── src
│   └── Text
│       └── index.js
├── index.js
├── package.json
└── README.md
```

[Get Started](https://github.com/bryancolosky/mastercraft/blob/master/packages/components/README.md)

**npm**

[`@studiocraft/components`](https://www.npmjs.com/package/@studiocraft/components)

### Development 🛠

#### Lerna 🐉

![Github lerna version](https://img.shields.io/github/lerna-json/v/bryancolosky/mastercraft)

**Lint packages in workspace**

`lerna run lint`

**Lint style packages in workspace**

`lerna run lint:styles`

**Build packages in workspace**

`lerna run build`

**Add package to workspace**

`lerna add PACKAGE --scope=PACKAGE`

**Delete package from workspace**

`lerna exec --yarn remove PACKAGE --scope=@org/PACKAGE`
