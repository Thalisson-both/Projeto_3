$(document).ready(function(){
    jQuery.validator.addMethod('nomeCompleto', function(value, element) {
        return this.optional(element) || value.trim().indexOf(' ') !== -1;
    }, 'Por favor, insira o nome completo.');

    $('#telefone').mask('(00)00000-0000');

    $('#formulario-contato').validate({
        errorClass: 'error-label',
                highlight: function(element, errorClass, validClass) {
                    $(element).addClass('error-input');
                },
                unhighlight: function(element, errorClass, validClass) {
                    $(element).removeClass('error-input');
                },
        rules: {
            nome: {
                required: true,
                nomeCompleto: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: false,
                minlength: 14,
                maxlength: 14
            },
            mensagem: {
                required: true,
                minlength: 10
            }
        },
        messages: {
            nome: {
                required: "Por favor, informe seu nome",
                nomeCompleto: "Por favor, insira o nome completo"
            },
            email: {
                required: "Por favor, informe seu email",
                email: "Por favor, informe um email válido"
            },
            mensagem: {
                required: "Por favor, informe sua mensagem",
                minlength: "Sua mensagem deve conter pelo menos 10 caracteres"
            },
            telefone: {
                minlength: "Por favor, digite um telefone valido"
            }
        }
    });
});