let make_album = (artist, title)=>{
    return({
        "Artisit":artist,
        "Title":title,
    });
}
let album1 = make_album("Abubakar","Sufiana Kalam");
let album2 = make_album("Abida Perveen","Kalam Bullhy Shah");
let album3 = make_album("Hadiqa Kiani", "Bohy Barian");

console.log(album1.Artisit);
console.log(album1.Title);
console.log(album2.Artisit);
console.log(album2.Title);
console.log(album3.Artisit);
console.log(album3.Title);

let makeAlbumwithTracks = (artist, title, tracks)=>{
    return({
        "Artisit":artist,
        "Title":title,
        "Tracks":tracks,
    });
}

let album4 = makeAlbumwithTracks("Sagher","Love & Romance",15);
console.log(album4);