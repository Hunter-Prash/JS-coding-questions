function occ(str) {
    let obj = {};
    str.split("").forEach((x) => {
        if (obj.hasOwnProperty(x) === false) { 
            obj[x] = 1;
        } else {
            obj[x]++;
        }
    });
    return obj;
}

let ans = occ("HIII");
console.log(ans);
