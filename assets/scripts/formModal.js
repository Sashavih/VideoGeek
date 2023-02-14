let modal = $modal({
    content: `<h2 class="subtitle ">отправить тз</h2><form class="form">
    <input type="text" name="text" class="form__item" />
    <input type="tel" name="tel" class="form__item" />
    <input type="email" name="email" class="form__item" />
    <input type="file" name="file">
    <textarea rows="5" class="form__item" name="comment"></textarea>
    <button type="submit" class="btn btn-form">отправить</button>
    <p>Нажимая кнопку «Отправить», вы даете согласие с нашей Политикой обработки персональных данных</p>
</form>`,


});

document.addEventListener('click', function (e) {
    if (e.target.dataset.toggle === 'modal') {
        modal.show();
    }
});
