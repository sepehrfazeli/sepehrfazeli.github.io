let profile_image = document.getElementById("profile_image");

const proin = (event) => {
    event.target.style["box-shadow"] = "0px 10px 20px rgb(0, 9, 134)";
};
const proout = (event) => {
    event.target.style["box-shadow"] = "0px 10px 20px black";
};
profile_image.addEventListener("mouseenter", proin);
profile_image.addEventListener("mouseleave", proout);
////////////////////////////////////////////////////////////////////////
let projects = ["p1", "p2", "p3"];
let project = []
let p1 = document.getElementById("p1");

// p1.getElementsByTagName("img")[0].addEventListener('click', x=>{
//     x.target.parentElement.parentElement.getElementsByTagName("embed")[0].style.display = "none";
// })
projects.forEach(x => {
    project.push(document.getElementById(x));
});
project.forEach(x => {
    x.getElementsByTagName("img")[0].addEventListener("click", (x) => {
        let bullet = x.target.parentElement.parentElement.getElementsByTagName(
            "embed"
        )[0];
        if (bullet.style.display === "none") {
            bullet.style.display = "block";
            x.target.style.transform = "rotate(180deg)";
        } else {
            bullet.style.display = "none";
            x.target.style.transform = "rotate(90deg)";
        }
    });
});