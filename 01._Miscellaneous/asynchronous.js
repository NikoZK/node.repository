
function myPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        try{
            resolve("YESSS")
        } catch(error) {
            reject("bad shit happens now, run")
        }
        }, 3000)
    })
}

myPromise()
.then((SuccessMessage) => console.log(SuccessMessage))
.then((errorMessage) => console.log(errorMessage))