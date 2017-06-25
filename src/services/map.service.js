const contents = ['Home', 'School']
const getMarkers = () => {
    var pm = new Promise((resolve)=>{
        resolve([{
                position: { lat: 31.788617, lng: 34.661783 }
            },
            {
                position: { lat: 32.083650, lng: 34.797768 }
            }])
    })
    return pm
}

const getContent = (index) => {
    return contents[index]
}

export default {
    getMarkers,
    getContent
}