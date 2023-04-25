function welcome(name){
    // if(name === undefined){
    //     name = "unknown";
    //     return name;
    // } 
    
    // else {
    //     return name + " your name starts with " + name[0]
    // }
    //++++++++++++++++++++++++++++++++++++++++++++++++++++++++

    if (name.startsWith('a')){
        return "your name starts with a"
    }

    else{
        return "your name starts with " + name[0]
    }


}

module.exports=welcome