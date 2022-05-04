const isPalindrome = (str) => {
    let na = Array.from(str);
    let ra = na.reverse();
    let check = arraysEqual(na,ra)
    console.log(check);    
}

function arraysEqual(a1,a2) {
    return JSON.stringify(a1)==JSON.stringify(a2);
}

isPalindrome("test");