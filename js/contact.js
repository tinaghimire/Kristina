$(document).ready(function(){
    $('#contact-form').on('submit', function(e) {
        e.preventDefault(); // Prevent form from refreshing the page

        // Grab form data
        var name = $('#name').val();
        var email = $('#email').val();
        var message = $('#message').val();

        // You can use AJAX to send the form data to your server-side script
        $.ajax({
            url: '', // Replace with your server-side script URL
            method: 'POST',
            data: {
                name: name,
                email: email,
                message: message
            },
            success: function(response) {
                // Handle the response (e.g., success or error)
                alert('Message sent successfully!');
            },
            error: function() {
                alert('An error occurred. Please try again.');
            }
        });
    });
});
