varying vec2 vUv;

uniform float a;
uniform float b;
uniform float c;
uniform float d;
uniform float e;

void main() {
  vUv = uv;
  vec3 pos = position;
  pos.z = c * sin(d * sqrt(pow(a * position.x, 2.0) + pow(b * position.y, 2.0) + e));

  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
}
