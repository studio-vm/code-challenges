function domainName(url) {
  let regex = /^[^a-z][^\//];

  return url.match(regex);
  //your code here
}

console.log(domainName("http://github.com/carbonfive/raygun"));

domainName("http://github.com/carbonfive/raygun") == "github";
domainName("http://www.zombie-bites.com") == "zombie-bites";
domainName("https://www.cnet.com") == "cnet";;



// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example: