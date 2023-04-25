function sumOfNumbers(...ourNumbers){
    return ourNumbers.reduce((pv,cv)=>pv+cv,0)

}

module.exports=sumOfNumbers