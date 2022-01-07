function newItem(){

    //  jQuery code according to replit
    //1. Adding a new item to the list:

    let li = $('<li></li>');
    let inputValue = $('#input').val();
    li.append(inputValue);

    if (inputValue === '') {
    alert("please type in something");
    } else {
    let list = $('#list')
    $('#list').append(li);
    }

    //2. Crossing an item out:
    function crossOut() {
        li.toggleClass("strike");
    }

    li.on("dblclick", function crossOut() {
        li.toggleClass("strike");
    });

    //3. Adding a delete button
    let crossOutButton = $('<crossOutButton></crossOutButton>');
    crossOutButton.append(document.createTextNode('X'));
    li.append(crossOutButton);

   
    function deleteListItem(){
        li.addClass("delete")
    }
    crossOutButton.on("click", deleteListItem);
    // making the list sortable
    $('#list').sortable();
}   