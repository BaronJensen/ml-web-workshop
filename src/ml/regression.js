import data from "../datasets/classification";
var nn;

export const runNeuralNetwoek = () => {
  const ml5 = window.ml5;
  // Step 1: load data or create some data

  // Step 2: set your neural network options
  const options = {
    task: "classification",
    debug: true,
    inputs: ["r", "g", "b"],
    outputs: ["color"],
  };

  // Step 3: initialize your neural network
  nn = ml5.neuralNetwork(options);

  // Step 4: add data to the neural network
  data.forEach((item) => {
    const inputs = {
      r: item.r,
      g: item.g,
      b: item.b,
    };
    const output = {
      color: item.color,
    };

    nn.addData(inputs, output);
  });

  // Step 5: normalize your data;
  nn.normalizeData();

  // Step 6: train your neural network
  const trainingOptions = {
    epochs: 70,
    batchSize: 12,
  };
  nn.train(trainingOptions, finishedTraining);

  // Step 7: use the trained model
  function finishedTraining() {
    classify();
  }

  // Step 8: make a classification
  function classify() {
    const input = {
      r: 20,
      g: 10,
      b: 255,
    };
    nn.classify(input, handleResults);
  }

  // Step 9: define a function to handle the results of your classification
  function handleResults(error, result) {
    if (error) {
      console.error(error);
      return;
    }
    console.log(result); // {label: 'red', confidence: 0.8};
  }
};
