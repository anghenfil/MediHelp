let start_btn: HTMLButtonElement ;
let stop_btn: HTMLButtonElement;
let bpm: HTMLInputElement;
let timeout;
let running = true;

export function init(){
    start_btn = document.getElementById("metronom-start") as HTMLButtonElement;
    stop_btn = document.getElementById("metronom-stop") as HTMLButtonElement;
    bpm = document.getElementById("bpm") as HTMLInputElement;
    start_btn.addEventListener("click", start);
    stop_btn.addEventListener("click", stop);
}

async function start(){
    stop_btn.classList.remove("hide");
    start_btn.classList.add("hide");

    running = true;
    let interval_time = Math.round((1/parseInt(bpm.value))*60*1000);
    console.log("Interval: " + interval_time + "ms")

    const context = new AudioContext();
    const makeSound = () => {
        const sound = context.createOscillator();
        sound.frequency.value = 440;
        sound.connect(context.destination);
        sound.start(context.currentTime);
        sound.stop(context.currentTime + .1);
    };


    const wait = (ms: number) => new Promise(r => setTimeout(r, ms));
    //TODO: add abort handler

    while (running) {
        makeSound();
        console.log("Current wait time:"+(60 / parseInt(bpm.value))*1000+"ms")
        await wait(Math.round((60 / parseInt(bpm.value))*1000));
    }
}

function stop(){
    stop_btn.classList.add("hide");
    start_btn.classList.remove("hide");
    running = false;
}