let text = ['Comprehensive', 'community-driven', 'list', 'of', 'essential', 'JavaScript', 'interview', 'questions']
let empty_arr = []
const chack_length_of_string = (string) => {
    let longest_string_length;
    let longest_string;
    if(string.length > 0) {
        longest_string = string[0];
        longest_string_length = string[0].length;
        string.array.forEach(element => {
            if(element.length > longest_string_length) {
                longest_string_length = element.length; 
                longest_string = element;
            }
        });
        console.log('the longets string is', longest_string, 'length is equal to:', longest_string_length);
    } else {
        console.log('This is the empty array')
    }
}

chack_length_of_string(text)
chack_length_of_string(empty_arr)