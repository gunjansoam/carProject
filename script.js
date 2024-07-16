$(document).ready(function() {
    $('#contactUsBtn').click(function() {
        $('#contactUsModal').modal('show');
    });

    $('#contactForm').submit(function(event) {
        event.preventDefault();
        
        const formData = {
            name: $('#name').val(),
            email: $('#email').val(),
            message: $('#message').val()
        };

        $.ajax({
            url: 'https://getform.io/f/YOUR_FORM_ENDPOINT',
            method: 'POST',
            data: formData,
            success: function(response) {
                alert('Form submitted successfully!');
                $('#contactUsModal').modal('hide');
                $('#contactForm')[0].reset();
            },
            error: function(error) {
                alert('There was an error submitting the form.');
            }
        });
    });
});
