//Exercise 1: Get the array of all Artists.
function getAllArtists(songs){
    let result = songs.map(({artist})=>artist)
    return result;
};

//Exercise 2: Get the songs of a certain artist
function getSongsFromArtist(songs, artist){
    let result = songs.filter(item =>item.artist === artist);
    return result
};



//Exercise 3: Alphabetic order by title
function orderAlphabetically(songs){
    let result = songs.map(({title})=>title).sort();
    return result.slice(0,10)
};

//Exercise 4: Order by year, ascending
function orderByYear(songs){
    const Year = "1991"
    let result = songs.map(({year})=>({['year']:year}));
    let order = result.sort((a,b)=> a.year - b.year);
    let yearSong = songs.filter(item => item.year ===  Year)
    console.info(result);
    console.info(yearSong);
    return result, order
};

//Exercise 5: Filter songs by genre
function songsByGenre(songs) {
    let result = songs.filter(item => item.genre.some["rock"]);
    console.info(result)
    return result 
};

//Exercise 6: Modify the duration of songs to seconds
function minutsToSeconds() {
    //Write your code here
};

//Exercise 7: Get the longest song
function getLongestSong(){
    //Write your code here
};

//Exercise 8: Get the shortest song
//Write the getShortestSong() function




if(typeof module !== 'undefined') {
    module.exports = {
        getAllArtists,
        getSongsFromArtist,
        orderAlphabetically,
        orderByYear,
        songsByGenre,
        minutsToSeconds,
        getLongestSong
    };
};
