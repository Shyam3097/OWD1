function timeConversion(s) {
    // Write your code here
    let zone = s.slice(-2);
    let hour = s.slice(0,2);
    let time = "";
    
    if(hour == "12" && zone == "AM"){
        time += "00";
    }else if(hour == "12" && zone == "PM"){
        time += "12";
    }else if(zone == "PM"){
        let g = parseInt(s[0]+s[1])+12;
        let j = Math.abs(g).toString();
        time += j;
    }else{
        time += hour;
    }
    
    for (let i = 2; i<s.length-2; i++){
        time += s[i];
    }
    return time;
}

let s = '12:05:45AM'
console.log(timeConversion(s));