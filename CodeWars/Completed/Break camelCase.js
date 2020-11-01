const breakCamelCasing = (str) => {
   return str.split(/(?=[A-Z])/).join(" ");
}

console.log(breakCamelCasing('camelCasingCamel'));



// solution("camelCasing") == "camel Casing"

// Example
// Complete the solution so that the function will break up camel casing, using a space between words.