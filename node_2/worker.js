const foodList = require('./data/foodList.json')


exports.getAll = function () {
    return foodList.data;
}

exports.getFoodFromID = function (id) {

    let response_food = foodList.data.find(food => {
        return food.id == id;
    })

    return response_food;

}

exports.getFoodFromKeyword = function(keyword){

    let response_food = foodList.data.filter(food=>{
        return food.food_name.indexOf(keyword) != -1
    })

    return response_food;

}


exports.addFood = function(food_object){

    foodList.data.push({
        "id": foodList.count,
        "food_name" : food_object.food_name,
        "option": food_object.option,
        "price":food_object.price,
        "img":food_object.img
    })

    foodList.count++;

    return true;

}