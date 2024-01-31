# vike-vanilla-extract-onRenderHtml-bug-538

https://github.com/vikejs/vike/issues/538#issuecomment-1920001208

## setup

clone 

```
git clone git@github.com:airtonix/vike-vanilla-extract-onRenderHtml-bug-538.git
cd vike-vanilla-extract-onRenderHtml-bug-538
```

setup node/yarn

```
# this installs asdf, and any asdf plugins then installs the right nodejs/yarn version
chmod +x ./setup.sh
./setup.sh
```

dependencies and run dev mode
```
yarn
yarn dev
```

## Observe

When running `yarn build`

1. ✔️ that on inspection of `dist/client/index.html` that there is in `html > head` one style tag for `global.css.ts` (this seems to contain the css for both `global.css.ts` and `PageShell.css.ts`)

## Problem

when running `yarn dev`: 

1. ✔️ that the `PageShell` component has generated css class names.
2. ✔️ that the `html` tag has generated css class names from the `global.css.ts`
3. 🛑 that on inspection of `html > head` with devtools, that there is one style tag for `PageShell.css.ts` (and it does not contain any css for `global.css.ts`)
4. 🛑 There is no style tag in `html > head` that refers to the `global.css.ts` as imported in ./renderer/+onRenderHtml.tsx`
5. 🛑 the page should have a red background

However: 

1. import `global.css.ts` into `PageShell.tsx` and now the above 🛑 are resolved.
