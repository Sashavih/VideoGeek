let modal = $modal({
    content: `<h2 class="subtitle ">отправить тз</h2>
    <form class="form">
    <input type="text" name="text" class="form__item" placeholder="Ваше Имя" required/>
    <input type="email" name="email" class="form__item" placeholder="E-mail"  required/>
    <input type="tel" name="tel" class="form__item" id="phone" placeholder="Номер телефона" minlength="11" maxlength="12"required/>

    <div class="file-upload">
	<div class="file-upload-select">
		<div class="file-select-button btn btn-form" >Выберите файл</div>
    <div class="file-select-name">Файл не выбран...</div> 
    <input type="file" name="file-upload-input" id="file-upload-input" >
	</div>
</div>
    <textarea rows="5" class="form__item" name="comment" placeholder="Комментарий"></textarea>
    <button type="submit" class="btn btn-form">отправить</button>
    <p>Нажимая кнопку «Отправить», вы даете согласие с нашей Политикой обработки персональных данных</p>
</form>`,


});

document.addEventListener('click', function (e) {
    if (e.target.dataset.toggle === 'modal') {
        modal.show();
    }
});
let form = document.querySelector('.form');
let phone = document.querySelector('#phone');

form.addEventListener('submit', function (evt) {
    console.log(phone.value);
    evt.preventDefault();
    fetch('https://httpbin.org/post', {
        method: 'POST',
        body: new FormData(form)
    })
        .then(response => response.json())
        .then(data => {
            console.log(data);
        })
        .catch(error => console.log(error));

    alert('Ваша заявка успешно отправлена!');
});
