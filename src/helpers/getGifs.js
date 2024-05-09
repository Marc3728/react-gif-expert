const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=mCNNcs0UAy2f3jeLLU9RFb6ZxiP4RHwJ&q=${category}&limit=20`;
  const resp = await fetch(url);
  const { data } = await resp.json();
  const gifs = data.map((img) => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url,
  }));
  console.log(gifs);
  return gifs;
};

export default getGifs;
