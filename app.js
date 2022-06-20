import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

//https://www.youtube.com/watch?v=ZGACJosABBw&t

class App {
  constructor() {
    const divContainer = document.querySelector('#webgl-container');
    this._divContainer = divContainer;

    // scene를 렌더링
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    divContainer.appendChild(renderer.domElement);

    this._renderer = renderer;

    const scene = new THREE.Scene();
    this._scene = scene;

    this._setupCamera();
    this._setupLight();
    this._setupModel();
    this._setupControls();

    window.onresize = this.resize.bind(this);
    this.resize();

    requestAnimationFrame(this.render.bind(this));
  }

  _setupControls() {
    new OrbitControls(this._camera, this._divContainer);
  }

  _setupCamera() {
    // 3차원 그래픽을 출력 할 가로/세로 크기
    const width = this._divContainer.clientWidth;
    const height = this._divContainer.clientHeight;
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 100);
    camera.position.z = 2;
    this._camera = camera;
  }
  _setupLight() {
    const color = 0xffffff;
    const intensity = 1; //광원세기
    const light = new THREE.DirectionalLight(color, intensity);
    light.position.set(-1, 2, 4);
    this._scene.add(light);
  }
  _setupModel() {
    // 3차원 객체로 구성 (장면)
    // light
    // mesh(object3d) =>geometry(형상) / material(색상/투명도 등)
    const geometry = new THREE.BoxGeometry(1, 1, 1); //가로 세로 깊이
    const material = new THREE.MeshPhongMaterial({ color: 0x44a88 });

    const cube = new THREE.Mesh(geometry, material);

    this._scene.add(cube);
    this._cube = cube;
  }
  resize() {
    const width = this._divContainer.clientWidth;
    const height = this._divContainer.clientHeight;

    this._camera.aspect = width / height;
    this._camera.updateProjectionMatrix();

    this._renderer.setSize(width, height);
  }
  render(time) {
    // scene을 camera의 시점으로 rendering
    this._renderer.render(this._scene, this._camera);
    this.update(time);

    requestAnimationFrame(this.render.bind(this));
  }

  update(time) {
    time *= 0.001; // second
    this._cube.rotateX = time;
    this._cube.rotateY = time;
  }
}

window.onload = function () {
  new App();
};
