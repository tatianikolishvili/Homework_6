function loginUser(email, password, callback) {
    setTimeout(() => {
        callback({ userEmail : email});
    }, 5000);
}

function getUserVideos(email, callback) {
    setTimeout(() => {
        callback (["video 1", "video 2", "video 3"]);
    }, 1000);
}
function videoDetails(email, callback) {
    setTimeout(() => {
        callback ('Title of video');
    }, 5000)
}

    const user = loginUser("Nikolishvili@gmail.com", 329839, user => {
        console.log(user);
        getUserVideos(user.userEmail, (videos) => {
            console.log(videos);
            videoDetails(videos[0], title => {
                console.log(title);
            }); 
        });
    });
