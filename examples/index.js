let mvvm = new Mvvm({
    data:{
        text:""
    }
})

const p = document.getElementById('p')
const input = document.getElementById('input')

input.addEventListener('keyup', e => {
    mvvm.text = e.target.value
})

mvvm.$watch('text', str => {
    console.log(p)
    p.innerHTML = str
})