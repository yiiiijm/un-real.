import * as THREE from "https://unpkg.com/three@0.108.0/build/three.module.js";
import { OrbitControls } from "https://unpkg.com/three@0.108.0/examples/jsm/controls/OrbitControls.js";

let WIDTH = window.innerWidth;
let HEIGHT = window.innerHeight;
let scene, camera, renderer, controls;
let boxGroup = new THREE.Object3D();

let totalNum = 9000; //전체 박스 갯수
const depthNum = 10; //박스와 박스 사이 z값. 깊이
const totalDepthNum = totalNum * depthNum; //전체 깊이

let targetZNum = 0;
let moveZ = 0;
let mouseX = 0,
    mouseY = 0,
    moveX = 0,
    moveY = 0;

const dataArr = [
    {
        "image": "https://png.pngtree.com/png-clipart/20200704/ourmid/pngtree-black-gradient-radial-gradient-png-image_2274808.jpg",
        "link": "https://gokweol8.yikyung.repl.co",
    },
    {
        "image": "https://png.pngtree.com/png-clipart/20200704/ourmid/pngtree-black-gradient-radial-gradient-png-image_2274808.jpg",
        "link": "https://gokweol7.yikyung.repl.co",
    },
    {
        "image": "https://png.pngtree.com/png-clipart/20200704/ourmid/pngtree-black-gradient-radial-gradient-png-image_2274808.jpg",
        "link": "https://gokweol6.yikyung.repl.co",
    },
    {
        "image": "https://png.pngtree.com/png-clipart/20200704/ourmid/pngtree-black-gradient-radial-gradient-png-image_2274808.jpg",
        "link": "https://gokweol5.yikyung.repl.co",
    },
    {
        "image": "https://png.pngtree.com/png-clipart/20200704/ourmid/pngtree-black-gradient-radial-gradient-png-image_2274808.jpg",
        "link": "https://gokweol4.yikyung.repl.co",
    },
    {
        "image": "https://png.pngtree.com/png-clipart/20200704/ourmid/pngtree-black-gradient-radial-gradient-png-image_2274808.jpg",
        "link": "https://gokweol3.yikyung.repl.co",
    },
    {
        "image": "https://png.pngtree.com/png-clipart/20200704/ourmid/pngtree-black-gradient-radial-gradient-png-image_2274808.jpg",
        "link": "https://gokweol2.yikyung.repl.co",
    },
    {
        "image": "https://png.pngtree.com/png-clipart/20200704/ourmid/pngtree-black-gradient-radial-gradient-png-image_2274808.jpg",
        "link": "https://gokweol1.yikyung.repl.co",
    },
    {
        "image": "https://png.pngtree.com/png-clipart/20200704/ourmid/pngtree-black-gradient-radial-gradient-png-image_2274808.jpg",
        "link": "https://test5.yikyung.repl.co",
    },
    {
        "image": "https://png.pngtree.com/png-clipart/20200704/ourmid/pngtree-black-gradient-radial-gradient-png-image_2274808.jpg",
        "link": "https://test4.yikyung.repl.co",
    },
    {
        "image": "https://png.pngtree.com/png-clipart/20200704/ourmid/pngtree-black-gradient-radial-gradient-png-image_2274808.jpg",
        "link": "https://test3.yikyung.repl.co",
    },
    {
        "image": "https://png.pngtree.com/png-clipart/20200704/ourmid/pngtree-black-gradient-radial-gradient-png-image_2274808.jpg",
        "link": "https://test2.yikyung.repl.co",
    },
    {
        "image": "https://png.pngtree.com/png-clipart/20200704/ourmid/pngtree-black-gradient-radial-gradient-png-image_2274808.jpg",
        "link": "https://gif-1.yikyung.repl.co",
    },
    {
        "image": "https://png.pngtree.com/png-clipart/20200704/ourmid/pngtree-black-gradient-radial-gradient-png-image_2274808.jpg",
        "link": "https://gif-2.yikyung.repl.co",
    },
    {
        "image": "https://png.pngtree.com/png-clipart/20200704/ourmid/pngtree-black-gradient-radial-gradient-png-image_2274808.jpg",
        "link": "https://gif-3.yikyung.repl.co",
    },
    {
        "image": "https://png.pngtree.com/png-clipart/20200704/ourmid/pngtree-black-gradient-radial-gradient-png-image_2274808.jpg",
        "link": "https://test2.yikyung.repl.co",
    },
    {
        "image": "https://png.pngtree.com/png-clipart/20200704/ourmid/pngtree-black-gradient-radial-gradient-png-image_2274808.jpg",
        "link": "https://gif-4.yikyung.repl.co",
    },
    {
        "image": "https://png.pngtree.com/png-clipart/20200704/ourmid/pngtree-black-gradient-radial-gradient-png-image_2274808.jpg",
        "link": "https://gif-5.yikyung.repl.co",
    },
    {
        "image": "https://png.pngtree.com/png-clipart/20200704/ourmid/pngtree-black-gradient-radial-gradient-png-image_2274808.jpg",
        "link": "https://test2.yikyung.repl.co",
    },
    {
        "image": "https://png.pngtree.com/png-clipart/20200704/ourmid/pngtree-black-gradient-radial-gradient-png-image_2274808.jpg",
        "link": "https://gif-6.yikyung.repl.co",
    },
    {
        "image": "https://png.pngtree.com/png-clipart/20200704/ourmid/pngtree-black-gradient-radial-gradient-png-image_2274808.jpg",
        "link": "https://test2.yikyung.repl.co",
    },
    {
        "image": "https://png.pngtree.com/png-clipart/20200704/ourmid/pngtree-black-gradient-radial-gradient-png-image_2274808.jpg",
        "link": "https://gif-7.yikyung.repl.co",
    },
    {
        "image": "https://png.pngtree.com/png-clipart/20200704/ourmid/pngtree-black-gradient-radial-gradient-png-image_2274808.jpg",
        "link": "https://gif-8.yikyung.repl.co",
    },
    {
        "image": "https://png.pngtree.com/png-clipart/20200704/ourmid/pngtree-black-gradient-radial-gradient-png-image_2274808.jpg",
        "link": "https://test2.yikyung.repl.co",
    },
    {
        "image": "https://png.pngtree.com/png-clipart/20200704/ourmid/pngtree-black-gradient-radial-gradient-png-image_2274808.jpg",
        "link": "https://gif-9.yikyung.repl.co",
    },
    {
        "image": "https://png.pngtree.com/png-clipart/20200704/ourmid/pngtree-black-gradient-radial-gradient-png-image_2274808.jpg",
        "link": "https://gif-10.yikyung.repl.co",
    },
    {
        "image": "https://png.pngtree.com/png-clipart/20200704/ourmid/pngtree-black-gradient-radial-gradient-png-image_2274808.jpg",
        "link": "https://gif-11.yikyung.repl.co",
    },
    {
        "image": "https://png.pngtree.com/png-clipart/20200704/ourmid/pngtree-black-gradient-radial-gradient-png-image_2274808.jpg",
        "link": "https://gif-12.yikyung.repl.co",
    },
    {
        "image": "https://png.pngtree.com/png-clipart/20200704/ourmid/pngtree-black-gradient-radial-gradient-png-image_2274808.jpg",
        "link": "https://gif-13.yikyung.repl.co",
    },
    {
        "image": "https://png.pngtree.com/png-clipart/20200704/ourmid/pngtree-black-gradient-radial-gradient-png-image_2274808.jpg",
        "link": "https://gif-14.yikyung.repl.co",
    },
    {
        "image": "https://png.pngtree.com/png-clipart/20200704/ourmid/pngtree-black-gradient-radial-gradient-png-image_2274808.jpg",
        "link": "https://gif-15.yikyung.repl.co",
    },
    {
        "image": "https://png.pngtree.com/png-clipart/20200704/ourmid/pngtree-black-gradient-radial-gradient-png-image_2274808.jpg",
        "link": "https://gif-16.yikyung.repl.co",
    },
    {
        "image": "https://png.pngtree.com/png-clipart/20200704/ourmid/pngtree-black-gradient-radial-gradient-png-image_2274808.jpg",
        "link": "https://gif-17.yikyung.repl.co",
    },
    {
        "image": "https://png.pngtree.com/png-clipart/20200704/ourmid/pngtree-black-gradient-radial-gradient-png-image_2274808.jpg",
        "link": "https://gif-18.yikyung.repl.co",
    },
    {
        "image": "https://png.pngtree.com/png-clipart/20200704/ourmid/pngtree-black-gradient-radial-gradient-png-image_2274808.jpg",
        "link": "https://gif-19.yikyung.repl.co",
    },
    {
        "image": "https://png.pngtree.com/png-clipart/20200704/ourmid/pngtree-black-gradient-radial-gradient-png-image_2274808.jpg",
        "link": "https://gif-20.yikyung.repl.co",
    },
    {
        "image": "https://png.pngtree.com/png-clipart/20200704/ourmid/pngtree-black-gradient-radial-gradient-png-image_2274808.jpg",
        "link": "https://gif-21.yikyung.repl.co",
    },
    {
        "image": "https://png.pngtree.com/png-clipart/20200704/ourmid/pngtree-black-gradient-radial-gradient-png-image_2274808.jpg",
        "link": "https://gif-22.yikyung.repl.co",
    },
    {
        "image": "https://png.pngtree.com/png-clipart/20200704/ourmid/pngtree-black-gradient-radial-gradient-png-image_2274808.jpg",
        "link": "https://gif-23.yikyung.repl.co",
    },
    {
        "image": "https://png.pngtree.com/png-clipart/20200704/ourmid/pngtree-black-gradient-radial-gradient-png-image_2274808.jpg",
        "link": "https://gif-24.yikyung.repl.co",
    },
    {
        "image": "https://png.pngtree.com/png-clipart/20200704/ourmid/pngtree-black-gradient-radial-gradient-png-image_2274808.jpg",
        "link": "https://gif-25.yikyung.repl.co",
    },
    {
        "image": "https://png.pngtree.com/png-clipart/20200704/ourmid/pngtree-black-gradient-radial-gradient-png-image_2274808.jpg",
        "link": "https://gif-26.yikyung.repl.co",
    },
    {
        "image": "https://png.pngtree.com/png-clipart/20200704/ourmid/pngtree-black-gradient-radial-gradient-png-image_2274808.jpg",
        "link": "https://gif-27.yikyung.repl.co",
    },
    {
        "image": "https://png.pngtree.com/png-clipart/20200704/ourmid/pngtree-black-gradient-radial-gradient-png-image_2274808.jpg",
        "link": "https://gif-28.yikyung.repl.co",
    },
    {
        "image": "https://png.pngtree.com/png-clipart/20200704/ourmid/pngtree-black-gradient-radial-gradient-png-image_2274808.jpg",
        "link": "https://gif-29.yikyung.repl.co",
    },
    {
        "image": "https://png.pngtree.com/png-clipart/20200704/ourmid/pngtree-black-gradient-radial-gradient-png-image_2274808.jpg",
        "link": "https://gif-30.yikyung.repl.co",
    },
    {
        "image": "https://png.pngtree.com/png-clipart/20200704/ourmid/pngtree-black-gradient-radial-gradient-png-image_2274808.jpg",
        "link": "https://gif-31.yikyung.repl.co",
    },
    {
        "image": "https://png.pngtree.com/png-clipart/20200704/ourmid/pngtree-black-gradient-radial-gradient-png-image_2274808.jpg",
        "link": "https://gif-32.yikyung.repl.co",
    },
    {
        "image": "https://png.pngtree.com/png-clipart/20200704/ourmid/pngtree-black-gradient-radial-gradient-png-image_2274808.jpg",
        "link": "https://gif-33.yikyung.repl.co",
    },
    {
        "image": "https://png.pngtree.com/png-clipart/20200704/ourmid/pngtree-black-gradient-radial-gradient-png-image_2274808.jpg",
        "link": "https://gif-34.yikyung.repl.co",
    },
    {
        "image": "https://png.pngtree.com/png-clipart/20200704/ourmid/pngtree-black-gradient-radial-gradient-png-image_2274808.jpg",
        "link": "https://gif-35.yikyung.repl.co",
    },
    {
        "image": "https://png.pngtree.com/png-clipart/20200704/ourmid/pngtree-black-gradient-radial-gradient-png-image_2274808.jpg",
        "link": "https://gif-36.yikyung.repl.co",
    },
    {
        "image": "https://png.pngtree.com/png-clipart/20200704/ourmid/pngtree-black-gradient-radial-gradient-png-image_2274808.jpg",
        "link": "https://gif-37.yikyung.repl.co",
    },
    {
        "image": "https://png.pngtree.com/png-clipart/20200704/ourmid/pngtree-black-gradient-radial-gradient-png-image_2274808.jpg",
        "link": "https://gif-38.yikyung.repl.co",
    },
    {
        "image": "https://png.pngtree.com/png-clipart/20200704/ourmid/pngtree-black-gradient-radial-gradient-png-image_2274808.jpg",
        "link": "https://gif-39.yikyung.repl.co",
    },
    {
        "image": "https://png.pngtree.com/png-clipart/20200704/ourmid/pngtree-black-gradient-radial-gradient-png-image_2274808.jpg",
        "link": "https://gif-40.yikyung.repl.co",
    },
    {
        "image": "https://png.pngtree.com/png-clipart/20200704/ourmid/pngtree-black-gradient-radial-gradient-png-image_2274808.jpg",
        "link": "https://gif-41.yikyung.repl.co",
    },
    {
        "image": "https://png.pngtree.com/png-clipart/20200704/ourmid/pngtree-black-gradient-radial-gradient-png-image_2274808.jpg",
        "link": "https://gif-42.yikyung.repl.co",
    },
    {
        "image": "https://png.pngtree.com/png-clipart/20200704/ourmid/pngtree-black-gradient-radial-gradient-png-image_2274808.jpg",
        "link": "https://gif-43.yikyung.repl.co",
    },
    {
        "image": "https://png.pngtree.com/png-clipart/20200704/ourmid/pngtree-black-gradient-radial-gradient-png-image_2274808.jpg",
        "link": "https://gif-44.yikyung.repl.co",
    },
    {
        "image": "https://png.pngtree.com/png-clipart/20200704/ourmid/pngtree-black-gradient-radial-gradient-png-image_2274808.jpg",
        "link": "https://gif-45.yikyung.repl.co",
    },
    {
        "image": "https://png.pngtree.com/png-clipart/20200704/ourmid/pngtree-black-gradient-radial-gradient-png-image_2274808.jpg",
        "link": "https://gif-46.yikyung.repl.co",
    },
    {
        "image": "https://png.pngtree.com/png-clipart/20200704/ourmid/pngtree-black-gradient-radial-gradient-png-image_2274808.jpg",
        "link": "https://gif-47.yikyung.repl.co",
    },
    {
        "image": "https://png.pngtree.com/png-clipart/20200704/ourmid/pngtree-black-gradient-radial-gradient-png-image_2274808.jpg",
        "link": "https://gif-48.yikyung.repl.co",
    },
    {
        "image": "https://png.pngtree.com/png-clipart/20200704/ourmid/pngtree-black-gradient-radial-gradient-png-image_2274808.jpg",
        "link": "https://gif-49.yikyung.repl.co",
    },
    {
        "image": "https://png.pngtree.com/png-clipart/20200704/ourmid/pngtree-black-gradient-radial-gradient-png-image_2274808.jpg",
        "link": "https://gif-50.yikyung.repl.co",
    },
    {
        "image": "https://png.pngtree.com/png-clipart/20200704/ourmid/pngtree-black-gradient-radial-gradient-png-image_2274808.jpg",
        "link": "https://gif-51.yikyung.repl.co",
    },
    {
        "image": "https://png.pngtree.com/png-clipart/20200704/ourmid/pngtree-black-gradient-radial-gradient-png-image_2274808.jpg",
        "link": "https://gif-52.yikyung.repl.co",
    },
    {
        "image": "https://png.pngtree.com/png-clipart/20200704/ourmid/pngtree-black-gradient-radial-gradient-png-image_2274808.jpg",
        "link": "https://gif-53.yikyung.repl.co",
    },
    {
        "image": "https://png.pngtree.com/png-clipart/20200704/ourmid/pngtree-black-gradient-radial-gradient-png-image_2274808.jpg",
        "link": "https://gif-54.yikyung.repl.co",
    },
    {
        "image": "https://png.pngtree.com/png-clipart/20200704/ourmid/pngtree-black-gradient-radial-gradient-png-image_2274808.jpg",
        "link": "https://gif-55.yikyung.repl.co",
    },
    {
        "image": "https://png.pngtree.com/png-clipart/20200704/ourmid/pngtree-black-gradient-radial-gradient-png-image_2274808.jpg",
        "link": "https://gif-56.yikyung.repl.co",
    },
    {
        "image": "https://png.pngtree.com/png-clipart/20200704/ourmid/pngtree-black-gradient-radial-gradient-png-image_2274808.jpg",
        "link": "https://gif-57.yikyung.repl.co",
    },
    {
        "image": "https://png.pngtree.com/png-clipart/20200704/ourmid/pngtree-black-gradient-radial-gradient-png-image_2274808.jpg",
        "link": "https://gif-59.yikyung.repl.co",
    },
    {
        "image": "https://png.pngtree.com/png-clipart/20200704/ourmid/pngtree-black-gradient-radial-gradient-png-image_2274808.jpg",
        "link": "https://gif-60.yikyung.repl.co",
    },
    {
        "image": "https://png.pngtree.com/png-clipart/20200704/ourmid/pngtree-black-gradient-radial-gradient-png-image_2274808.jpg",
        "link": "https://gif-61.yikyung.repl.co",
    },
    {
        "image": "https://png.pngtree.com/png-clipart/20200704/ourmid/pngtree-black-gradient-radial-gradient-png-image_2274808.jpg",
        "link": "https://gif-62.yikyung.repl.co",
    },
    {
        "image": "https://png.pngtree.com/png-clipart/20200704/ourmid/pngtree-black-gradient-radial-gradient-png-image_2274808.jpg",
        "link": "https://gif-63.yikyung.repl.co",
    },
    {
        "image": "https://png.pngtree.com/png-clipart/20200704/ourmid/pngtree-black-gradient-radial-gradient-png-image_2274808.jpg",
        "link": "https://gif-64.yikyung.repl.co",
    },
    {
        "image": "https://png.pngtree.com/png-clipart/20200704/ourmid/pngtree-black-gradient-radial-gradient-png-image_2274808.jpg",
        "link": "https://gif-65.yikyung.repl.co",
    },
    {
        "image": "https://png.pngtree.com/png-clipart/20200704/ourmid/pngtree-black-gradient-radial-gradient-png-image_2274808.jpg",
        "link": "https://gif-66.yikyung.repl.co",
    },
    {
        "image": "https://png.pngtree.com/png-clipart/20200704/ourmid/pngtree-black-gradient-radial-gradient-png-image_2274808.jpg",
        "link": "https://gif-67.yikyung.repl.co",
    },
    {
        "image": "https://png.pngtree.com/png-clipart/20200704/ourmid/pngtree-black-gradient-radial-gradient-png-image_2274808.jpg",
        "link": "https://gif-68.yikyung.repl.co",
    },
    {
        "image": "https://png.pngtree.com/png-clipart/20200704/ourmid/pngtree-black-gradient-radial-gradient-png-image_2274808.jpg",
        "link": "https://gif-69.yikyung.repl.co",
    },
    {
        "image": "https://png.pngtree.com/png-clipart/20200704/ourmid/pngtree-black-gradient-radial-gradient-png-image_2274808.jpg",
        "link": "https://gif-70.yikyung.repl.co",
    },
    {
        "image": "https://png.pngtree.com/png-clipart/20200704/ourmid/pngtree-black-gradient-radial-gradient-png-image_2274808.jpg",
        "link": "https://gif-71.yikyung.repl.co",
    },
    {
        "image": "https://png.pngtree.com/png-clipart/20200704/ourmid/pngtree-black-gradient-radial-gradient-png-image_2274808.jpg",
        "link": "https://gif-72.yikyung.repl.co",
    },
    {
        "image": "https://png.pngtree.com/png-clipart/20200704/ourmid/pngtree-black-gradient-radial-gradient-png-image_2274808.jpg",
        "link": "https://gif-73.yikyung.repl.co",
    },
    {
        "image": "https://png.pngtree.com/png-clipart/20200704/ourmid/pngtree-black-gradient-radial-gradient-png-image_2274808.jpg",
        "link": "https://gif-74.yikyung.repl.co",
    },
    {
        "image": "https://png.pngtree.com/png-clipart/20200704/ourmid/pngtree-black-gradient-radial-gradient-png-image_2274808.jpg",
        "link": "https://gif-75.yikyung.repl.co",
    },
    {
        "image": "https://png.pngtree.com/png-clipart/20200704/ourmid/pngtree-black-gradient-radial-gradient-png-image_2274808.jpg",
        "link": "https://gif-76.yikyung.repl.co",
    },
    {
        "image": "https://png.pngtree.com/png-clipart/20200704/ourmid/pngtree-black-gradient-radial-gradient-png-image_2274808.jpg",
        "link": "https://gif-77.yikyung.repl.co",
    },
    {
        "image": "https://png.pngtree.com/png-clipart/20200704/ourmid/pngtree-black-gradient-radial-gradient-png-image_2274808.jpg",
        "link": "https://gif-79.yikyung.repl.co",
    },
    {
        "image": "https://png.pngtree.com/png-clipart/20200704/ourmid/pngtree-black-gradient-radial-gradient-png-image_2274808.jpg",
        "link": "https://gif-80.yikyung.repl.co",
    },
    {
        "image": "https://png.pngtree.com/png-clipart/20200704/ourmid/pngtree-black-gradient-radial-gradient-png-image_2274808.jpg",
        "link": "https://gif-81.yikyung.repl.co",
    },
    {
        "image": "https://png.pngtree.com/png-clipart/20200704/ourmid/pngtree-black-gradient-radial-gradient-png-image_2274808.jpg",
        "link": "https://gif-82.yikyung.repl.co",
    },
    {
        "image": "https://png.pngtree.com/png-clipart/20200704/ourmid/pngtree-black-gradient-radial-gradient-png-image_2274808.jpg",
        "link": "https://gif-85.yikyung.repl.co",
    }
    
  // ... 더 많은 데이터 객체들
];

