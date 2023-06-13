function Task_01(){
    
    for (let index = 0; index < 2; index++) {
        let filmName = prompt("Введите название любимого фильма:");
        const veryLoveFilm = "властелин колец";
        //Примитивный немного интерактивный способ общения с пользователем)
        if(filmName.toLowerCase() == veryLoveFilm ){
            let isTrueFilm = confirm("Властелин колец - достойная кинотрилогия?");

            if(isTrueFilm){
                alert("Я тоже с тобой согласен!! :-)");
            }
            else
                alert("Жаль, очень жаль за такой ответ :-(");
            
            break;
        }
        else if(filmName != veryLoveFilm && index < 1){
            alert("Попробуйте еще раз!")
        }
    }
}
//Функция для вывода отсортированного массива в консоль
function Task_02(){
    let arr = [];
    //Цикл для заполнения массива рандомными числами
    for (let index = 0; index < 15; index++) {
        arr[index] = parseInt(Math.random() * 50);
        if(index % 2 == 0){
            arr[index] *= 10;
        } 
    }
    //Цикл сортировки. В условии можно поменять знак на > для сорт. в обратном порядке
    for(let index = 0; index < arr.length; index++){
        for(let k = index; k < arr.length; k++){
            if(arr[index] < arr[k]){
                let temp = arr[index];
                arr[index] = arr[k];
                arr[k] = temp;
            }
        }
    }

    for (let index = 0; index < arr.length; index++) {
        console.log(arr[index]);
    }
    
}