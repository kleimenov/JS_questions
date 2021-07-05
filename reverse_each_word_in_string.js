let string = "Welcome to this Javascript Guide!";

const reverse_text = (text, separator) => {
    return text.split(separator).reverse().join(separator)
}

console.log(reverse_text(string, ''))
console.log(reverse_text(string, ' '))