const infiniteDataArr = new Array(totalNum)
  .fill(null)
  .map((_, i) => dataArr[i % dataArr.length]);




const init = () => {
    totalNum = dataArr.length - 1; //전체 박스 갯수

    scene = new THREE.Scene();
    scene.background = new THREE.Color("#000000"); //배경 컬러 #6fbdff
    camera = new THREE.PerspectiveCamera(75, WIDTH / HEIGHT, 1, 1000);
    camera.position.set(0, 0, 70);

    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(WIDTH, HEIGHT);
    renderer.shadowMap.enabled = true;
    //그림자 활성화
    // document.body.appendChild(renderer.domElement);
    document.querySelector("#canvasWrap").appendChild(renderer.domElement);
    //cavasWrap 에 render 넣는다

    document.body.style.height = `${HEIGHT + totalNum * 500}px`;
    //body 스크롤 만들기

    //안개
    const near = 100;
    const far = 300;
    const color = "#000000";
    scene.fog = new THREE.Fog(color, near, far);

    // const axes = new THREE.AxesHelper(150);
    // scene.add(axes);

    // const gridHelper = new THREE.GridHelper(240, 20);
    // scene.add(gridHelper);

    //조명 넣기
    var light = new THREE.HemisphereLight(0xffffff, 0x080820, 0.8);
    light.position.set(100, 100, 0);
    scene.add(light);

    controls = new OrbitControls(camera, renderer.domElement);
    controls.enableZoom = false;

    for (let i = 0; i <= totalNum; i++) {
        addBox(i);
    }
    scene.add(boxGroup);
    addLight(15, 15, 20);
};


