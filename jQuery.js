// A $( document ).ready() block.
$( document ).ready(function() {
    console.log( 'ready!' );
    $('#submit').click(function(event){ 
        event.preventDefault()
        let firstName = $('#firstName').val()
        let lastName = $('#lastName').val()
        let id = $('#id').val()
        let jobTitle = $('#jobTitle').val()
        let aSalary = $('#aSalary').val()
        let userInput = "<tr><td>" + firstName + "</td><td>" 
        + lastName + "</td><td>" + id + "</td><td>" + jobTitle + "</td><td>"  
        + aSalary + "</td><td>" + "<input type= 'submit' id='delete' value='delete'></td></tr>"
        $("table tbody").append(userInput)
      });
});
