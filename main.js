$(document).ready(function() {
    $('#task-list').on('click', 'li', function() {
        $(this).toggleClass('completed');
    });
    $('#task-form').submit(function(event) {
        event.preventDefault(); 
        var taskName = $('#task-input').val();
        if (taskName.trim() !== '') {
            $('#task-list').append('<li>' + taskName + '</li>');
            $('#task-input').val('');
        } else {
            alert('Por favor, insira o nome da tarefa!');
        }
    });
});