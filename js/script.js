  
  /* Aidans jQuery Code */ 
  
  $(document).ready(function () {
    // Initially show confirmation, hide cancellation
    $('.Confirmation').show();
    $('.Cancellation').hide();

    // Show booking confirmation section
    $('#show-confirmation').click(function () {
      $('.Confirmation').show();
      $('.Cancellation').hide();
    });

    // Show booking cancellation section
    $('#show-cancellation').click(function () {
      $('.Cancellation').show();
      $('.Confirmation').hide();
    });

    // Optional: Add logic inside the confirmation section
    $('.cancel').click(function () {
      $('.Confirmation').hide();
      $('.Cancellation').show();
    });

    // Optional: Return to home logic
    $('.home-link, .back-link').click(function () {
      $('.Confirmation, .Cancellation').hide();
      // Show home section if you have one
      // $('.Home').show();
    });
  });
