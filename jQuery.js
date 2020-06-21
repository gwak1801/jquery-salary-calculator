$( document ).ready(function() {
    $('#submit').click(function(event){ 
        event.preventDefault()
        let firstName = $('#firstName').val()
        let lastName = $('#lastName').val()
        let id = $('#id').val()
        let jobTitle = $('#jobTitle').val()
        let aSalary = $('#aSalary').val()
        let userInput = "<tr><td>" + firstName + "</td><td>" 
        + lastName + "</td><td>" + id + "</td><td>" + jobTitle + "</td><td class='aSalary'>"  
        + aSalary + "</td><td>" + "<input type= 'submit' id='delete' value='delete'></td></tr>"
        $("table tbody").append(userInput);

        let  annualSalary = $('.aSalary') 
        let totalAnnualSalary
        console.log(annualSalary)
        for(let i = 0; i < annualSalary.length; i++) {
            totalAnnualSalary = totalAnnualSalary + annualSalary[i]
            console.log(annualSalary[i].innerText)
        }

        
        $("table").on('click', '#delete', function () {
            $(this).closest('tr').remove();
        })
    })
})