// 박스 추가
const addBox = (i) => {
  const data = infiniteDataArr[i];
  const imageMap = new THREE.TextureLoader().load(data.image);

  const material = new THREE.SpriteMaterial({ map: imageMap });
  const boxMesh = new THREE.Sprite(material);
  boxMesh.scale.set(5, 5, 1);

  let x = Math.random() * 400 - 400 / 2;
  let y = Math.random() * 200 - 200 / 2;
  let z = Math.floor(i / totalNum) * totalDepthNum - (i % totalNum) * depthNum;
  boxMesh.name = `imageBox_${i}`;
  boxMesh.link = data.link;
  boxMesh.position.set(x, y, z);
  boxMesh.rotation.set(x, y, z);
  boxGroup.add(boxMesh);
};

// 이미지 데이터 반복해서 추가
for (let i = 0; i < totalNum; i++) {
  addBox(i);
}
boxGroup.position.z = -totalDepthNum; // 이미지 데이터가 반대 방향으로 이동




//조명 넣기
const addLight = (...pos) => {
    const color = 0xffffff;
    const intensity = 0.4;
    const light = new THREE.PointLight(color, intensity);
    light.castShadow = true;

    light.position.set(...pos);

    // const helper = new THREE.PointLightHelper(light);
    // scene.add(helper);

    scene.add(light);
};

