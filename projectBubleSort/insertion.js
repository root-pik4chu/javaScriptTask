







var btn_quick = document.querySelector("#quick");
var btn_insertion = document.querySelector("#insertion");


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




async function insertion(){
     disableButtons();
     const n = baar.length;
     for(let i = 0 ; i < n ; i++){
          let key = baar[i].style.height;

          let j = i -1;
          while(j >= 0 && parseInt(baar[j].style.height) > parseInt(key)){
               await swapBars(baar[j] , baar[j+1]);
               j--;
          }
          baar[j+1].style.height = key;
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

btn_insertion.addEventListener('click',() => {
     insertion(); 

     // disableButtons();
});


 

 








