debugger
let mvvm = new Mvvm({
    data:{
        text:"",
        outer: {
            inner:"test"
        }
    }
})

const p = document.getElementById('p')
const input = document.getElementById('input')

input.addEventListener('keyup', e => {
    mvvm.text = e.target.value
})

mvvm.$watch('text', str => {
    p.innerText = str
})