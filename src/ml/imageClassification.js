var model;

export const loadModel = (callback) => {
  const ml5 = window.ml5;
  model = ml5?.imageClassifier("MobileNet", () => {
    console.log("Model Loaded!");
    if (callback) {
      callback();
    }
  });
};

export const predict = (toPredict) => {
  model.classify(toPredict, (err, results) => {
    console.log(results);
  });
};
