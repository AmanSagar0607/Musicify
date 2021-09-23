
        const music = document.querySelector("audio");
        const play = document.getElementById("play");
        const img = document.querySelector("img");

        const title = document.getElementById("title");
        const artist = document.getElementById("artist");
        const prev = document.getElementById("prev");
        const next = document.getElementById("next");




        let isplaying = false;

        //play function
        const playMusic = () => {
            isplaying = true;
            music.play();
            play.classList.replace('fa-play', "fa-pause");
            img.classList.add("anime");
        };

        //pause function
        const pauseMusic = () => {
            isplaying = false;
            music.pause();
            play.classList.replace('fa-pause', "fa-play");
            img.classList.remove("anime");
        };

        play.addEventListener('click', () => {
            if (isplaying) {
                pauseMusic();
            } else {
                playMusic();
            }
        });







        const songs = [
            {
                name: "music-1",
                title: "See You Again",
                artist: "Wiz Khalifa",
            },
            {
                name: "music-2",
                title: "Girls Like You",
                artist: "Maroon 5",
            },
            {
                name: "music-3",
                title: "Ma Belle",
                artist: "AP Dhillon",
            },
            {
                name: "music-4",
                title: "Astronaut",
                artist: "Masked Wolf",
            },
        ];


        //  isplaying ? pauseMusic() : playMusic();


        //changing music data
        const loadSong = (songs) => {
            title.textContent = songs.title;
            artist.textContent = songs.artist;
            music.src = "./music/" + songs.name + ".mp3";
            img.src = "images/" + songs.name + ".jpg";
        };

        // loadSong(songs[2]); 
        songIndex = 0;
        const nextsong = () => {
            songIndex = (songIndex +1) % songs.length;
            loadSong(songs[songIndex]);
            playMusic();
        };

        const prevSong= () =>{
            songIndex = (songIndex -1) % songs.length;
            loadSong(songs[songIndex]);
            playMusic();
        }  

        next.addEventListener('click', nextsong);
        prev.addEventListener('click', prevSong);
        