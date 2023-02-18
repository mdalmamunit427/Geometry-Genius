// Display hidden input field
// function displayInputField() {
//     const x = document.querySelectorAll('.parallelogram-field');

//     for( i of x){
//         i.style.display = 'block'; 
//     }
// }
const products = [
    {
        name: "Parallelogram", 
        cardText: "Area (A) = b x h",
        description: 'b=10cm, h=12cm',
        

    }
]
function displayInputField() {
    const x = document.querySelector('.parallelogram-field');
    const y = document.querySelector('.ps-1.edit-btn');
    console.log(y);
    console.log(x);

    y.addEventListener('click', () =>{
        x.classList.toggle('active');
        console.log(x);
    })
}
