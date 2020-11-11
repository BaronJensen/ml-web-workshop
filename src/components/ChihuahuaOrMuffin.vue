<template>
  <ModelLoader :isReady="isReady">
    <h1>Chihuahua Or Muffin</h1>
    <input v-model="inputValue" v-if="isTrained" placeholder="Add image url here" />

    <img :src="inputValue" crossorigin="anonymous" id="imageToPredict" />

    <button v-if="inputValue" @click="onPredictClick">Predict</button>
    <button v-if="!isTrained" @click="onTrainClick">Train</button>

    <h3 v-if="result">
      {{result}}
    </h3>

    <div id="trainSection" v-if="!isTrained">
      <img v-for="image in data" :key="image.id" :id="image.id" :src="image.src" crossorigin="anonymous" class="trainig-imgs"/>
    </div>
   
  </ModelLoader>
</template>

<script>
import { ref, onBeforeMount } from "vue";
import {
  loadModel,
  predict,
  addData,
} from "../ml/featureExtration";
import data from "../datasets/chihuahuaOrMuffin";

import ModelLoader from "./ModelLoader";

export default {
  name: "ImageClassifier",
  components: {
    ModelLoader,
  },
  setup() {
    const isReady = ref(null);
    const inputValue = ref("");
    const isTrained = ref(false);
    const result = ref("");

    const onTrainClick = () => {
      data.forEach((image) => {
       addData(document.getElementById(image.id), image.label)
      });

      isTrained.value = true

    };

    const load = () => {
      loadModel(() => {
        isReady.value = true;
        });
    };

    onBeforeMount(() => {
      load();
    });

    const onPredictClick = () => {
      predict(document.getElementById("imageToPredict"), ({label}) => result.value = label );
    };


    return {
      onTrainClick,
      onPredictClick,
      isReady,
      inputValue,
      isTrained,
      data,
      result
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
*{
  font-family: 'Nunito', sans-serif;
}
h3 {
  margin: 40px 0 0;
  text-align: center;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
img {
  width: 300px;
}
input {
  padding: 8px 12px;
  border-radius: 8px;
  border: "1px solid rgba(0,0,0,0.2)";
}
.trainig-imgs{
  width: 100px;
  margin: 5px;
  border-radius: 12px;
}
</style>
