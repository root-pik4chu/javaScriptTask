






// var arrayContainer = document.querySelector(".array_container");
// var slider = document.querySelector("#dynamicArraySizeInput");
// var slider_text = document.querySelector("#slider_value");
// var btn_bubble = document.querySelector("#bubble");
// var btn_merge = document.querySelector("#merge");
var btn_quick = document.querySelector("#quick");
var btn_selection = document.querySelector("#selection");


// var btn = document.querySelector("button");
// let baar = [];

var greenBar = document.querySelectorAll("Bars");

// function getRandonHeight(){
//      return Math.floor(Math.random() * 600 )+ 100;
// }

// function toCreateBars(size){
//      arrayContainer.innerHTML = '';
//      baar = [];
//      for(i = 0 ;  i < size ; i++){
//           const bar = document.createElement('div');
//           bar.classList.add("bars");
//           bar.style.height = getRandonHeight() + 'px';
//           arrayContainer.appendChild(bar);
//           baar.push(bar);
//      }
// }



async function selectionSort(){


     disableButtons();
     const n = baar.length;
     for(let i = 0 ; i < n ; i++){
          let minIndex = i;
          for(let j = i+1 ; j < n ; j++){
               if(parseInt(baar[j].style.height) < parseInt(baar[minIndex].style.height)) minIndex = j;
          }
          await swapBars(baar[i], baar[minIndex]);
     }
     enableButtons();



}





// async function swapBars(bar1 , bar2){
//      const orginalColor = bar1.style.backgroundColor;
//      const tempHeight = bar1.style.height;

//      bar1.style.height = bar2.style.height;
//      bar2.style.height = tempHeight;

//      bar2.style.backgroundColor = "#c1121f";

//      await new Promise(resolve => setTimeout(resolve , 50));

//      bar1.style.backgroundColor = orginalColor;
//      bar2.style.backgroundColor = orginalColor;
// }

// function disableButtons() {
//      btn.disabled = true;
//      slider.disabled = true;
// }

// function enableButtons() {
//      btn.disabled = false;
//      slider.disabled = false;
// }

// toCreateBars(slider.value);

slider.addEventListener("input" , ()=>{
     const newSize = slider.value;
     slider_text.textContent = `Array Size: ${newSize}`;
     toCreateBars(newSize);
});

btn_selection.addEventListener('click',() => {
     selectionSort(); 

     // disableButtons();
});


 

 








