/* Yelyzaveta */
$('#profile').on('click', function(){
  $('#mainMenu').fadeIn(300);
  $('#home_section').hide();
  $('#navigatron').hide();
});
$('#close-btnn').on('click', function(){
  $('#mainMenu').fadeOut(300);
  $('#home_section').css('display', 'flex');
  $('#navigatron').css('display', 'flex');
});
$('#go-settings').on('click', function(){
  $('#mainMenu').fadeOut(300);
  $('#settingsScreen').fadeIn(300);
  
});
$('#close-btnnn').on('click', function(){
  $('#settingsScreen').fadeOut(300);
  $('#mainMenu').fadeIn(300);
});
/* END */