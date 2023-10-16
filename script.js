let current_display = '';
document.querySelector('#display').value = current_display;

let append_value = (value) => {
    current_display += value;
    document.querySelector('#display').value = current_display;
}

let result = () => {
    current_display = eval(current_display);
    document.querySelector('#display').value = current_display
}

let append_mod = () => {
    let a = current_display.slice(0, -1);
    console.log(a);
}

let delete_last = () => {
    current_display = current_display.slice(0, -1);
    document.querySelector('#display').value = current_display;
}

let clear_all = () => {
    current_display = '';
    document.querySelector('#display').value = current_display;
} 