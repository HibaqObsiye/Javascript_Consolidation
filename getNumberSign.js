const getNumberSign =(number) => {
    if (number > 0){
        return 'postive'
    }
    else if (number < 0){
        return 'negative'
    }
    else {
        return 'zero'
    }

}

module.exports = getNumberSign;