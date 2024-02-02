describe('Автотесты на авторизацию', function () {
   it('№1 Ввели верный логин ввели верный пароль', function () {
        cy.visit('https://login.qa.studio/'); // Зашли на сайт
        cy.get('#mail').type('german@dolnikov.ru'); // ввели логин
        cy.get('#pass').type('iLoveqastudio1'); // ввели верный пароль
        cy.get('#loginButton').click(); // нажали на кнопку войти
        cy.get('#messageHeader').should('be.visible');  // Проверка, что текст виден
        cy.get('#messageHeader').contains('Авторизация прошла успешно'); // Совп.текста
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');  // Проверка, что крестик виден
     })

  it('№2 Восстановление пароля', function () {
       cy.visit('https://login.qa.studio/'); // Зашли на сайт
       cy.get('#mail').type('german@dolnikov.ru'); // ввели логин
       cy.get('#pass').type('iLoveqastudio2'); // ввели не верный пароль
       cy.get('#forgotEmailButton').click(); // нажали на "Забыли пароль"
       cy.get('#forgotForm > .header').should('be.visible');  // "Восстановите пароль" виден
       cy.get('#mailForgot').type('german@dolnikov.ru'); // ввели логин для отправки кода восстановления
       cy.get('#restoreEmailButton').click(); // нажали на "Отправить код"
       cy.get('#messageHeader').should('be.visible');  // Проверка, что текст виден
       cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); // Совп.текста
       cy.get('#exitMessageButton > .exitIcon').should('be.visible');  // Проверка, что крестик виден
      })

    it(' №3 Негативный кейс. Не верный пароль', function () {
       cy.visit('https://login.qa.studio/'); // Зашли на сайт
       cy.get('#mail').type('german@dolnikov.ru'); // ввели логин
       cy.get('#pass').type('iLoveqastudio2'); // ввели не верный пароль
       cy.get('#loginButton').click(); // нажали на кнопку войти
       cy.get('#messageHeader').should('be.visible');  // Проверка, что текст виден
       cy.get('#messageHeader').contains('Такого логина или пароля нет'); // Совп.текста  
       cy.get('#exitMessageButton > .exitIcon').should('be.visible');  // Проверка, что крестик виден
      })

    it(' №4 Негативный кейс. Не верный логин', function () {
       cy.visit('https://login.qa.studio/'); // Зашли на сайт
       cy.get('#mail').type('ger@dol.ru'); // ввели Не ВЕРНЫЙ логин
       cy.get('#pass').type('iLoveqastudio1'); // ввели  верный пароль
       cy.get('#loginButton').click(); // нажали на кнопку войти
       cy.get('#messageHeader').should('be.visible');  // Проверка, что текст виден
       cy.get('#messageHeader').contains('Такого логина или пароля нет'); // Совп.текста  
       cy.get('#exitMessageButton > .exitIcon').should('be.visible');  // Проверка, что крестик виден
      })

    it(' №5 Негативный кейс. Валидация поля логин', function () {
       cy.visit('https://login.qa.studio/'); // Зашли на сайт
       cy.get('#mail').type('gerdol.ru'); // ввели логин без  @
       cy.get('#pass').type('iLoveqastudio1'); // ввели  верный пароль
       cy.get('#loginButton').click(); // нажали на кнопку войти
       cy.get('#messageHeader').should('be.visible');  // Проверка, что текст виден
       cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); // Совп.текста  
       cy.get('#exitMessageButton > .exitIcon').click(); // жмакнули крестик
     })

it('№6 Авто перевод строчных буквы логина', function () {
        cy.visit('https://login.qa.studio/'); // Зашли на сайт
        cy.get('#mail').type('GerMan@DolniKov.ru'); // ввели логин с заглавными буквами
        cy.get('#pass').type('iLoveqastudio1'); // ввели верный пароль
        cy.get('#loginButton').click(); // нажали на кнопку войти
        cy.get('#messageHeader').should('be.visible');  // Проверка, что текст виден
        cy.get('#messageHeader').contains('Авторизация прошла успешно'); // Совп.текста
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');  // Проверка, что крестик виден
     })
})
