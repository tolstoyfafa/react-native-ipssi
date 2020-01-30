
export default () => {
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(position => {
            resolve(position);
            console.log(position)
        }, reject)
    })
}



