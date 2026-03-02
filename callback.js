function info(condition,callbackfunction,valu_pass){
    if(condition){
        callbackfunction(valu_pass)
    }
}

function romjan(para){
    console.log(para)
}

info(true,romjan,'roja')