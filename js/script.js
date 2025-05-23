class Card {
  constructor(hero, title, description, link_to_about_section) {
    this.hero = hero;
    this.title = title;
    this.description = description;
    this.link_to_about_section = link_to_about_section;
  }
}

class CardManager {
  constructor() {
    this.cards = [];
  }

  // Appends new card
  addCard(card) {
    this.cards.push(card);
  }

  // Removes a card based on its title
  removeCard(title) {
    this.cards = this.cards.filter(card => card.title !== title);
  }

  // Creates cards in HTML
  conjureCards() {
    let card_spawner = document.getElementById("card_spawner");
    card_spawner.innerHTML = "";

    this.cards.forEach(card => {
      // Main
      // ========
      let body = document.createElement("div");
      body.setAttribute("class", "card");

      // Hero
      // ========
      let image = document.createElement("img");
      image.setAttribute("src", card.hero);
      body.appendChild(image);

      // Info box
      // ========
      let info = document.createElement("div");
      info.setAttribute("class", "card_info");
      body.appendChild(info);

      // Title
      // ========
      let title = document.createElement("h1");
      title.innerHTML = card.title;
      info.appendChild(title);

      // Div box
      // ========
      let div = document.createElement("div");
      info.appendChild(div);

      // Desc
      // ========
      let description = document.createElement("p");
      description.innerHTML = card.description;
      div.appendChild(description);

      // Button
      // ========
      // TODO: Make sure to use 'link_to_about_section' here to open specific booking section
      let find_more_btn = document.createElement("button");
      find_more_btn.setAttribute("class", "find_more_btn");
      find_more_btn.innerHTML = "Find More";
      div.appendChild(find_more_btn);

      // Assemble
      // ========
      card_spawner.appendChild(body);
    });
  }
}

let cards = new CardManager();

// TODO: Add more cards
cards.addCard(new Card("../img/gaming.png", "Video games room", "Play games n stuff", ""));
cards.addCard(new Card("../img/gaming.png", "Video games room", "Play games n stuff", ""));
cards.addCard(new Card("../img/gaming.png", "Video games room", "Play games n stuff", ""));

cards.conjureCards();

/* Aidans jQuery Code */

$(document).ready(function () {
  $('#home_section').hide();
  $('#navigatron').hide();

  // Navigatron
  // =====================
  $('#shroud_scan').click(function (e) {
    e.preventDefault();
    $('#navigatron a').hide();
    $('#navigatron div').css("display", "flex");
  });

  $('#navigatron div button').click(function (e) {
    e.preventDefault();
    $('#navigatron a').show();
    $('#navigatron div').hide();
  });

  // Yes
  // =====================

  // Show booking confirmation section
  $('.find_more_btn').click(function () {
    $('.form-wrapper').css('display', 'flex');
    $('#home_section').hide();
    $('.Cancellation').hide();
    $('#navigatron').hide();
  });

  $('.book_btn').click(function () {
    $('.form-wrapper').hide();
    $('#home_section').hide();
    $('.Confirmation').css('display', 'flex');
    $('.Cancellation').hide();
    $('#navigatron').hide();
  });

  // Show booking confirmation section
  $('#show-confirmation').click(function () {
    $('.Confirmation').css('display', 'flex');
    $('.Cancellation').hide();
  });

  // Show booking cancellation section
  $('#show-cancellation').click(function () {
    $('.Cancellation').css('display', 'flex');
    $('.Confirmation').hide();
  });

  // Optional: Add logic inside the confirmation section
  $('.cancel').click(function () {
    $('.Confirmation').hide();
    $('.Cancellation').css('display', 'flex');
  });

  // Optional: Return to home logic
  $('.home-link, .back-link').click(function () {
    $('.Confirmation, .Cancellation').hide();
    $('#home_section').show();
    $('#navigatron').css('display', 'flex');
  });

  $('#go-login').click(function () {
    $('#login-section').css('display', 'flex');
    $('#signup-section').hide();
    $('#welcome-section').hide();
  })

  $('#go-signup').click(function () {
    $('#signup-section').css('display', 'flex');
    $('#welcome-section').hide();
    $('#login-section').hide();
  })

  $('.auth_btn').click(function () {
    $('#signup-section').hide();
    $('#welcome-section').hide();
    $('#login-section').hide();
    $('#home_section').css('display', 'flex');
    $('#navigatron').css('display', 'flex');
  })
});

$(window).on('scroll', function () {
  let scroll_top = $(window).scrollTop();
  let window_height = $(window).height();
  let document_height = $(document).height();

  // Check for EOF (End-Of-File)
  if (scroll_top + window_height >= document_height - 1) {
    $('#navigatron').fadeOut(100);
  } else {
    $('#navigatron').fadeIn(100);
  }
});
