const Customer=require("../../model/sequelize/Customer");
const Car=require("../../model/sequelize/Car");
const Order=require("../../model/sequelize/Order");

exports.getCar=()=>{
    return Car.findAll();
};
exports.getCarById=(carId)=>{
    return Car.findByPk(carId,
        {
            include:[{
                model:Order,
                as:'order',
                include:[{
                    model:Customer,
                    as:'customer'
                }]
            }]
        });
};

exports.createCar=(newCarData)=>{
    return Car.create({
        carBrand:newCarData.carBrand,
        carModel:newCarData.carModel,
        price:newCarData.price
    });
};

exports.updateCar=(carId,carData)=>{
    const carBrand=carData.carBrand;
    const carModel=carData.carModel;
    const price=carData.price;
    return Car.update(carData,{where:{_id:carId}});
};

exports.deleteCar=(carId)=>{
    return Car.destroy({
        where:{_id:carId}
    });
};