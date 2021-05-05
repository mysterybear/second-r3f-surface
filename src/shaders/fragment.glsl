#ifdef GL_ES
precision mediump float;
#endif

varying vec2 vUv;
uniform sampler2D u_image;
uniform vec4 u_inset;

void main() {
  // vec4 texture = texture2D(u_image, vUv);
  // float xMask = step(vUv.x, 1.0 - u_inset.y) * step(u_inset.w, vUv.x);
  // float yMask = step(vUv.y, 1.0 - u_inset.x) * step(u_inset.z, vUv.y);
  // gl_FragColor = vec4(xMask * yMask) * texture;
  gl_FragColor.rgb = vec3(0.0,0.0,1.0);
  gl_FragColor.a = 1.0;
}
