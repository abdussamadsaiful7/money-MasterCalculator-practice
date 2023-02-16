document.getElementById('btn-calculate').addEventListener('click', function(){
    const food = document.getElementById('food-field').value;
    const rent = document.getElementById('rent-field').value;
    const clothes = document.getElementById('clothes-field').value;
    const totalExpense = parseFloat(food) + parseFloat(rent) + parseFloat(clothes);
    
});