import data from "../datasets/classification";

var nn;

export const runNeuralNetwoek = () => {
  const ml5 = window.ml5;
  const options = {
    task: "classification",
    debug: true,
    inputs: ["r", "g", "b"],
    outputs: ["color"],
    epochs: 200
  };
  nn = ml5.neuralNetwork(options);

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

  nn.normalizeData();

  const trainingOptions = {
    epochs: 70,
    batchSize: 12,
  };

  nn.train(trainingOptions, finishedTraining);

  function finishedTraining() {
    classify();
  }

  function classify() {
    const input = {
      r: 20,
      g: 10,
      b: 255,
      border: 2
    };
    nn.classify(input, handleResults);
  }

  function handleResults(error, result) {
    if (error) {
      console.error(error);
      return;
    }
    console.log(result); 
  }
};
