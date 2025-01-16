/*
const getImagenPromesa = () => {
    const promesa = new Promise((resolve, reject) => {
        resolve('https://asdasd.com');
    })

    return promesa;
}

getImagenPromesa().then(console.log);
*/

const getImagen = async() => {

    try {

        const apiKey = 'U68LDEnd244JiTbXGTKCgBM5QmLubJoh';
        const resp = await fetch (`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);	
        const {data} = await resp.json();

        const {url} = data.images.original;

        const img = document.createElement('img');
        img.src = url;

        document.body.append(img);
    }
    catch(error){
        //manejo del error
        console.error(error);
    }

getImagen().then(console.log);

}
