export const getGifs = async( category ) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=lFRaK8Zec5p1GX00i6mK1c1JP5cubZIJ&q=${ category }&limit=20`

    const resp = await fetch( url );
    const { data } = await resp.json();

    const gifs = data.map( img =>({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }))

    return gifs;

}