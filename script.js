const  localStorageKey = "msgTask"

function NewTask(){
    let input = document.getElementById(TXT)

    if(!input.val){
        alert('Ops! Parece que você não adicionou nenhuma tarefa para seu o dia...')
    }
    //else if()
    else{
        let val = JSON.parse(localStorage.getItem(localStorageKey))
        val.push({
            name: input.val
        })
        console.log(val)
    }
}