const raycaster = new THREE.Raycaster();
const pointer = new THREE.Vector2();

const onPointerMove = (event) => {
    pointer.x = (event.clientX / WIDTH) * 2 - 1;
    pointer.y = -(event.clientY / HEIGHT) * 2 + 1;

    raycaster.setFromCamera(pointer, camera);

    // 레이저 닿는 녀석 찾기
    const intersects = raycaster.intersectObjects(boxGroup.children);

    //마우스 오버가 된 녀석들은 빨간색으로
    // for (let i = 0; i < intersects.length; i++) {
    //     intersects[i].object.material.color.set(0xff0000);
    // }

    if (intersects.length > 0) {
        document.querySelector("body").style.cursor = "pointer";
    } else {
        document.querySelector("body").style.cursor = "auto";
    }
};

let previousPopup;

const onDocumentMouseDown = (event) => {
    const vector = new THREE.Vector3(pointer.x, pointer.y, 0.5);

    vector.unproject(camera);
    raycaster.setFromCamera(pointer, camera);
    const intersects = raycaster.intersectObjects(boxGroup.children);

    if (intersects.length > 0) {
        const item = intersects[0].object;
        const itemName = item.name;
        
        if (previousPopup && !previousPopup.closed) {
            // 이미 열려있는 팝업이 있는 경우, 해당 팝업을 닫습니다.
            previousPopup.close();
        }
        
        // 새로운 팝업을 엽니다.
        const newPopup = window.open(item.link, "_blank", "width=500,height=500,left=" + Math.random() * screen.width + ",top=" + Math.random() * screen.height + ",menubar=no,status=no,titlebar=no,toolbar=no,dependent=yes");

        // 새로 열린 팝업을 previousPopup 변수에 저장합니다.
        previousPopup = newPopup;
        
        console.log(item.link);
    }
};



