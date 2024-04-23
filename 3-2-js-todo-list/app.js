let userInput = prompt("What would you like to do?");

const newTodo = "new";
const listTodo = "list";
const delTodo = "delete";
const quitTodo = "quit";
const todoLists = [];

while (userInput !== quitTodo) {
    if (userInput === listTodo) {
        console.log("**********");
        for (let i = 0; i < todoLists.length; i++) {
            console.log(`${i}: ${todoLists[i]}`);
        } console.log("**********");
    
    } else if (userInput === newTodo) {
        let addTodo = prompt("What would you like to add?");
        todoLists.push(addTodo);
        console.log(`${addTodo} added to your list`);
    
    } else if (userInput === delTodo) {
        const index = parseInt(prompt("Enter the item's index to delete it"));
        const deleted = todoLists.splice(index, 1);
        console.log(`Ok, deleted ${deleted[0]}`);
    }
    userInput = prompt("What would you like to do?");
} console.log("You quit the application")