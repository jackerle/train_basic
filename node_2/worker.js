const foodList = require('./data/foodList.json')



exports.getAllFood = function () {
    return foodList.data;
}

exports.getFoodFromID = function (id) {

    let food_target = foodList.data.find(food => {

        return food.id == id;
    })

    return food_target;

}


exports.getSearchFood = function (keyword) {

    let food_target = foodList.data.filter(food => {
        return food.food_name.indexOf(keyword) != -1;
    })

    return food_target

}

exports.addFood = function (food_add) {

    if (food_add.food_name != undefined && food_add.option != undefined) {
        foodList.data.push({
            "id": foodList.count,
            "food_name": food_add.food_name,
            "option": food_add.option
        })

        foodList.count++;

        return {
            "success": true
        }

    } else {

        return ({
            "success": false
        })

    }

}


exports