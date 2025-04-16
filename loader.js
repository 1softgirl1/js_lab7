document.addEventListener('DOMContentLoaded', function() {
    setTimeout(function() {
        document.getElementById('loader').style.display = 'none';
        document.getElementById('page').classList.remove('invisible');
    }, 2000);
    document.querySelector('button[name="reg"]').addEventListener('click', function() {
        alert('Переход на страницу регистрации');
    });
});