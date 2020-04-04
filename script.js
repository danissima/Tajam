let popup = document.getElementById('popup'), popupToggle = document.querySelector('.play'),
    popupClose = document.querySelector('.close');
function playVideo() {
    popup.style.display = 'flex';
}; 

popupClose.onclick = function() {
    popup.style.display = 'none';
    document.getElementById('video').contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
};

window.onclick = function(e) {
    if (e.target == popup) popup.style.display = 'none';
    document.getElementById('video').contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
};




let users = document.querySelectorAll('.testi_pics img');
users[0].feedback = "This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.";
users[1].feedback = "This is Photoshop's version  of Lorem Ipsum.";
users[2].feedback = "This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non  mauris vitae erat consequat auctor eu in elit.";
users[3].feedback = "Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non  mauris vitae erat consequat auctor eu in elit.";
users[4].feedback = "Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.";

users[0].name = 'Semf Ucuk';
users[1].name = 'Dik Adalin';
users[2].name = 'Jane Galadriel';
users[3].name = 'Jeng Kol';
users[4].name = 'Pet Romak';

users[0].position = 'CEO & founder';
users[1].position = 'Engineering';
users[2].position = 'CEO & Tengkurep';
users[3].position = 'Designer';
users[4].position = 'Marketing';

const userText = document.querySelector('.testi_text .main_about'),
      userName = document.querySelector('.testi_text .name'),
      userPosition = document.querySelector('.testi_text .position');


userText.textContent = users[2].feedback;
userName.textContent = users[2].name;
userPosition.textContent = users[2].position;

for (let i = 0; i < users.length; i++) {
    users[i].addEventListener("click", () => {
        userText.textContent = users[i].feedback;
        userName.textContent = users[i].name;
        userPosition.textContent = users[i].position;
        
        users.forEach(e => e.classList.remove('pics_active'));
        users[i].classList.add('pics_active');
    });
}













