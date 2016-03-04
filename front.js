"use strict";

$(function(){

  $('#send').click(getGravatar);
  $('#first').click(getFirst);

  // $('#birthday').on('click', getBirthday);
  // $(button).onclick function to get data from backend

});

function getGravatar(e){ ////getting image
  console.log('work');
  e.preventDefault();
  var emailInput = $('#email').val();
  // var $url = 'http://localhost:3000/gravatar/' + emailInput;

  $.get('http://localhost:3000/gravatar/' + emailInput)
    .done(function(data) {
      data = JSON.parse(data);
      console.log(data);/// take out this console.log
      var $gravatarImg = $('<img>').attr('src', data.url);

      $(".container").append($gravatarImg);

    })
    .fail(function(data) {
      console.error('Not working');
    })
  };

  function getFirst(e){ ////need sum
    console.log('work');
    e.preventDefault();
    var  $first= $('#first').val();

      $.get('http://localhost:3000/gravatar/' + )
        .done(function(data) {
        data = JSON.parse(data);
        console.log(data);/// take out this console.log
        var $sum = $('<div>').attr('src', data.url);

        $(".container").append();

      }
    //   .fail(function(data) {
    //     console.error('Not working');
    //   })
    // };
