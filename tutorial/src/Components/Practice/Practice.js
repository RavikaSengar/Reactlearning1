function handleTimeout(){
    console.log("Timeout for the 1st time")
}

const handleTimeout2=()=>{
    console.log("Timeout for the 2nd time")
}

setTimeout(handleTimeout,2000);
setTimeout(handleTimeout2,3000);
setTimeout(()=> {console.log("more timeout....")}, 4000)
