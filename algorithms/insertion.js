// jab insertion sort button ko press kiya to ye sb functions honge
const insertionSortBtn = document.querySelector(".insertionSort");
insertionSortBtn.addEventListener('click',
  async () => { // async function to enable wait for bubble sort to complete
    disSortingBtn();
    disSizeSlider();
    disNewArrayBtn();
    enResetBtn();
    await insertion(); 
    enSortingBtn();
    enSizeSlider();
    enNewArrayBtn();
    disResetBtn();
  });

async function insertion() {
  console.log('In insertionSort');
  const barArray = document.querySelectorAll(".bar");
  
  barArray[0].style.background = '#1E90FF';
  for (let i = 1; i < barArray.length; i++) {
    console.log('In ' + i + ' i loop');
    let j = i - 1; 
    let key = barArray[i].style.height;
    
    barArray[i].style.background = 'crimson';

    await waitToComplete(delay + 10); 

    while (j >= 0 && (parseInt(barArray[j].style.height) > parseInt(key))) { 
      console.log('In while loop');
      
      barArray[j].style.background = 'crimson';
      swap(barArray[j + 1], barArray[j]); 
      j--;

      await waitToComplete(delay + 20); 
    }

    
    for (let k = i; k >= 0; k--) {
      if (barArray[k].style.background == '#1E90FF') break; 
      barArray[k].style.background = '#1E90FF';
    }
  }
}
