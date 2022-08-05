let randomize_array=document.getElementById("randomize_array_btn");
let sort_btn=document.getElementById("sort_btn");
let bars_container=document.getElementById("bars_container");
let minRange=1;
let maxRange=50;
let numOfBars = 70;
let unsorted_array=new Array(numOfBars);



function randomNum(min,max){
    return Math.floor(Math.random()*(max-min+1))+min;
}

function createRandomArray(){
    for(let i=0;i<numOfBars;i++){
        unsorted_array[i]=randomNum(minRange,maxRange);
    }

    return unsorted_array;
}

document.addEventListener("DOMContentLoaded",function(){
    createRandomArray();
    renderBars(unsorted_array);
})

function renderBars(array){
    for(let i=0;i<array.length;i++){
        let bar=document.createElement("div");
        bar.classList.add("bars");
        bar.style.height=array[i]*10+"px";
        bar.style.backgroundColor="rgba(255,255,255,0.8)";
        bars_container.appendChild(bar);
    }
}

randomize_array.addEventListener("click",function(){
    createRandomArray();
    bars_container.innerHTML="";
    renderBars(unsorted_array);


})


function sleep(ms){
    return new Promise((resolve) => setTimeout(resolve,ms))
}

async function bubbleSort(array){
    let bars=document.getElementsByClassName("bars");
    let lastj=0;
    let lastj1=0;
    let lastind=numOfBars-1;
    for(let i=0;i<array.length;i++){
        for(let j=0;j<array.length-i-1;j++){
            if(array[j]>array[j+1]){
                for(let k=0;k<bars.length;k++){
                    if(k !== j && k !== j+1){
                        bars[k].style.backgroundColor="rgba(0,0,0,0.8)";
                    }
                }
                let temp=array[j];
                array[j]=array[j+1];
                array[j+1]=temp;
                bars[j].style.height=array[j]*10 + "px";
                bars[j].style.backgroundColor="lightgreen";
                // bars[j].innerHTML=array[j];
                bars[j+1].style.height=array[j+1]*10 + "px";
                bars[j+1].style.backgroundColor="lightgreen";
                // bars[j+1].innerHTML=array[j+1];
                lastj=j;
                lastj1=j+1;
                await sleep(30);
            }
        }
        await sleep(30);
    }
    for(let i=0;i<numOfBars;i++){
        bars[i].style.backgroundColor="rgba(255,255,255,0.8)";
    }
    return array;
}

sort_btn.addEventListener("click",function(){
    let sorted_array = bubbleSort(unsorted_array);

    console.log(sorted_array);
})




