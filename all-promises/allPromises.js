

function allPromises(...args) {

    let user = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Madhavi");
        }, 3 * 100);
    });
    
    user.then((result) => {
        console.log(result);
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve("Verma");
            }, 3 * 1000);
        });
    }).then((result) => {
        console.log(result);
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve("Raipur");
            }, 3 * 1000);
        });
    }).then(result => console.log(result));
    }
    
export { allPromises };



