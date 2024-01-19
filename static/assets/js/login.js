var togglePassword = document.getElementById("toggle-password");
if (window.location.host == 'localhost') {
    var BASE_URL = "http://localhost/predium/app";
} else {
    var BASE_URL = "http://localhost/predium/app";
}


/*document.getElementById('recuperar').style.display = 'none';
document.getElementById('msgerror').style.display = 'none';
$('#btn_acceder').attr('disabled', true); //set button disable */



//Confirmar fin alistamiento 
function olvide_password() {
    event.preventDefault()
    $('#i_login').hide();
    $('#recuperar').fadeIn(1000);
}



$(document).ready(function () {
    /*$('#password').blur(function () {
        var user = $(this).val();

        if (user == '') {

            $('#msg_password').html('La Contraseña es requerida').css('color', 'red');

        } else {

            $('#msg_password').empty();
            $('#btn_acceder').append('<i btn btn-primary></i>');
            $('#btn_acceder').text('Acceder'); //Cambio el texto del botón
            $('#btn_acceder').attr('disabled', false); //set button disable 

        }

    });*/

});

$(document).ready(function () {
  
    $('#usuario').focus();
    /*$('#usuario').blur(function () {
        var usuario = $('#usuario').val();
        if (usuario == '') {
            $('#msg_username').html('El Usuario es requerido').css('color', 'red');
        } else {
            var data = { usuario: usuario };
            $('#btn_acceder').html('<i class="spinner-border spinner-border-sm"></i> Buscando...'); //Cambio el texto del botón
            $('#btn_acceder').attr('disabled', true); //se desabilita el botón

            $.ajax({
                url: BASE_URL + 'login/validar_usuario_ajax',
                type: 'POST',
                dataType: "JSON",
                data: { usuario: usuario },
                success: function (msg) { 
                    if (msg != 1) {

                        $('#msg_username').html('El Usuario es Incorrectos').css('color', 'red');
                        $('#btn_acceder').attr('disabled', true); //set button disable 
                        $('#btn_acceder').text('Acceder'); //Cambio el texto del botón
                        $('#btn_acceder').attr('disabled', true); //set button disable 


                    } else {
                        $('#msg_username').html('El Usuario es correcto').css('color', 'green');
                        $('#btn_acceder').append('<i btn btn-primary></i>');
                        $('#btn_acceder').text('Acceder'); //Cambio el texto del botón
                        $('#btn_acceder').attr('disabled', false); //set button disable 


                    }
                }

            });
        }

    });*/
});

function logeo() {
    event.preventDefault();
    document.getElementById('msgerror').style.display = 'none';

    var usuario = $('#usuario').val();
    var password = $('#password').val();
    if (usuario == '') {
        $('#msg_username').html('El Usuario es requerido').css('color', 'red');

    } else {

      $.ajax({
                url: BASE_URL + '/Controllers/Home',
                type: 'POST',
                dataType: "JSON",
                /*data: { usuario: usuario },*/
                success: function (msg) { 
                    if (msg != 1) {

                        //$('#msg_username').html('El Usuario es Incorrectos').css('color', 'red');
                        //$('#btn_acceder').attr('disabled', true); //set button disable 
                        //$('#btn_acceder').text('Acceder'); //Cambio el texto del botón
                        //$('#btn_acceder').attr('disabled', true); //set button disable 


                    } else {
                        //$('#msg_username').html('El Usuario es correcto').css('color', 'green');
                        //$('#btn_acceder').append('<i btn btn-primary></i>');
                        //$('#btn_acceder').text('Acceder'); //Cambio el texto del botón
                        //$('#btn_acceder').attr('disabled', false); //set button disable 


                    }
                }

            });

       /* $('#btn_acceder').html('<i class="spinner-border spinner-border-sm"></i> Accediendo...'); //Cambio el texto del botón
        $('#btn_acceder').attr('disabled', true); //set button disable 

        $.ajax({
            url: BASE_URL + 'login/validar_login_ajax',
            type: 'POST',
            data: {
                usuario: usuario,
                password: password
            },
            success: function (data) {  
                alert(data);								
                if (data = null) {
                    document.getElementById('msgerror').style.display = '';
                    $('#btn_acceder').append('<i btn btn-primary></i>');
                    $('#btn_acceder').text('Acceder'); //Cambio el texto del botón
                    $('#btn_acceder').attr('disabled', false); //set button disable 

                } else {
                    window.location.href = BASE_URL + "login/logeo";
                }
            }

        });*/
    }

};




