


export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category)}&limit=10&api_key=pbro3Wn5yeSBQJXUThYcSymeXn1hUQvW`;
    const resp = await fetch(url);

    const { data } = await resp.json();

    const gifs = data.map(imgs => {
        return {
            id: imgs.id,
            title: imgs.title,
            url: imgs.images?.downsized_medium.url
        }
    })
    return gifs;


}