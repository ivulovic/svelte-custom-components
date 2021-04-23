## What is this?

This is a template for making svelte custom components.

## How this works?

- You make Svelte component
- Do the build
- Take component and use into your project

## Example
You can find it in public/index.html

## How components get exported?

Through rollup config you can export components in two way:
  - 1
    - dist/component-name1/index.js
    - dist/component-name2/index.js
    - dist/component-name3/index.js
  - 2
    - dist/index.js

With first option you inject svelte and dependecies into each file, so minimal file size will be 3kb (because svelte itself is somewhere around 3kb).

Second option is probably better because you export only once svelte, but when you import you import whole script at once.
