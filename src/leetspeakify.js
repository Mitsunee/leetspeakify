module.exports = function (subject, override, useDefault) {
    // reject non-string argument
    if (typeof subject !== "string") return false;

    // set defaults
    let hasOverride = false,
        hasDefault = true;

    // if override exists and is non-array object enable override
    if (typeof override === "object" && !(override instanceof Array))
        hasOverride = true;

    // if useDefault argument is true disable default alphabet
    if (useDefault === false) hasDefault = false;

    // default alphabet
    let alphabet = {
        a: "4", b: "ß", c: "(", d: "|)", e: "3", f: "|=", g: "6", h: "|-|", i: "|", j: "_|",
        k: "|<", l: "|_", m: "|\\/|", n: "|\\|", o: "0", p: "|°", q: "0,", r: "|2", s: "$",
        t: "7", u: "|_|", v: "\\/", w: "\\/\\/", x: "><", y: "`/", z: "2"
    }

    return [...subject].map(char => { // split subject into array and then map
        let c = String(char).toLowerCase(); // normalize to lowercase
        if (hasOverride && override[c]) return override[c]; // return override if set
        if (hasOverride && override[c] === false) return char; // return char if override is false
        if (hasDefault && alphabet[c]) return alphabet[c]; // return default alphabet if not disabled
        return char; // if neither of the above applied return char
    }).join(""); // re-join the mapped subject array
}
