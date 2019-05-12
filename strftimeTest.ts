import './strftime';

const date = new Date(2009, 11, 5);
let count: number = 0;


const assert = (message, expr) => {
    if (!expr) {
        console.log("Failed: " + message);        
    } else {
        console.log("Passed: " + message);        
    }
    count++;
    return true;
}


assert("%Y should return full year", date.strftime("%Y") === '2009');
assert("%d should return day", date.strftime("%d") === '05');
assert("%y should return two digit year", date.strftime("%y") === '09');
assert("%F should return full year - month - date", date.strftime("%F") === '2009-12-05');
assert("%D should return month/day/two digits of year ", date.strftime("%D") === '12/05/09');
assert("%k should return k", date.strftime("%k") === 'k');





