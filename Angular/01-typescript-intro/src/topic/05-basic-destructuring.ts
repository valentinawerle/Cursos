
interface AudioPlayer {
    audioVolume: number;
    songDuration: number;
    song: string;
    details: Details;

}

interface Details {
    author: string;
    year: number;
}

const audioPlayer: AudioPlayer = {
    audioVolume: 90,
    songDuration: 36,
    song: 'Lover',
    details: {
        author: "Taylor Swift",
        year: 2019,
    }

}
 
const { song: anotherSong , songDuration: duration, details } = audioPlayer;

const { author } = details;

console.log('Song: ', anotherSong);
console.log('Duration: ', duration);
console.log('Author: ', author);


export {};