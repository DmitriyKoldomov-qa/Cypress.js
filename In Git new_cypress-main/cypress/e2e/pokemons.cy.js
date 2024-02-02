describe('Автотест на смену аватара тренера покемонов', function () {
   it('№1 Новое фото моего тренера', function () {
        cy.visit('https://pokemonbattle.me/login'); // Зашли на сайт
        cy.get(':nth-child(1) > .auth__input').type('dm_koldomov@mail.ru'); // ввели верный логин
        cy.get('#password').type('Zaqwsx32145'); // ввели верный пароль
        cy.get('.auth__button').click(); // нажали на кнопку войти
        cy.get('.gradient').should('be.visible');  // Проверка, что страница загрузилась
        cy.wait(3000)   
        cy.get('.header__img').should('be.visible');  // Проверка, что логотип отражается
        cy.get('.header__btn_active').should('be.visible');  // Проверка, кнопка "Покемоны"  есть
        cy.get('.header__btns > [href="/trainers"]').should('be.visible');  // Проверка, кнопка "Тренеры"  есть
        cy.get('.header__btns > [href="/shop"]').should('be.visible');  // Проверка, кнопка "Магазин"  есть
        cy.get('.header__container > .header__id').should('be.visible');  // Проверка, кнопка "мой тренер"  есть
        cy.get('.header__btn-setting').should('be.visible');  // Проверка, кнопка "Настройки"  есть
        cy.get('.top_menu_exit').should('be.visible');  // Проверка, кнопка "Выход"  есть
        cy.get('.header__id-texts > :nth-child(1)').should('be.visible');  // Проверка, что ID на кнопке моего тр.отображается
        cy.get('.header__container > .header__id > .header__id-img > .k_main_photo').should('be.visible');  // Проверка, что аватарка на кнопке моего тр.отображается
        cy.get('.header__id-text_type_profile').contains('4716'); // Проверка что именно наш тренер
        cy.get('.header__btns > [href="/shop"]').click(); // вошли в магазин
        cy.get('.pokemon').should('be.visible');  // Проверка что вошли именно в магазин
        cy.get('.shop__list').should('be.visible');  // Проверка что магазин не пустой
        cy.get('.shop__list > li').not('.feature-empty').children('.shop__button').eq(0).click(); // проверяем на то чтобы не совпадали аватары
        cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type('4335764087178967'); // вводим номер тестовой карты
        cy.get('.pay__payform-v2 > :nth-child(2) > .pay__mistake-v2').should('be.visible');  // Проверка карты по алгоритму Луна
        cy.get(':nth-child(1) > .pay_base-input-v2').type('1029'); // вводим дату действия карты
        cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type('125'); // вводим код карты
        cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('Dmitry Koldomov'); // вводим имя держателя карты
        cy.wait(2000)
        cy.get('.pay-btn').click(); // Нажали кнопку купить
        cy.get('#cardnumber').type('56456'); // ввели код из СМС
        cy.get('.payment__submit-button').click(); // нажали кнопку купить
        cy.get('.payment__padding').should('be.visible');  // Проверка совершившейся покупки
        cy.get('.payment__font-for-success').contains('Покупка прошла успешно'); // Проверка текста о покупке
        cy.get('.payment__adv').click(); // нажимаем на вернуться в магазин
        cy.wait(3000)
        cy.get('.header__container > .header__id').click(); // Входим в кабинет проверяем смену аватара
      })
 })