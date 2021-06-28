// when bubble sort button is press this will run
const bubbleSortBtn = document.querySelector(".bubbleSort")
bubbleSortBtn.addEventListener('click',
  async () => { // async function to enable wait for bubble sort to complete
    disSortingBtn();
    disSizeSlider();
    disNewArrayBtn();
    enResetBtn();
    await bubble(); // when  bubble sort complete

    enSortingBtn();
    enSizeSlider();
    enNewArrayBtn();
    disResetBtn();
  });

async function bubble() {
  console.log('In bubbleSort')
  const barArray = document.querySelectorAll(".bar");
  for (let i = 0; i < barArray.length - 1; i++) {
    console.log('In ' + i + ' i loop');
    for (let j = 0; j < barArray.length - i - 1; j++) {
      console.log('In ' + j + ' j loop');
      barArray[j].style.background = 'crimson';
      barArray[j + 1].style.background = 'crimson';
      if (parseInt(barArray[j].style.height) > parseInt(barArray[j + 1].style.height)) {
        console.log('In if condition');
        await waitToComplete(delay); // time to keep color change color on the selected j and j+1 bars
        // after this time change the color to original
        swap(barArray[j], barArray[j + 1]);
      }
      barArray[j].style.background = 'turquoise';
      barArray[j + 1].style.background = 'turquoise';
    }
    // on each ith loop completion last se ek sorted hojaegi
    barArray[barArray.length - 1 - i].style.background = '#1E90FF';
  }
  barArray[0].style.background = '#1E90FF';
}
