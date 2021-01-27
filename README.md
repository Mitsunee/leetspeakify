# leetspeakify
Convert String into leetspeak or any custom alphabet

Note: This is mostly a joke project. I'm using it as an example project to learn about publishing on npm.

# Install

`npm install @mitsunee/leetspeakify`

# Overview

```
string leetspeakify(string subject [, object override [, boolean useDefault]])
```

**Parameters**:

- `subject` (String): The string to leetspeakify
- `override` (Object, optional): Custom alphabet. Non-object values as well as Arrays are ignored.
- `useDefault` (Boolean, optional): *Default: `true`* Can be set to `false` to disable the default alphabet.

# Usage

```js
// import package
const leetspeakify = require("@mitsunee/leetspeakify");

// Convert to leetspeak
leetspeakify("Hello World!"); // |-|3|_|_0 \/\/0|2|_|)!

// Use custom alphabet override
leetspeakify("Hello World!", {e: "€"}) // |-|€|_|_0 \/\/0|2|_|)!

// Disable default alphabet per-character
leetspeakify("Hello World!", {e: false}) // |-|e|_|_0 \/\/0|2|_|)!

// Disable default alphabet completely
leetspeakify("Hello World!", {e: "€"}, false) // H€llo World!
```

# Changelog

- 1.0.3
    - Added `useDefault` argument to disable default alphabet with `false`
    - Added `false` as a possible value for 2nd argument, which disables that character in the default alphabet
- 1.0.2 & 1.0.1
    - Just me messing up my own commit history and figuring out `npm publish` (:
