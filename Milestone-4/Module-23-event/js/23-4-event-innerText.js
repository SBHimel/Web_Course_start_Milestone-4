console.log('handelere');

document.getElementById('btn-ubdate-title').addEventListener('click', function () {
    // console.log('btn clicked')
    const pageTitleElement = document.
    // h1 select
    getElementById('page-title');
    console.log(pageTitleElement);
    pageTitleElement.innerText = 'updated page title text.';
    pageTitleElement.style.color = 'green';
})