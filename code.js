document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('button[name="reg"]').addEventListener('click', function() {
        document.getElementById('frame_1').style.display = 'none';
        document.getElementById('frame_person').style.display = 'block';
    });

    document.querySelector('.cancel').addEventListener('click', function() {
        document.getElementById('frame_person').style.display = 'none';
        document.getElementById('frame_1').style.display = 'block';
    });

    const countries = [
        'Россия', 'Беларусь', 'Казахстан', 'Украина', 'США',
        'Германия', 'Франция', 'Италия', 'Испания', 'Великобритания',
        'Китай', 'Япония', 'Южная Корея', 'Канада', 'Бразилия',
        'Австралия', 'Индия', 'Турция', 'Польша', 'Швеция'
    ];


    const countrySelect = document.createElement('select');
    countrySelect.id = 'country';
    countrySelect.innerHTML = '<option value="">Выберите страну</option>' +
        countries.map(country => `<option value="${country}">${country}</option>`).join('');

    const countryCell = document.querySelector('td:has(#country)');
    countryCell.innerHTML = 'Страна: <br>';
    countryCell.appendChild(countrySelect);

    const inputs = document.querySelectorAll('#frame_person input, #frame_person select');

    const nextButton = document.querySelector('.next');
    nextButton.disabled = true;

    function validateForm() {
        let isValid = true;

        inputs.forEach(input => {
            if (!input.value.trim()) {
                isValid = false;
            }
        });

        const password = document.getElementById('passwd').value;
        const repeatPassword = document.getElementById('passwd_repeat').value;
        if (password !== repeatPassword) {
            isValid = false;
        }

        nextButton.disabled = !isValid;
    }

    inputs.forEach(input => {
        input.addEventListener('input', validateForm);
    });

    document.querySelector('.next').addEventListener('click', function() {
        document.getElementById('frame_person').style.display = 'none';
        document.getElementById('frame_phone').style.display = 'block';
    });

    document.querySelector('.back').addEventListener('click', function() {
        document.getElementById('frame_phone').style.display = 'none';
        document.getElementById('frame_person').style.display = 'block';
    });




    const phoneNumberInput = document.getElementById('phone_number');
    const sendCodeBtn = document.getElementById('send_code');
    const codeSection = document.getElementById('code_section');
    const phoneCodeInput = document.getElementById('phone_code');
    const checkCodeBtn = document.getElementById('check_code');
    const nextBtn = document.getElementById('next_btn');

    nextBtn.disabled = true;
    sendCodeBtn.disabled = true;
    checkCodeBtn.disabled = true;

    function validatePhone() {
        sendCodeBtn.disabled = phoneNumberInput.value.trim().length < 10;
    }

    function validateCode() {
        const isValid = phoneCodeInput.value.trim().length === 4;
        checkCodeBtn.disabled = !isValid;
        if (!isValid) {
            nextBtn.disabled = true;
        }
    }

    phoneNumberInput.addEventListener('input', validatePhone);
    phoneCodeInput.addEventListener('input', validateCode);

    validatePhone();
    validateCode();

    sendCodeBtn.addEventListener('click', function() {
        if (phoneNumberInput.value.trim().length >= 10) {
            codeSection.style.display = 'block';
            phoneCodeInput.focus();
        }
    });

    checkCodeBtn.addEventListener('click', function() {
        if (phoneCodeInput.value.trim().length === 4) {
            nextBtn.disabled = false;
        }
    });

    nextBtn.addEventListener('click', function() {
        document.getElementById('frame_phone').style.display = 'none';
        document.getElementById('frame_card').style.display = 'block';
    });

    document.getElementById('back3').addEventListener('click', function() {
        document.getElementById('frame_card').style.display = 'none';
        document.getElementById('frame_phone').style.display = 'block';
    });


    document.querySelectorAll('.code-input').forEach(input => {
        input.addEventListener('input', function() {
            if (this.value.length >= this.maxLength) {
                const nextId = this.dataset.next;
                if (nextId) {
                    document.getElementById(nextId).focus();
                }
            }
        });

        input.addEventListener('keydown', function(e) {
            if (e.key === 'Backspace' && this.value.length === 0) {
                const prev = this.previousElementSibling;
                if (prev && prev.classList.contains('code-input')) {
                    prev.focus();
                }
            }
        });
    });

    const inputs2 = document.querySelectorAll('#frame_card input');
    const end = document.getElementById('end');
    end.disabled = true;

    function validateForm2() {
        let isValid = true;
        const agree = document.getElementById('terms-agree');

        inputs2.forEach(input => {
            if (!input.value.trim() || !agree.checked) {
                isValid = false;
            }
        });

        end.disabled = !isValid;
    }

    inputs2.forEach(input => {
        input.addEventListener('input', validateForm2);
    });

    end.addEventListener('click', function() {
        document.getElementById('frame_card').style.display = 'none';
        document.getElementById('frame_final').style.display = 'block';
    });

});