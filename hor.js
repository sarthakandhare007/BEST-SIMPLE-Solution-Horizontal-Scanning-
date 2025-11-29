function longestCommonPrefix(strs) {
    if (strs.length === 0) return "";

    let prefix = strs[0]; // take first word as base

    for (let i = 1; i < strs.length; i++) {
        while (strs[i].indexOf(prefix) !== 0) { 
            // reduce prefix until match
            prefix = prefix.slice(0, -1); 
            if (prefix === "") return "";
        }
    }

    return prefix;
}
