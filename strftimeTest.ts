import { strftime } from './strftime'

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


assert("%Y should return full year", strftime(date, "%Y") === '2009');
assert("%d should return day", strftime(date, "%d") === '05');
assert("%y should return two digit year", strftime(date, "%y") === '09');
assert("%F should return full year - month - date", strftime(date, "%F") === '2009-12-05');
assert("%D should return month/day/two digits of year ", strftime(date, "%D") === '12/05/09');
assert("%k should return k", strftime(date, "%k") === 'k');





