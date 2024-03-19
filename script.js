const bob = document.querySelector('.face')

let count = 0

function moveBob(){
    console.log('hi')
    count += 50
    console.log(count)
    bob.style.left = count + 'px'
}

bob.addEventListener('click', moveBob)

