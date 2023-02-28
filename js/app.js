if(document.getElementById('buttonModal')) {
    const modal = document.getElementById('myModal');
    const button = document.getElementById('buttonModal');
    const span = document.getElementsByClassName('close')[0];
    const body = document.getElementsByTagName('body')

    button.onclick = function() {
        modal.style.display = 'block';
        body.style.position = 'static';
        body.style.height = '100%';
        body.style.overflow = 'hidden';
    }

    span.onclick = function() {
        modal.style.display = 'none';
        body.style.position = 'inherit';
        body.style.height = 'auto';
        body.style.overflow = 'hidden';
    }
}