module.exports = function (subject, override) {
    if (typeof subject !== "string") return false;
    let hasOverride = false;
    if (typeof override === "object" && !(override instanceof Array))
        hasOverride = true;

    let alphabet = {
        a: "4", b: "ß", c: "(", d: "|)", e: "3", f: "|=", g: "6", h: "|-|", i: "|", j: "_|",
        k: "|<", l: "|_", m: "|\\/|", n: "|\\|", o: "0", p: "|°", q: "0,", r: "|2", s: "$",
        t: "7", u: "|_|", v: "\\/", w: "\\/\\/", x: "><", y: "`/", z: "2"
    }

    return [...subject].map(char => {
        let c = String(char).toLowerCase();
        if (hasOverride && override[c]) return override[c];
        if (alphabet[c]) return alphabet[c];
        return char;
    }).join("");
}
