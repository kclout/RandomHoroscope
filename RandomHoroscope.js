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

/*userInfo.birthDay = 10;
userInfo.birthMonth = 2;
console.log(`${userInfo.birthMonth}/${userInfo.birthDay}`);
console.log(findStarSign(userInfo));*/
