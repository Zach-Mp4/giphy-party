console.log("Let's get this party started!");
const api_key = 'MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym';
const input = document.getElementById('search');
const submit = document.getElementById('submit');
const gifDiv = document.getElementById('gif-div');
const remove = document.getElementById('remove');

window.onload = async function (){
    submit.addEventListener('click', await submitHandler);

    remove.addEventListener('click', removeHandler);

}

async function getGif(q){
    let gifObj = await axios.get('http://api.giphy.com/v1/gifs/search', {params: {api_key, q}});
    return gifObj['data']['data'][0]['images']['original']['url'];
}

async function submitHandler(e){
    e.preventDefault();
    const img = document.createElement('IMG');
    img.src = await getGif(input.value);
    input.value = '';
    gifDiv.append(img);
}

function removeHandler(){
    $('img').remove();
}