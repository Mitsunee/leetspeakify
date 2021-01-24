# leetspeakify
Convert String into leetspeak or any custom alphabet

# Install

`npm install @mitsunee/leetspeakify`

# Usage

```js
// import package
const leetspeakify = require("@mitsunee/leetspeakify");

// Convert to leetspeak
leetspeakify("Hello!"); // '|-|3|_|_0 \\/\\/0|2|_|)!'

// Use custom alphabet override
leetspeakify("Hello World!", {e: "€"}) // '|-|€|_|_0 \\/\\/0|2|_|)!'
```
