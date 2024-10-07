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
const greeting = ['Hello wandering', 'Welcome traveling', 'Greetings wise', 'Hello charming', 'Welcome drifting', 'Greetings bewildered', 'Hello mysterious', 'Welcome inquisitive child of', 'Greetings lost soul of', 'Greetings marvelous'];

// fortunes (good, bad, or neutral) //
const fortune = [['The universe has great plans for you today', 'Your life will soon take an exciting turn', 'You will learn an important lesson today', 'Your future is looking bright', 'I see great success in your future', 'You will experience a bit of extra luck today', 'You will soon find all that you have been seeking', 'I see a future brimming with happiness', 'A generous future awaits you', 'Your day will be filled with enrichment and joyousness'], ['Your future is looking somewhat dim', 'Your path is full of many roadblocks', 'I see great hardship in your future', 'You will experience great misfortue today', 'You will experience a bit of bad luck today', 'All that you seek in life remains lost today', 'I see a future teeming with struggles', 'The universe shall give you a grave warning today', 'Your day will be filled with difficulty and strain', 'A worrisome future awaits you'], ['Your fate is undecided today', 'Your fate is in your hands', 'Your future may be filled with enchantment or hardship', 'I see great mystery in your future', 'The universe has handed you an ambiguous fate', 'You will have neutral luck today', 'Today may be filled with uncertainties', 'Your actions will determine your fate today', 'Your future appears neither good nor unpleasant', 'The knowledge you seek may or may not come to you']];

// advice (good, bad, or neutral) //
const advice = [['continue traveling the path ahead of you', 'remain true to yourself', 'never give up on your dreams', 'protect the blessings bestowed upon you', 'persist with your journey towards illumination', 'share the blessings of good fortune with those around you', 'focus on the positive energy you bring into the universe', 'continue practicing gratitude in your life', 'remember to be kind to yourself and others', 'remember to trust in yourself and others'], ['practice self-reflection and embrace self-improvement', 'think postitively to manifest more positive outcomes', 'let bad times pass to allow for the good times', 'focus your energy on the positives in life', 'not let obstacles in life bring you down', 'figure out what matters most to you in life', 'allow the universe to guide you towards happiness', 'reflect on the company you keep', 'not stray from the path ahead of you', 'seek comfort from those around you'], ['open your mind to change', 'have faith in yourself and your decisions', 'embrace the unknown with confidence', 'remain patient as you seek clarity', 'reflect on the changes in your life', 'be accepting of any outcome', 'turn to the universe for guidance', 'seek answers in unusal places', 'look for signs in the world around you', 'reflect on your surroundings']];

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
    if(!myStarSign) {
        return 'Your fate is unclear...perhaps an error blocks your path to guidance?';
    }
    else {
        return `${myGreeting} ${myStarSign},\n${myFortune}.\nYou must ${myAdvice}.`;
    }
}

userInfo.myBirthday(3, 10);
console.log(createMyFortune());
