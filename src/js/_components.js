import testFnc from "./components/test";
testFnc();
console.log("Start components");

document.addEventListener('DOMContentLoaded', function() {
    const listItems = document.querySelectorAll('.team__supervisor_and_list__list-element');
    const employeeContainers = document.querySelectorAll('.team__information__employees');
    
    function activateItem(index) {
        // Убираем класс active у всех элементов списка
        listItems.forEach(item => {
            item.classList.remove('actives');
        });
        
        // Убираем класс active у всех контейнеров сотрудников
        employeeContainers.forEach(container => {
            container.classList.remove('active');
        });
        
        // Добавляем класс active выбранному элементу списка и соответствующему контейнеру
        if (listItems[index]) {
            listItems[index].classList.add('actives');
        }
        if (employeeContainers[index]) {
            employeeContainers[index].classList.add('active');
        }
    }
    
    // Добавляем обработчики кликов для каждого элемента списка
    listItems.forEach((item, index) => {
        item.addEventListener('click', function() {
            activateItem(index);
        });
    });
    
    console.log("Team tabs component loaded"); // для проверки
});