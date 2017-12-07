let fetch_data = (function() {
  let DOMStrings = {
    uname: '#username',
    pword: '#password',
    login: '#login',
    forget: '#forget',
  }

  return {
    credentials: function() {
      return {
        uname: document.querySelector(DOMStrings.uname).value,
        pword: document.querySelector(DOMStrings.pword).value,
      };
    },

    getDOMstrings: function() {
      return DOMStrings;
    },

  }
})();




let Controller = (function(fetch_data) {
  let setupEventListeners = function() {
    let DOMStrings = fetch_data.getDOMstrings();

    //Event Listener for the LOGIN button
    document.querySelector(DOMStrings.login).addEventListener('click', validate);

    //Event Listener for the FORGET LINK
    document.querySelector(DOMStrings.forget).addEventListener('click', recover);
  };

  let validate = function() {

    let credentials = fetch_data.credentials();
    console.log(`Username: ${credentials.uname}\nPassword: ${credentials.pword}`);
  };

  let recover = function() {
    console.log(`You forget your credentials`);
  }

  return {

    init: function() {
      console.log('Start');
      setupEventListeners();
    }


  }

})(fetch_data);


//Initilizer

(function() {
  Controller.init();
})();
