$(document).ready(function() {

    var tarefasFeitas = 0;
    var tarefasPendentes = 0;

    $("#btnNovaTarefa").click(function() {
        $('form').slideDown();
    })

    $("#btnCancelar").click(function() {
        $('form').slideUp();
    })

    $('#taskForm').on('submit', function(e) {
        e.preventDefault();
        var taskName = $('#taskInput').val();
        $('#taskList').append('<li>' + taskName + '</li>');
        $('#taskInput').val('');
        tarefasPendentes++;
        atualizarContadores();
    });

    $('#taskList').on('click', 'li', function() {
        $(this).toggleClass('done');
        if ($(this).hasClass('done')) {
            tarefasFeitas++;
            tarefasPendentes--;
        } else {
            tarefasFeitas--;
            tarefasPendentes++;
        }
        atualizarContadores();
    });

    function atualizarContadores() {
        $('#tarefasFeitas').text('Tarefas feitas: ' + tarefasFeitas);
        $('#tarefasPendentes').text('Tarefas pendentes: ' + tarefasPendentes);
    }
});