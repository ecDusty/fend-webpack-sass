function handleSubmit(event) {
    event.preventDefault();

    // check what text was put into the form field
    let formText = document.getElementById('name').value;

    Client.checkForName(formText);

    console.log("::: Form Submitted :::")
    const test = fetch('http://localhost:8081/test')
    .then(res => {
        return res.json()
    })
    .then(function(data) {
        document.getElementById('results').innerHTML = data.message
    });

    const title = fetch('/api/get/title')
    .then(res => res.json())
    .then(res => {
        document.getElementById('results').insertAdjacentHTML('beforeend', `<h4>${res.title}</h4><h5>${formText}</h5>`);
    });
}

export { handleSubmit }
