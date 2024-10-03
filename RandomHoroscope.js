// get user birthday //
const userInfo = {
    _birthMonth: 0,
    _birthDay: 0,
    set birthMonth(newBirthMonth) {
        if(typeof newBirthMonth === 'number' && newBirthMonth > 0 && newBirthMonth <= 12) {
            this._birthMonth = newBirthMonth;
        }
        else {
            console.log('Error finding birth month: Please enter a number between 1 - 12.');
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
            console.log('Error finding birth day: Please enter a number between 1 - 31.');
        }
    },
    get birthDay() {
        return this._birthDay;
    },
    myBirthday(month, day) {
        this.birthMonth = month;
        this.birthDay = day;
    }
}

// greetings //
const greeting = ['g1 ', 'g2 ', 'g3 ', 'g4 ', 'g5 ', 'g6 ', 'g7 ', 'g8 ', 'g9 ', 'g10 '];

// fortunes (good, bad, or neutral) //
const fortune = [['gf1', 'gf2', 'gf3', 'gf4', 'gf5', 'gf6', 'gf7', 'gf8', 'gf9', 'gf10'], ['bf1', 'bf2', 'bf3', 'bf4', 'bf5', 'bf6', 'bf7', 'bf8', 'bf9', 'bf10'], ['mf1', 'mf2', 'mf3', 'mf4', 'mf5', 'mf6', 'mf7', 'mf8', 'mf9', 'mf10']];

// advice (good, bad, or neutral) //
const advice = [['ga1', 'ga2', 'ga3', 'ga4', 'ga5', 'ga6', 'ga7', 'ga8', 'ga9', 'ga10'], ['ba1', 'ba2', 'ba3', 'ba4', 'ba5', 'ba6', 'ba7', 'ba8', 'ba9', 'ba10'], ['ma1', 'ma2', 'ma3', 'ma4', 'ma5', 'ma6', 'ma7', 'ma8', 'ma9', 'ma10']];

// goodbye //
const goodbye = ['gb1', 'gb2', 'gb3', 'gb4', 'gb5', 'gb6', 'gb7', 'gb8', 'gb9', 'gb10'];

// determine star sign //
const findStarSign = user => {
    let starSign = '';
    switch(user.birthMonth) {
        case 1:
            if(user.birthDay >= 1 && user.birthDay <= 19) {
                return starSign = 'Capricorn';
            }
            else if(user.birthDay >= 20 && user.birthDay <= 31) {
                return starSign = 'Aquarius';
            }
            break;
        case 2:
            if(user.birthDay >= 1 && user.birthDay <= 18) {
                return starSign = 'Aquarius';
            }
            else if(user.birthDay >= 19 && user.birthDay <= 29) {
                return starSign = 'Pisces';
            }
            break;
        case 3:
            if(user.birthDay >= 1 && user.birthDay <= 20) {
                return starSign = 'Pisces';
            }
            else if(user.birthDay >= 21 && user.birthDay <= 31) {
                return starSign = 'Aries';
            }
        case 4:
            if(user.birthDay >= 1 && user.birthDay <= 19) {
                return starSign = 'Aries';
            }
            else if(user.birthDay >= 20 && user.birthDay <= 30) {
                return starSign = 'Taurus';
            }
            break;
        case 5:
            if(user.birthDay >= 1 && user.birthDay <= 20) {
                return starSign = 'Taurus';
            }
            else if(user.birthDay >= 21 && user.birthDay <= 31) {
                return starSign = 'Gemini';
            }
            break;
        case 6:
            if(user.birthDay >= 1 && user.birthDay <= 20) {
                return starSign = 'Gemini';
            }
            else if(user.birthDay >= 21 && user.birthDay <= 30) {
                return starSign = 'Cancer';
            }
            break;
        case 7:
            if(user.birthDay >= 1 && user.birthDay <= 22) {
                return starSign = 'Cancer';
            }
            else if(user.birthDay >= 23 && user.birthDay <= 31) {
                return starSign = 'Leo';
            }
            break;
        case 8:
            if(user.birthDay >= 1 && user.birthDay <= 22) {
                return starSign = 'Leo';
            }
            else if(user.birthDay >= 23 && user.birthDay <= 31) {
                return starSign = 'Virgo';
            }
            break;
        case 9:
            if(user.birthDay >= 1 && user.birthDay <= 22) {
                return starSign = 'Virgo';
            }
            else if(user.birthDay >= 23 && user.birthDay <= 30) {
                return starSign = 'Libra';
            }
            break;
        case 10:
            if(user.birthDay >= 1 && user.birthDay <= 22) {
                return starSign = 'Libra';
            }
            else if(user.birthDay >= 23 && user.birthDay <= 31) {
                return starSign = 'Scorpio';
            }
            break;
        case 11:
            if(user.birthDay >= 1 && user.birthDay <= 21) {
                return starSign = 'Scorpio';
            }
            else if(user.birthDay >= 22 && user.birthDay <= 30) {
                return starSign = 'Sagitarius';
            }
            break;
        case 12:
            if(user.birthDay >= 1 && user.birthDay <= 22) {
                return starSign = 'Sagitarius';
            }
            else if(user.birthDay >= 23 && user.birthDay <= 31) {
                return starSign = 'Capricorn';
            }
            break;
        default:
            starSign = null;
    }
}

// choose a random number in an array //
const randArr = arr => {
    return arr[Math.floor(Math.random() * arr.length)];
}

// print fortune //
const createMyFortune = () => {
    let myStarSign = findStarSign(userInfo);
    let myGreeting = randArr(greeting);
    // determine if fortune is good, bad, or neutral and chooses corresponding array //
    let fortuneType = randArr(fortune);
    let myFortune = randArr(fortuneType);
    // determine if advice given is for good, bad, or neutral fortune given fortune type //
    let adviceType = fortune.indexOf(fortuneType);
    let myAdvice = randArr(advice[adviceType]);
    let myGoodbye = randArr(goodbye);  
    if(!myStarSign) {
        return 'Your fate is unclear...perhaps an error blocks your path to guidance?';
    }
    else {
        return `${myGreeting} ${myStarSign},\n${myFortune}\n${myAdvice}\n${myGoodbye}`;
    }
}

userInfo.myBirthday(3, 10);
console.log(createMyFortune());
