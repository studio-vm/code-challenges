function songDecoder(song) {
   let regexp = /WUB|WUB{2}/
   // console.log(song.split(regexp).join(" ").trim().replace("  ", " "));
   return song.split(regexp).join(" ").trim().replace(/\s{3}/g, " ");
   // return song.split(regexp).join(" ").trim().join(" ");
}

// String.replaceAll()

console.log(songDecoder("AWUBBWUBC"))
   // , "A B C", "WUB should be replaced by 1 space");
console.log(songDecoder("AWUBWUBWUBBWUBWUBWUBC"))
   // , "A B C", "multiples WUB should be replaced by only 1 space");
console.log(songDecoder("WUBAWUBBWUBCWUB"))

console.log(songDecoder("WUBWEWUBAREWUBWUBTHEWUBCHAMPIONSWUBMYWUBFRIENDWUB"))
// , "A B C", "heading or trailing spaces should be removed");
