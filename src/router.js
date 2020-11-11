import { createWebHistory, createRouter } from "vue-router";
import ChihuahuaOrMuffin from "@/components/ChihuahuaOrMuffin";
import ImageClassifier from "@/components/ImageClassifier";
import ColorPalette from "@/components/ColorPalette";
import Home from "@/components/Home";

const routes = [
  {
    path: "/chihuahuaOrMuffin",
    name: "ChihuahuaOrMuffin",
    component: ChihuahuaOrMuffin,
  },
  {
    path: "/image-classifier",
    name: "ImageClassifier",
    component: ImageClassifier,
  },
  {
    path: "/color-palette",
    name: "ColorPalette",
    component: ColorPalette,
  },
  {
    path: "/",
    name: "home",
    component: Home
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;