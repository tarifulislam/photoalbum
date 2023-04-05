
document.querySelector(".btn").addEventListener("click", function () {

    var randomNumber1 = Math.floor(Math.random() * 6) + 1;
    var randamDiceImage = "man" + randomNumber1 + ".jpg";
    var randamImageSource = "image/" + randamDiceImage;
    var image1 = document.querySelectorAll("img")[0];
    image1.setAttribute("src", randamImageSource)
})