const animate = () => {
    //controls.update();

    targetZNum += 0.2;
    moveZ += (targetZNum - moveZ) * 0.008
    boxGroup.position.z = moveZ;

    moveX += (mouseX - moveX - WIDTH / 2) * 0.1;
    moveY += (mouseY - moveY - WIDTH / 2) * 0.1;

    boxGroup.position.x = -(moveX / 60);
    boxGroup.position.y = moveY / 50;

    camera.lookAt(scene.position);
    camera.updateProjectionMatrix();
    renderer.render(scene, camera);
    requestAnimationFrame(animate);
};

const stageResize = () => {
    WIDTH = window.innerWidth;
    HEIGHT = window.innerHeight;

    camera.updateProjectionMatrix();
    renderer.setSize(WIDTH, HEIGHT);
    camera.aspect = WIDTH / HEIGHT;
    //카메라 비율을 화면 비율에 맞춘다
};

let scrolly = 0;
let pageNum = 0;
const progressBar = document.querySelector(".bar");
let perNum = 0;

const scrollFunc = (event) => {
    // console.log(event.deltaY);
    if (event.deltaY < 0) {
        if (targetZNum > 0) {
            targetZNum -= depthNum;
        }
    } else {
        if (targetZNum < totalDepthNum) {
            targetZNum += depthNum;
        }
    }
    console.log(targetZNum);
    // targetNum = event.deltaY;
};



init();
animate();
window.addEventListener("resize", stageResize);
window.addEventListener("wheel", scrollFunc);
//window.addEventListener("scroll", scrollFunc);

window.addEventListener("mousemove", (e) => {
    //console.log(e);
    mouseX = e.clientX;
    mouseY = e.clientY;
});

window.addEventListener("pointermove", onPointerMove);
window.addEventListener("mousedown", onDocumentMouseDown);
//window.requestAnimationFrame(render);
