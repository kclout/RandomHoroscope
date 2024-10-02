// user inputs //
const userInfo = {
    userName: 'User',
    _birthMonth: 0,
    _birthDay: 0,

    set birthMonth(newBirthMonth) {
        if(typeof newBirthMonth === 'number' && newBirthMonth > 0 && newBirthMonth <= 12) {
            this._birthMonth = newBirthMonth;
        }
        else {
            console.log('Please enter a number between 1 - 12.');
        }
    },
    get birthMonth() {
        return this._birthMonth;
    },
    
    set birthDay(newBirthDay) {
        if(typeof newBirthDay === 'number' && newBirthDay >= 1 && newBirthDay <= 31) {
            this._birthDay = newBirthDay;
        }
        else {
            console.log('Please enter a number between 1 - 31.');
        }
    },
    get birthDay() {
        return this._birthDay;
    }
}

// greetings //
const greeting = ['g1 ', 'g2 ', 'g3 ', 'g4 ', 'g5 ', 'g6 ', 'g7 ', 'g8 ', 'g9 ', 'g10 '];

// fortunes //
const fortune = [['gf1', 'gf2', 'gf3', 'gf4', 'gf5', 'gf6', 'gf7', 'gf8', 'gf9', 'gf10'], ['bf1', 'bf2', 'bf3', 'bf4', 'bf5', 'bf6', 'bf7', 'bf8', 'bf9', 'bf10'], ['mf1', 'mf2', 'mf3', 'mf4', 'mf5', 'mf6', 'mf7', 'mf8', 'mf9', 'mf10']];

// advice //
const advice = [['ga1', 'ga2', 'ga3', 'ga4', 'ga5', 'ga6', 'ga7', 'ga8', 'ga9', 'ga10'], ['ba1', 'ba2', 'ba3', 'ba4', 'ba5', 'ba6', 'ba7', 'ba8', 'ba9', 'ba10'], ['ma1', 'ma2', 'ma3', 'ma4', 'ma5', 'ma6', 'ma7', 'ma8', 'ma9', 'ma10']];

// goodbye //
const goodbye = ['gb1', 'gb2', 'gb3', 'gb4', 'gb5', 'gb6', 'gb7', 'gb8', 'gb9', 'gb10'];

// determining star sign //
const findStarSign = (arr) => {
    let starSign = '';
    switch(arr.birthMonth) {
        case 1:
            if(arr.birthDay >= 1 && arr.birthDay <= 19) {
                starSign = 'Capricorn';
            }
            else if(arr.birthDay >= 20 && arr.birthDay <= 31) {
                starSign = 'Aquarius';
            }
            break;
        case 2:
            if(arr.birthDay >= 1 && arr.birthDay <= 18) {
                starSign = 'Aquarius';
            }
            else if(arr.birthDay >= 19 && arr.birthDay <= 29) {
                starSign = 'Pisces';
            }
            break;
        case 3:
            if(arr.birthDay >= 1 && arr.birthDay <= 20) {
                starSign = 'Pisces';
            }
            else if(arr.birthDay >= 21 && arr.birthDay <= 31) {
                starSign = 'Aries';
            }
        case 4:
            if(arr.birthDay >= 1 && arr.birthDay <= 19) {
                starSign = 'Aries';
            }
            else if(arr.birthDay >= 20 && arr.birthDay <= 30) {
                starSign = 'Taurus';
            }
            break;
        case 5:
            if(arr.birthDay >= 1 && arr.birthDay <= 20) {
                starSign = 'Taurus';
            }
            else if(arr.birthDay >= 21 && arr.birthDay <= 31) {
                starSign = 'Gemini';
            }
            break;
        case 6:
            if(arr.birthDay >= 1 && arr.birthDay <= 20) {
                starSign = 'Gemini';
            }
            else if(arr.birthDay >= 21 && arr.birthDay <= 30) {
                starSign = 'Cancer';
            }
            break;
        case 7:
            if(arr.birthDay >= 1 && arr.birthDay <= 22) {
                starSign = 'Cancer';
            }
            else if(arr.birthDay >= 23 && arr.birthDay <= 31) {
                starSign = 'Leo';
            }
            break;
        case 8:
            if(arr.birthDay >= 1 && arr.birthDay <= 22) {
                starSign = 'Leo';
            }
            else if(arr.birthDay >= 23 && arr.birthDay <= 31) {
                starSign = 'Virgo';
            }
            break;
        case 9:
            if(arr.birthDay >= 1 && arr.birthDay <= 22) {
                starSign = 'Virgo';
            }
            else if(arr.birthDay >= 23 && arr.birthDay <= 30) {
                starSign = 'Libra';
            }
            break;
        case 10:
            if(arr.birthDay >= 1 && arr.birthDay <= 22) {
                starSign = 'Libra';
            }
            else if(arr.birthDay >= 23 && arr.birthDay <= 31) {
                starSign = 'Scorpio';
            }
            break;
        case 11:
            if(arr.birthDay >= 1 && arr.birthDay <= 21) {
                starSign = 'Scorpio';
            }
            else if(arr.birthDay >= 22 && arr.birthDay <= 30) {
                starSign = 'Sagitarius';
            }
            break;
        case 12:
            if(arr.birthDay >= 1 && arr.birthDay <= 22) {
                starSign = 'Sagitarius';
            }
            else if(arr.birthDay >= 23 && arr.birthDay <= 31) {
                starSign = 'Capricorn';
            }
            break;
        default:
            starSign = null;
    }
    if(!starSign) {
        return 'Your fate is unclear...perhaps an error blocks your path to guidance?';
    }
    else {
        return starSign;
    }
}

// choosing a random number //
const randNum = arr => {
    return arr[Math.floor(Math.random() * arr.length)];
}

/*userInfo.birthDay = 10;
userInfo.birthMonth = 2;
console.log(`${userInfo.birthMonth}/${userInfo.birthDay}`);
console.log(findStarSign(userInfo));
console.log(randNum(greeting));*/
