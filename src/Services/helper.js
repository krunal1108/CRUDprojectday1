export const GetData = (myKey) => {
    let myData = JSON.parse(localStorage.getItem(myKey));

    if (!myData) {
        return [];
    }

    return myData;
}

