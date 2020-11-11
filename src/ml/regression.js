import data from "../datasets/palettes";

let brain;

export const loadModel = (callback) => {
  const ml5 = window.ml5;

  let options = {
    task: 'regression',
    debug: true,
    input: 3 * 2,
    output: 3 * 6
  }

  brain = ml5.neuralNetwork(options);
  callback();
};

let counter = 0
export const addData = () => {

  if(counter >= data.length){
    console.log("All items added")
    counter = 0
  }

  const item = data[counter]

  const inputs = [
    ...item["defaultPrimaryColorClass"].background,
    ...item["accentColorClass"].background ,
   
  ]
  const output = [
    ...item["darkPrimaryColorClass"].background, 
    ...item["lightPrimaryColorClass"].background,
    ...item["textPrimaryColorClass"].color ,
    ...item["primaryTextColorClass"].color,
    ...item["secondaryTextColorClass"].color,
    ...item["dividerColorClass"].borderColor
  ]

  const addVariation = (variation, value) => (value + variation >= 255) ? (value + variation) : value - 0.33
  
  brain.addData(inputs, output)
  //Let increase our data set adding values between 0.1 and 2 to have more data 
  brain.addData(inputs.map((val) => addVariation(0.1, val)), output.map((val) => addVariation(0.1, val)))
  brain.addData(inputs.map((val) => addVariation(1.8, val)), output.map((val) => addVariation(1.8, val)))
  brain.addData(inputs.map((val) => addVariation(0.75, val)), output.map((val) => addVariation(0.75, val)))
  brain.addData(inputs.map((val) => addVariation(0.5, val)), output.map((val) => addVariation(0.5, val)))
  brain.addData(inputs.map((val) => addVariation(2, val)), output.map((val) => addVariation(2, val)))
  brain.addData(inputs.map((val) => addVariation(0.4, val)), output.map((val) => addVariation(0.4, val)))

  counter++
};

export const predict = (toPredict, callback) => {
  console.log(toPredict)
  brain.predict(toPredict, (error, result) => {
    if (error) {
      console.error(error, toPredict);
      return;
    }
    if(callback){
    callback(result?.map(({value}) => value)); 
  }
 });
};



export const train = () => {
  brain.normalizeData();
 const trainingOptions = {
   epochs: 5,
 };
 brain.train(trainingOptions, () => {console.log("Training Done!")});
}

