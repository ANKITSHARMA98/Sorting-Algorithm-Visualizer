const selectionSortBtn = document.querySelector(".selectionSort");
selectionSortBtn.addEventListener('click',
  async () => { // async function to enable wait for bubble sort to complete
    disSortingBtn();
    disSizeSlider();
    disNewArrayBtn();
    enResetBtn();
    await selection(); 
    enSortingBtn();
    enSizeSlider();
    enNewArrayBtn();
    disResetBtn();

  });

async function selection() {
  console.log('In selectionSort');
  const barArray = document.querySelectorAll(".bar");
  for (let i = 0; i < barArray.length; i++) {
    console.log('In ' + i + ' i loop');
    let min_index = i;
    // color of the selected ith index to be swapped
    barArray[i].style.background = '#9932CC';
    for (let j = i + 1; j < barArray.length; j++) {
      console.log('In ' + j + ' j loop');
      // as we iterate in jth loop 
      barArray[j].style.background = 'crimson';

      await waitToComplete(delay - 10);
      // modified the delay to some how visualize in adequate time
      // ek transition pe kitna time in the jth loop from j to j+1
      if (parseInt(barArray[j].style.height) < parseInt(barArray[min_index].style.height)) {
        console.log('In if condition');
        if (min_index !== i) {
          
          barArray[min_index].style.background = 'turquoise';
        }
        min_index = j;
      } else {
        // 
        barArray[j].style.background = 'turquoise';
        //
      }
    }
    await waitToComplete(delay - 10);
    // modified the delay to some how visualize in adequate time
    //  transition time in the ith loop from i to i+1
    swap(barArray[min_index], barArray[i]);
    // change the min bar index back to normal as it is swapped
    barArray[min_index].style.background = 'turquoise';
    // change the sorted barArray elements color
    barArray[i].style.background = '#1E90FF';
  }
}
