document.addEventListener('DOMContentLoaded', function() {
    setTimeout(function() {
        document.getElementById('loader').style.display = 'none';
        document.getElementById('page').classList.remove('invisible');
    }, 2000);
});