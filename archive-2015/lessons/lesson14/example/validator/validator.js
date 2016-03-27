(function (){
  "use strict";

  $('.manual .panel-heading').click(function (e) {
    $('.manual .panel-body').slideToggle('slow');
  });

  $('.example-toggle').click(function (e) {
    e.preventDefault();
    $(this).parent().find('.example').slideToggle('slow');
  });

  $(window).load(function() {
    // task 1
    if (typeof greeting == 'function') {
      console.log('checking greeting()');

      try {
        var pass =
          (greeting('Jeni') === 'Hello, Jeni!') &&
          (greeting('Mustafa') === 'Hello, Mustafa!') &&
          (greeting() === 'Hello, undefined!');

        if (pass) {
          $('#task-1').removeClass('panel-default').addClass('panel-success');
        }
        else {
          throw new Error("Task 1: Assertion check failed!");
        }
      }
      catch (error) {
        console.warn(error.message);
        $('#task-1').removeClass('panel-default').addClass('panel-danger');
      }
    }
    // task 1 end

    // task 2
    if (typeof Person == 'function') {
      console.log('checking Person');

      try {
        var person = new Person('Jeni', 'Beni');
        var pass =
            (person instanceof Person) &&
            (person.firstName == 'Jeni') &&
            (person.lastName == 'Beni')

        if (pass) {
          $('#task-2').removeClass('panel-default').addClass('panel-success');
        }
        else {
          throw new Error("Task 2: Assertion check failed!");
        }
      }
      catch (error) {
        console.warn(error.message);
        $('#task-2').removeClass('panel-default').addClass('panel-danger');
      }
    }
    // task 2 end

    // task 3
    if (typeof personGreeting == 'function') {
      console.log('checking personGreeting()');

      try {
        var pass =
            (personGreeting(new Person('Boiko', 'Borisov')) === "Hi, Boiko!") &&
            (personGreeting(new Person('Jeni', 'Beni123')) === "Hi, Jeni!")

        if (pass) {
          $('#task-3').removeClass('panel-default').addClass('panel-success');
        }
        else {
          throw new Error("Task 3: Assertion check failed!");
        }
      }
      catch (error) {
        console.warn(error.message);
        $('#task-3').removeClass('panel-default').addClass('panel-danger');
      }
    }
    // task 3 end

    // task 4
    if (typeof personGreeting == 'function') {
      console.log('checking personGreeting()');

      try {
        var pass =
            (personGreeting(new Person('Boiko', 'Borisov'), true) === "Hello, Boiko Borisov!") &&
            (personGreeting(new Person('Jeni', 'Beni123'), false) === "Hi, Jeni!")

        if (pass) {
          $('#task-4').removeClass('panel-default').addClass('panel-success');
        }
        else {
          throw new Error("Task 4: Assertion check failed!");
        }
      }
      catch (error) {
        console.warn(error.message);
        $('#task-4').removeClass('panel-default').addClass('panel-danger');
      }
    }
    // task 4 end

    // task 5
    if (typeof Person == 'function' && typeof (new Person('-','-')).introduce == 'function') {
      console.log('checking introduce()');

      try {
        var res1 = new Person('Бойко', 'Борисов').introduce();
        var res2 = new Person('Jeni', 'Beni123').introduce();
        var pass =
            (Boolean(res1.match(/Казвам се Бойко Борисов.$/))) &&
            (Boolean(res2.match(/Казвам се Jeni Beni123.$/)));

        if (pass) {
          $('#task-5').removeClass('panel-default').addClass('panel-success');
        }
        else {
          throw new Error("Task 5: Assertion check failed!");
        }
      }
      catch (error) {
        console.warn(error.message);
        $('#task-5').removeClass('panel-default').addClass('panel-danger');
      }
    }
    // task 5 end

    // task 6
    if (typeof Person == 'function' && (new Person('-','-')).isPolite !== 'undefined') {
      console.log('checking isPolite');

      try {
        var person = new Person('Бойко', 'Борисов');
        var pass = (person.isPolite === true)

        if (pass) {
          $('#task-6').removeClass('panel-default').addClass('panel-success');
        }
        else {
          throw new Error("Task 6: Assertion check failed!");
        }
      }
      catch (error) {
        console.warn(error.message);
        $('#task-6').removeClass('panel-default').addClass('panel-danger');
      }
    }
    // task 6 end

    // task 7
    if (typeof Person == 'function' && typeof (new Person('-','-')).bePolite == 'function') {
      console.log('checking bePolite()');

      try {
        var person = new Person('Бойко', 'Борисов');
        person.bePolite(false);
        var pass = (person.isPolite === false);
        person.bePolite(true);
        var pass = pass && (person.isPolite === true);

        if (pass) {
          $('#task-7').removeClass('panel-default').addClass('panel-success');
        }
        else {
          throw new Error("Task 7: Assertion check failed!");
        }
      }
      catch (error) {
        console.warn(error.message);
        $('#task-7').removeClass('panel-default').addClass('panel-danger');
      }
    }
    // task 7 end

    // task 8
    if (typeof Person == 'function' && typeof (new Person('-','-')).bePolite == 'function') {
      console.log('checking introduce()');

      try {
        var person1 = new Person('Бойко', 'Борисов');
        var person2 = new Person('Jeni', 'Beni123');
        person1.bePolite(false);
        person2.bePolite(false);
        var pass =
            (Boolean(person1.introduce().match(/Аз съм Бойко.$/))) &&
            (Boolean(person2.introduce().match(/Аз съм Jeni.$/)))

        if (pass) {
          $('#task-8').removeClass('panel-default').addClass('panel-success');
        }
        else {
          throw new Error("Task 8: Assertion check failed!");
        }
      }
      catch (error) {
        console.warn(error.message);
        $('#task-8').removeClass('panel-default').addClass('panel-danger');
      }
    }
    // task 8 end

    // task 9
    if (typeof Person == 'function' && typeof (new Person('-','-')).greet == 'function') {
      console.log('checking greet()');

      try {
        var boiko = new Person('Бойко', 'Борисов');
        var jeni1 = new Person('Jeni', 'Beni123');
        var jeni2 = new Person('Jeni', 'Beni123');

        boiko.bePolite(false);
        jeni1.bePolite(false);
        jeni2.bePolite(true);

        var pass =
            (boiko.greet(jeni1) === "Здрасти, Jeni!") &&
            (boiko.greet(jeni2) === "Здрасти, Jeni!") &&
            (jeni1.greet(boiko) === "Здрасти, Бойко!") &&
            (jeni2.greet(boiko) === "Здравейте, Бойко Борисов!")

        if (pass) {
          $('#task-9').removeClass('panel-default').addClass('panel-success');
        }
        else {
          throw new Error("Task 9: Assertion check failed!");
        }
      }
      catch (error) {
        console.warn(error.message);
        $('#task-9').removeClass('panel-default').addClass('panel-danger');
      }
    }
    // task 9 end

    // task 10
    if (typeof Person == 'function' && typeof (new Person('-','-')).introduce == 'function') {
      console.log('checking greet()');

      try {
        var boiko = new Person('Бойко', 'Борисов');
        var jeni1 = new Person('Jeni', 'Beni123');
        var jeni2 = new Person('Jeni', 'Beni123');

        boiko.bePolite(false);
        jeni1.bePolite(false);
        jeni2.bePolite(true);

        var pass =
            (boiko.introduce(jeni1) === "Здрасти, Jeni! Аз съм Бойко.") &&
            (boiko.introduce(jeni2) === "Здрасти, Jeni! Аз съм Бойко.") &&
            (jeni1.introduce(boiko) === "Здрасти, Бойко! Аз съм Jeni.") &&
            (jeni2.introduce(boiko) === "Здравейте, Бойко Борисов! Казвам се Jeni Beni123.")

        if (pass) {
          $('#task-10').removeClass('panel-default').addClass('panel-success');
        }
        else {
          throw new Error("Task 10: Assertion check failed!");
        }
      }
      catch (error) {
        console.warn(error.message);
        $('#task-10').removeClass('panel-default').addClass('panel-danger');
      }
    }
    // task 10 end
  });
})();