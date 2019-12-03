let canvas = document.getElementById("canvas");
let ctx
let colors

start_app()

function start_app()
{
    ctx = setup_canvas(canvas);
    set_colors()
        .then(response => {
            // console.log(response.colors)
            colors = response.colors;
        })
        .catch(error => {
            console.error("Error occured: " + error);
            console.log("Using default colors");
            colors = ['#ff00a2','#00baff','#ff6c00'];
        })
    console.log(colors[0]);

    fetch('https://api.noopschallenge.com/directbot')
    .then(response => response.json())
        .then(data => {
            draw();
        })
    .catch(error => console.log(error));
}

function setup_canvas(canvas) {
    let ctx = canvas.getContext('2d');
    ctx.canvas.width = window.innerWidth;
    ctx.canvas.height = window.innerHeight;
    ctx.canvas.backgroundColor = '#f1f1f1';
    return ctx;
}

// function set_colors() {
//     let colors;
//     fetch('https://api.noopschallenge.com/hexbot?count=5')
//     .then(response => response.json())
//         .then(data => {
//             colors = data.colors;
//             console.log("Colors: " + colors)
//         })
//     .catch((error) => {
//         colors = ['#ff00a2','#00baff','#ff6c00']
//         console.error("Error occured: " + error);
//         console.log("Setting default colors!")
//     })
//     return colors;
// }

function set_colors() {
    return new Promise((resolve, reject) => {
        fetch("https://api.noopschallenge.com/hexbot?count=5")
        .then(response => resolve(response.json()))
        .catch(error => reject(error))
    })
}

function draw() {
    console.log("Draw function.")
}