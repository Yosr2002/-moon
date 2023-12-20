$(document).ready(function() {


    const images = [
        'images/back.jpg',
        'images/back ground 2.jpg ',
        'images/2.jpg',
        'images/background 3.jpg',
        'images/back groud 4.jpg',
        'images/back ground 5.jpg',
        'images/banner.jpg',
    ];


    const animatedBackground = document.querySelector('.animated-background');
    let index = 0;



    function changeBackgroundImage() {
        setInterval(() => {
            animatedBackground.style.backgroundImage = `url('${images[index]}')`;
            index = (index + 1) % images.length;
        }, 1000); // تغيير الصور كل 5 ثواني، يمكنك تعديل هذا الرقم حسب الحاجة
    }


    changeBackgroundImage();


    $('#menu').click(function() {

        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');

    });

    $(window).on('load scroll', function() {

        $('#menu').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');

        if ($(window).scrollTop() > 0) {
            $('#scroll-top').show();
        } else {
            $('#scroll-top').hide();
        }

    });

    // smooth scrolling 

    $('a[href*="#"]').on('click', function(e) {

        e.preventDefault();

        $('html, body').animate({

                scrollTop: $($(this).attr('href')).offset().top,

            },
            500,
            'linear'
        );

    });



    var discoverBtns = document.querySelectorAll(".discoverBtn");
    var seeBtns = document.querySelectorAll(".seeBtn");
    var learnBtns = document.querySelectorAll(".learnBtn");

    discoverBtns.forEach(function(button) {
        button.addEventListener("click", function() {
            window.location.href = "https://www.comcec.org/ar/%D8%A7%D9%84%D8%B2%D8%B1%D8%A7%D8%B9%D8%A9-%D9%88%D8%A7%D9%84%D8%AA%D9%86%D9%85%D9%8A%D8%A9-%D8%A7%D9%84%D8%B1%D9%8A%D9%81%D9%8A%D8%A9/";
        });
    });

    seeBtns.forEach(function(button) {
        button.addEventListener("click", function() {
            window.location.href = "products.html";
        });
    });

    learnBtns.forEach(function(button) {
        button.addEventListener("click", function() {
            window.location.href = "https://plantingscience.org/resources/14/download/CaringforPlants_v2.pdf";
        });
    });



    document.addEventListener('DOMContentLoaded', function() {
        var myForm = document.getElementById('myform');

        myForm.addEventListener('submit', function(event) {
            event.preventDefault();

            var fullName = document.getElementById('fullname').value.trim();
            var email = document.getElementById('email').value.trim();
            var number = document.getElementById('number').value.trim();
            var message = document.getElementById('message').value.trim();

            if (fullName === '' || email === '' || number === '' || message === '') {
                Swal.fire({
                    icon: 'error',
                    title: 'Error!',
                    text: 'Please fill in all fields'
                });
                return;
            }

            fetch('.php', {
                    method: 'POST',
                    body: new FormData(myForm)
                })
                .then(response => {
                    if (response.ok) {
                        return response.text();
                    } else {
                        throw new Error('Network response was not ok.');
                    }
                })
                .then(data => {
                    Swal.fire({
                        icon: 'success',
                        title: 'Success!',
                        text: data
                    });
                })
                .catch(error => {
                    Swal.fire({
                        icon: 'error',
                        title: 'Error!',
                        text: error.message || 'An error occurred while sending the data'
                    });
                });
        });
    });

});