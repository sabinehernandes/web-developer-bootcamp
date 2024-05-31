const form = document.querySelector('#searchForm');
form.addEventListener('submit', async function (e) {
    e.preventDefault();
    const userInput = form.elements.query.value;
    const config = { params: { q: userInput } }
    const res = await axios.get(`https://api.tvmaze.com/search/shows?`, config);
    makeImages(res.data);
    form.reset();
})

const imgReset = form.addEventListener('click', function () {
    const imgs = document.querySelectorAll('img');
    for (let img of imgs) {
        img.remove();
    }
}) 

const makeImages = (shows) => {
    for (let result of shows) {
        if (result.show.image) {
            const img = document.createElement('img');
            img.src = result.show.image.medium;
            document.body.append(img);
        }
    }
}