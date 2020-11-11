<template>
 <ModelLoader :isReady="isReady">
    <h1>AI Generated Color palette</h1>

    <button @click="onPredictClick">Predict</button>
    <button @click="onTrainClick">Train</button>
    <button @click="onAddDataClick">Add data</button>
  <hr />
  <div class="colorBox" :style="{background: colorInputs?.defaultPrimaryColorClass }">
    <input v-model="primary" placeholder="Primary colors"/>
  </div>
  <div class="colorBox" :style="{background: colorInputs?.accentColorClass}">
    <input v-model="secondary" placeholder="Secondary colors"/>
  </div>
  <hr />

    <div class="card">
    <div class="cardHeader" :style="{background: result.lightPrimaryColorClass}">
    </div>
     <div class="cardHero" :style="{background: result?.darkPrimaryColorClass, color: result.textPrimaryColorClass}">
       <h3>Hello 😎</h3>
       <p>Welcome to AI PP</p>
        <button class="cardButton" :style="{background: colorInputs?.accentColorClass, color: result.textPrimaryColorClass}">X</button>
    </div>
     <div class="cardContent">
          <h2 :style="{color: result.primaryTextColorClass}">
          Hi my friend
          </h2>
           <p  :style="{color: result.secondaryTextColorClass}">
          60 packages are looking for funding
         </p>
         <div class="divider" :style="{borderColor: result.dividerColorClass}"/>
    </div>
  </div>





    <div class="card">
    <div class="cardHeader" :style="{background: result.darkPrimaryColorClass}">
    </div>
     <div class="cardHero" :style="{background: result?.lightPrimaryColorClass, color: result.primaryTextColorClass}">
       <h3>Hello 😎</h3>
       <p :style="{color: result.secondaryTextColorClass}">Welcome to AI PP</p>
        <button class="cardButton" :style="{background: result?.darkPrimaryColorClass, color: result.textPrimaryColorClass}">X</button>
    </div>
     <div class="cardContent">
          <h2 :style="{color: result.primaryTextColorClass}">
          Hi my friend
          </h2>
           <p  :style="{color: result.secondaryTextColorClass}">
          60 packages are looking for funding
         </p>
         <div class="divider" :style="{borderColor: result.dividerColorClass}"/>
    </div>
  </div>


  
    <div class="card">
    <div class="cardHeader" :style="{background: result.lightPrimaryColorClass}">
    </div>
     <div class="cardHero" :style="{background: colorInputs?.defaultPrimaryColorClass, color: result.textPrimaryColorClass}">
       <h3>Hello 😎</h3>
       <p>Welcome to AI PP</p>
        <button class="cardButton" :style="{background: result.lightPrimaryColorClass, color: result.textPrimaryColorClass}">X</button>
    </div>
     <div class="cardContent">
          <h2 :style="{color: result.primaryTextColorClass}">
          Hi my friend
          </h2>
           <p  :style="{color: result.secondaryTextColorClass}">
          60 packages are looking for funding
         </p>
         <div class="divider" :style="{borderColor: result.dividerColorClass}"/>
    </div>
  </div>


    <div class="card">
    <div class="cardHeader" :style="{background:  colorInputs?.defaultPrimaryColorClass}">
    </div>
     <div class="cardHero" :style="{background: result?.darkPrimaryColorClass, color: result.textPrimaryColorClass}">
       <h3>Hello 😎</h3>
       <p>Welcome to AI PP</p>
        <button class="cardButton" :style="{background: colorInputs?.defaultPrimaryColorClass, color: result.textPrimaryColorClass}">X</button>
    </div>
     <div class="cardContent">
          <h2 :style="{color: result.primaryTextColorClass}">
          Hi my friend
          </h2>
           <p  :style="{color: result.secondaryTextColorClass}">
          60 packages are looking for funding
         </p>
         <div class="divider" :style="{borderColor: result.dividerColorClass}"/>
    </div>
  </div>
  
  


 





  <div v-if="result.darkPrimaryColorClass">
    <div class="colorBox" :style="{background: result.darkPrimaryColorClass}">
    </div>
     <div class="colorBox" :style="{background: result.lightPrimaryColorClass}">
    </div>
     <div class="colorBox" :style="{background: result.textPrimaryColorClass}">
    </div>
     <div class="colorBox" :style="{background: result.primaryTextColorClass}">
    </div>
     <div class="colorBox" :style="{background: result.secondaryTextColorClass}">
    </div>
     <div class="colorBox" :style="{background: result.dividerColorClass}">
    </div>
  </div>
 </ModelLoader>
</template>


<script>
import { ref, onBeforeMount, computed } from "vue";
import {
  loadModel,
  predict,
  addData,
  train
} from "../ml/regression";

import ModelLoader from "./ModelLoader";
import { getInputColors, getResponseColors } from '../utils/parseCSS';

export default {
  name: "ColorPalette",
  components: {
    ModelLoader,
  },
  setup() {
    const isReady = ref(false);
    const isTrained = ref(false);
    const primary = ref("12,31,31");
    const secondary = ref("255,255,255");
    const result = ref({});
    const colorInputs = computed(() => getInputColors( [...primary.value.split(","), ...secondary.value.split(",")].reverse()) ) 


  
    const onTrainClick = () => {
      train()
      isTrained.value = true
    };


    const onAddDataClick = () => {
       addData()
    };

    const load = () => {
     loadModel(() => {
       isReady.value = true
     
     })
    };

    onBeforeMount(() => {
      load();
    });


  
    const onPredictClick = () => {
      const newInput = [...primary.value.split(","), ...secondary.value.split(",")].map((value) => parseFloat(value))
      if(newInput.length === 6){
        predict(newInput, (response) => result.value = getResponseColors(response?.reverse()));
      }

    };

   

    return {
      onAddDataClick,
      onTrainClick,
      onPredictClick,
      isReady,
      isTrained,
      result,
      primary,
      secondary,
      colorInputs,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
*{
  font-family: 'Nunito', sans-serif;
  box-sizing: border-box;
}
h3 {
  margin: 0;
  text-align: center;
  font-size: 33px;
  font-weight: 400;
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
  margin-top: 2rem;
  padding: 8px 12px;
  border-radius: 8px;
  border: none;
  background: none;
    text-align: center;

}
.colorBox{
  display: inline-block;
  text-align: center;
  width: 300px;
  height: 100px;
  margin: 5px;
  border-radius: 12px;
  font-size: 12px;
  border-radius: 50px;
 box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);
}

.card{
  display: inline-block;
  position: relative;
  text-align: center;
  width: 400px;
  height: 500px;
  margin: 50px 10px;
  border-radius: 12px;
  font-size: 12px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);
}

.cardHeader{
   height: 20px;
}
.cardHero{
  padding-top: 90px;
   height: 200px;
}
.cardButton{
  padding: 0.4rem 1.8rem;
  border: none;
  border-radius: 12px;
  font-size: 16px;
  border-radius: 50%;
  width: 80px;
  height: 80px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
}
.cardContent{
  padding: 100px;

}
.divider{
  border: 0.9px solid rgba(0,0,0,0.12);
}
</style>
