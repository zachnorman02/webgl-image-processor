"use strict";

const kernels = {
  original: {
    kernel: [
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    ],
    on: true,
    type: 0,
    offset: [0, 0, 0, 0],
    index: -1,
  },
  gaussianBlur: {
    kernel: [
      0, 0, 0, 0, 0, 0, 1, 2, 1, 0, 0, 2, 4, 2, 0, 0, 1, 2, 1, 0, 0, 0, 0, 0, 0,
    ],
    on: false,
    type: 0,
    offset: [0, 0, 0, 0],
    index: 0,
  },
  sharpen: {
    kernel: [
      0, 0, 0, 0, 0, 0, 0, -1, 0, 0, 0, -1, 5, -1, 0, 0, 0, -1, 0, 0, 0, 0, 0,
      0, 0,
    ],
    on: false,
    type: 0,
    offset: [0, 0, 0, 0],
    index: 1,
  },
  emboss: {
    kernel: [
      0, 0, 0, 0, 0, 0, -2, -1, 0, 0, 0, -1, 1, 1, 0, 0, 0, 1, 2, 0, 0, 0, 0, 0,
      0,
    ],
    on: false,
    type: 0,
    offset: [0, 0, 0, 0],
    index: 2,
  },
  edgeDetect: {
    kernel: [
      0, 0, 0, 0, 0, 0, -5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0,
      0,
    ],
    on: false,
    type: 0,
    offset: [0, 0, 0, 0],
    index: 3,
  },
  boxBlur: {
    kernel: [
      0,
      0,
      0,
      0,
      0,
      0,
      1 / 9,
      1 / 9,
      1 / 9,
      0,
      0,
      1 / 9,
      1 / 9,
      1 / 9,
      0,
      0,
      1 / 9,
      1 / 9,
      1 / 9,
      0,
      0,
      0,
      0,
      0,
      0,
    ],
    on: false,
    type: 0,
    offset: [0, 0, 0, 0],
    index: 4,
  },
  brightness: {
    kernel: [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
    on: true,
    type: 1,
    offset: [0, 0, 0, 0],
    index: -1,
  },
  contrast: {
    kernel: [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
    on: true,
    type: 1,
    offset: [0, 0, 0, 0],
    index: -1
  },
  exposure: {
    kernel: [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
    on: true,
    type: 1,
    offset: [0, 0, 0, 0],
    index: -1,
  },
  saturation: {
    kernel: [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
    on: true,
    type: 1,
    offset: [0, 0, 0, 0],
    index: -1
  },
  swapRedBlue: { kernel: ["bgr"], on: false, type: 2, offset: [0, 0, 0, 0], index: 5, },
  swapRedGreen: { kernel: ["grb"], on: false, type: 3, offset: [0, 0, 0, 0], index: 6, },
  swapGreenBlue: { kernel: ["rbg"], on: false, type: 4, offset: [0, 0, 0, 0], index: 7 },
  sepia: {
    kernel: [0.393, 0.769, 0.189, 0.349, 0.686, 0.168, 0.272, 0.534, 0.131],
    on: false,
    type: 5,
    offset: [0, 0, 0, 0],
    index: 8,
  },
  monochrome: {
    kernel: [0.212, 0.715, 0.114, 0.212, 0.715, 0.114, 0.212, 0.715, 0.114],
    on: false,
    type: 5,
    offset: [0, 0, 0, 0],
    index: 9,
  },
  chrome: {
    kernel: [
      1.398, -0.316, 0.065, -0.273, -0.051, 1.278, -0.08, -0.273, -0.051, 0.119,
      1.151, -0.29, 0.0, 0.0, 0.0, 1.0,
    ],
    on: false,
    type: 6,
    offset: [0.201, 0.201, 0.215, 0.0],
    index: 10,
  },
  fade: {
    kernel: [
      1.073, -0.015, 0.092, -0.115, 0.107, 0.859, 0.184, -0.115, 0.015, 0.077,
      1.104, -0.115, 0.0, 0.0, 0.0, 1.0,
    ],
    on: false,
    type: 6,
    offset: [-0.017, -0.017, -0.017, 0.0],
    index: 11,
  },
  noir: {
    kernel: [
      0.15, 1.3, -0.25, 0.1, 0.15, 1.3, -0.25, 0.1, 0.15, 1.3, -0.25, 0.1, 0.0,
      0.0, 0.0, 1.0,
    ],
    on: false,
    type: 6,
    offset: [-0.2, -0.2, -0.2, 0.0],
    index: 12,
  },
  summer: {
    kernel: [0.95, 0.2, 0.0, 0.1, 0.9, 0.0, 0.0, 0.0, 0.9],
    on: false,
    type: 5,
    offset: [0, 0, 0, 0],
    index: 13,
  },
};

let imageUrl;

function setBrightness(brightness) {
  kernels.brightness.offset = [brightness, brightness, brightness, 0];
  main();
}

function transpose(out, a) {
  if (out === a) {
    let a01 = a[1],
      a02 = a[2],
      a03 = a[3];
    let a12 = a[6],
      a13 = a[7];
    let a23 = a[11];

    out[1] = a[4];
    out[2] = a[8];
    out[3] = a[12];
    out[4] = a01;
    out[6] = a[9];
    out[7] = a[13];
    out[8] = a02;
    out[9] = a12;
    out[11] = a[14];
    out[12] = a03;
    out[13] = a13;
    out[14] = a23;
  } else {
    out[0] = a[0];
    out[1] = a[4];
    out[2] = a[8];
    out[3] = a[12];
    out[4] = a[1];
    out[5] = a[5];
    out[6] = a[9];
    out[7] = a[13];
    out[8] = a[2];
    out[9] = a[6];
    out[10] = a[10];
    out[11] = a[14];
    out[12] = a[3];
    out[13] = a[7];
    out[14] = a[11];
    out[15] = a[15];
  }

  return out;
}

function setContrast(contrast) {
  const c = 1 + contrast;
  const o = 0.5 * (1 - c);
  kernels.contrast.kernel = transpose(kernels.contrast.kernel, [
    c,
    0,
    0,
    0,
    0,
    c,
    0,
    0,
    0,
    0,
    c,
    0,
    0,
    0,
    0,
    1,
  ]);
  kernels.contrast.offset = [o, o, o, 0];
  main();
}

function setExposure(exposure) {
  const e = 1 + exposure;
  kernels.exposure.kernel = transpose(kernels.exposure.kernel, [
    e,
    0,
    0,
    0,
    0,
    e,
    0,
    0,
    0,
    0,
    e,
    0,
    0,
    0,
    0,
    1,
  ]);
  main();
}

function setSaturation(saturation) {
  const s = 1 + saturation;

  // https://www.w3.org/TR/WCAG20/#relativeluminancedef
  const lr = 0.2126;
  const lg = 0.7152;
  const lb = 0.0722;

  const sr = (1 - s) * lr;
  const sg = (1 - s) * lg;
  const sb = (1 - s) * lb;

  kernels.saturation.kernel = [
    sr + s,
    sr,
    sr,
    0,
    sg,
    sg + s,
    sg,
    0,
    sb,
    sb,
    sb + s,
    0,
    0,
    0,
    0,
    1,
  ];
  main();
}

const inputBrightness = document.getElementById("input-brightness");
document.getElementById("input-brightness").addEventListener("input", () => {
  setBrightness(Number.parseFloat(inputBrightness.value));
});
const inputContrast = document.getElementById("input-contrast");
inputContrast.addEventListener("input", () => {
  setContrast(Number.parseFloat(inputContrast.value));
});
const inputExposure = document.getElementById("input-exposure");
inputExposure.addEventListener("input", () => {
  setExposure(Number.parseFloat(inputExposure.value));
});
const inputSaturation = document.getElementById("input-saturation");
inputSaturation.addEventListener("input", () => {
  setSaturation(Number.parseFloat(inputSaturation.value));
});

function setIdentity() {
  for (let i = 1; i < 26; i++) {
    if (i === 13) {
      document.getElementById(`kernel${i}`).value = "1";
    } else {
      document.getElementById(`kernel${i}`).value = "0";
    }
  }
}

function setFilterIdentity() {
  for (let i = 1; i < 17; i++) {
    if ([1, 6, 11, 16].includes(i)) {
      document.getElementById(`filter${i}`).value = "1";
    } else {
      document.getElementById(`filter${i}`).value = "0";
    }
  }
  for (let i = 1; i < 4; i++) {
    document.getElementById(`offset${i}`).value = "0";
  }
}

function setColorIdentity() {
  for (let i = 1; i < 10; i++) {
    if ([1, 5, 9].includes(i)) {
      document.getElementById(`color${i}`).value = "1";
    } else {
      document.getElementById(`color${i}`).value = "0";
    }
  }
}

function appendKernel() {
  const kernel = [];
  for (let i = 1; i < 26; i++) {
    let kernelValue = document.getElementById(`kernel${i}`).value;
    kernelValue = kernelValue === "" ? 0 : parseFloat(kernelValue);
    const divideValue = document.getElementById("divide-text-box").value;
    if (divideValue !== "" && divideValue !== "0") {
      kernelValue = kernelValue / parseFloat(divideValue);
    }
    kernel.push(kernelValue);
  }
  let kernelName = document.getElementById("kernel-name-text-box").value;
  if (kernelName === "") {
    kernelName = Object.keys(kernels).length - 5;
  }
  while (Object.keys(kernels).includes(kernelName)) {
    kernelName += "Copy";
  }
  kernels[kernelName] = {
    kernel: kernel,
    on: true,
    type: 0,
    offset: [0, 0, 0, 0],
    index: Object.keys(kernels).length-5
  };
  document.getElementById("kernel-name-text-box").value = "";
  setIdentity();
  document.getElementById("divide-text-box").value = "";
  main();
}

function appendFilter() {
  const filter = [];
  for (let i = 1; i < 17; i++) {
    let filterValue = document.getElementById(`filter${i}`).value;
    filterValue = filterValue === "" ? 0 : parseFloat(filterValue);
    filter.push(filterValue);
  }
  let filterName = document.getElementById("filter-name-text-box").value;
  if (filterName === "") {
    filterName = Object.keys(kernels).length - 5;
  }
  while (Object.keys(kernels).includes(filterName)) {
    filterName += "Copy";
  }
  const offset = [];
  for (let i = 1; i < 5; i++) {
    let offsetValue = parseFloat(document.getElementById(`offset${i}`).value);
    offset.push(offsetValue);
  }
  kernels[filterName] = {
    kernel: filter,
    on: true,
    type: 6,
    offset: offset,
    index: Object.keys(kernels).length-5,
  };
  document.getElementById("filter-name-text-box").value = "";
  setFilterIdentity();
  main();
}

function appendColor() {
  const color = [];
  for (let i = 1; i < 10; i++) {
    let colorValue = document.getElementById(`color${i}`).value;
    colorValue = colorValue === "" ? 0 : parseFloat(colorValue);
    color.push(colorValue);
  }
  let colorName = document.getElementById("color-name-text-box").value;
  if (colorName === "") {
    colorName = Object.keys(kernels).length - 5;
  }
  while (Object.keys(kernels).includes(colorName)) {
    colorName += "Copy";
  }
  kernels[colorName] = {
    kernel: color,
    on: true,
    type: 5,
    offset: [0, 0, 0, 0],
    index: Object.keys(kernels).length-5,
  };
  document.getElementById("color-name-text-box").value = "";
  setColorIdentity();
  main();
}

document.getElementById("fileInput").addEventListener("change", handleFile);

function handleFile(e) {
  const file = e.target.files[0];
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = function (event) {
    imageUrl = event.target.result;
    main();
  };
}

function getVertexShaderSource() {
  return `#version 300 es

// an attribute is an input (in) to a vertex shader.
// It will receive data from a buffer
in vec2 a_position;
in vec2 a_texCoord;

// Used to pass in the resolution of the canvas
uniform vec2 u_resolution;
uniform float u_flipY;

// Used to pass the texture coordinates to the fragment shader
out vec2 v_texCoord;

// all shaders have a main function
void main() {

  // convert the position from pixels to 0.0 to 1.0
  vec2 zeroToOne = a_position / u_resolution;

  // convert from 0->1 to 0->2
  vec2 zeroToTwo = zeroToOne * 2.0;

  // convert from 0->2 to -1->+1 (clipspace)
  vec2 clipSpace = zeroToTwo - 1.0;

  gl_Position = vec4(clipSpace * vec2(1, u_flipY), 0, 1);

  // pass the texCoord to the fragment shader
  // The GPU will interpolate this value between points.
  v_texCoord = a_texCoord;
}
`;
}

function generateOffsetAddition() {
  let finalString = "vec4(0,0,0,0)";
  Object.keys(kernels)
    .filter(
      (k) => (kernels[k].type === 6 || kernels[k].type === 1) && kernels[k].on
    )
    .forEach((k) => {
      let off = kernels[k].offset;
      if (k === 'brightness') {
        const amountOn = Object.keys(kernels).filter(k => kernels[k].on).length - 4;
        off = [
          kernels[k].offset[0] / amountOn,
          kernels[k].offset[1] / amountOn,
          kernels[k].offset[2] / amountOn,
          kernels[k].offset[3] / amountOn,
        ];
      }
      finalString += `+ vec4(${off[0]},${off[1]},${off[2]},${off[3]})`;
    });
  return finalString;
}

function getFragmentShaderSource() {
  return `#version 300 es

// fragment shaders don't have a default precision so we need
// to pick one. highp is a good default. It means "high precision"
precision highp float;

// our texture
uniform sampler2D u_image;

// the convolution kernal data
uniform float u_kernel[25];
uniform float u_kernelWeight;
uniform int u_type;
uniform int u_size;

// the texCoords passed in from the vertex shader.
in vec2 v_texCoord;

// we need to declare an output for the fragment shader
out vec4 outColor;

vec4 swapChannels() {
  if (u_type == 2) {
    return texture(u_image, v_texCoord).bgra;
  } else if (u_type == 3) {
    return texture(u_image, v_texCoord).grba;
  } else if (u_type == 4) {
    return texture(u_image, v_texCoord).rbga;
  } else if (u_type == 5) {
    mat3 kernel = mat3(
      u_kernel[0], u_kernel[1], u_kernel[2], 
      u_kernel[3], u_kernel[4], u_kernel[5], 
      u_kernel[6], u_kernel[7], u_kernel[8]
    );
    return vec4(texture(u_image, v_texCoord).rgb * kernel, 1);
  } else if (u_type == 6) {
    mat4 kernel = mat4(
      u_kernel[0], u_kernel[1], u_kernel[2], u_kernel[3],
      u_kernel[4], u_kernel[5], u_kernel[6], u_kernel[7],
      u_kernel[8], u_kernel[9], u_kernel[10], u_kernel[11],
      u_kernel[12], u_kernel[13], u_kernel[14], u_kernel[15]
    );
    return texture(u_image, v_texCoord) * kernel;
  }
}

vec4 largeKernel() {
  vec2 onePixel = vec2(1) / vec2(textureSize(u_image, 0));
  vec4 colorSum;
  for (int i = 0; i < u_size*u_size; i++) {
    int x = i - 5*int(i / 5) - 2;
    int y = int(i / 5) - 2;
    colorSum += texture(
      u_image, 
      v_texCoord + onePixel * vec2(x,y)
    ) * u_kernel[i];
  }
  return vec4((colorSum / u_kernelWeight).rgb, 1);
}

vec4 oneKernel() {
  vec4 colorSum = texture(u_image, v_texCoord) * u_kernel[12];
  return vec4((colorSum).rgb, 1);
}

vec4 functionToRun() {
  if (u_type == 0) {
    for (int i = 0; i < u_size*u_size; i++) {
      if (u_kernel[i] != 0.0 && i != 12) {
        return largeKernel();
      }
    }
    return oneKernel();
  } else {
    return swapChannels();
  }
}

void main() {
  mat4 matrix = mat4(${kernels.brightness.kernel}) * mat4(${
    kernels.contrast.kernel
  }) * mat4(${kernels.exposure.kernel}) * mat4(${kernels.saturation.kernel});
  outColor = matrix * functionToRun() + ${generateOffsetAddition()};
}
`;
}

function main() {
  const image = new Image();
  const imageSrc = imageUrl;
  image.src = imageSrc;
  image.onload = function () {
    document.getElementById("control-list").style.display = "block";
    document.getElementById("input-boxes").style.display = "block";
    document.getElementById("input-buttons").style.display = "block";
    document.getElementById("ui-visibility-button").style.display = "block";
    render(image);
  };
}

function render(image) {
  // Get A WebGL context
  /** @type {HTMLCanvasElement} */
  const canvas = document.querySelector("#canvas");
  canvas.style.width = image.width;
  canvas.style.height = image.height;
  const gl = canvas.getContext("webgl2");
  if (!gl) {
    return;
  }

  // setup GLSL program
  const program = webglUtils.createProgramFromSources(gl, [
    getVertexShaderSource(),
    getFragmentShaderSource(),
  ]);

  // look up where the vertex data needs to go.
  const positionAttributeLocation = gl.getAttribLocation(program, "a_position");
  const texCoordAttributeLocation = gl.getAttribLocation(program, "a_texCoord");

  // lookup uniforms
  const resolutionLocation = gl.getUniformLocation(program, "u_resolution");
  const imageLocation = gl.getUniformLocation(program, "u_image");
  const kernelLocation = gl.getUniformLocation(program, "u_kernel[0]");
  const kernelTypeLocation = gl.getUniformLocation(program, "u_type");
  const kernelSizeLocation = gl.getUniformLocation(program, "u_size");
  const kernelWeightLocation = gl.getUniformLocation(program, "u_kernelWeight");
  const flipYLocation = gl.getUniformLocation(program, "u_flipY");

  // Create a vertex array object (attribute state)
  const vao = gl.createVertexArray();

  // and make it the one we're currently working with
  gl.bindVertexArray(vao);

  // Create a buffer and put a single pixel space rectangle in
  // it (2 triangles)
  const positionBuffer = gl.createBuffer();

  // Turn on the attribute
  gl.enableVertexAttribArray(positionAttributeLocation);

  // Bind it to ARRAY_BUFFER (think of it as ARRAY_BUFFER = positionBuffer)
  gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);

  // Tell the attribute how to get data out of positionBuffer (ARRAY_BUFFER)
  var size = 2; // 2 components per iteration
  var type = gl.FLOAT; // the data is 32bit floats
  var normalize = false; // don't normalize the data
  var stride = 0; // 0 = move forward size * sizeof(type) each iteration to get the next position
  var offset = 0; // start at the beginning of the buffer
  gl.vertexAttribPointer(
    positionAttributeLocation,
    size,
    type,
    normalize,
    stride,
    offset
  );

  // provide texture coordinates for the rectangle.
  var texCoordBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, texCoordBuffer);
  gl.bufferData(
    gl.ARRAY_BUFFER,
    new Float32Array([
      0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 1.0, 1.0, 0.0, 1.0, 1.0,
    ]),
    gl.STATIC_DRAW
  );

  // Turn on the attribute
  gl.enableVertexAttribArray(texCoordAttributeLocation);

  // Tell the attribute how to get data out of texCoordBuffer (ARRAY_BUFFER)
  var size = 2; // 2 components per iteration
  var type = gl.FLOAT; // the data is 32bit floats
  var normalize = false; // don't normalize the data
  var stride = 0; // 0 = move forward size * sizeof(type) each iteration to get the next position
  var offset = 0; // start at the beginning of the buffer
  gl.vertexAttribPointer(
    texCoordAttributeLocation,
    size,
    type,
    normalize,
    stride,
    offset
  );

  function createAndSetupTexture(gl) {
    const texture = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, texture);

    // Set up texture so we can render any size image and so we are
    // working with pixels.
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
    return texture;
  }

  // Create a texture and put the image in it.
  const originalImageTexture = createAndSetupTexture(gl);

  // Upload the image into the texture.
  var mipLevel = 0; // the largest mip
  var internalFormat = gl.RGBA; // format we want in the texture
  var srcFormat = gl.RGBA; // format of data we are supplying
  var srcType = gl.UNSIGNED_BYTE; // type of data we are supplying
  gl.texImage2D(
    gl.TEXTURE_2D,
    mipLevel,
    internalFormat,
    srcFormat,
    srcType,
    image
  );

  // create 2 textures and attach them to framebuffers.
  const textures = [];
  const framebuffers = [];
  for (let ii = 0; ii < 2; ++ii) {
    const texture = createAndSetupTexture(gl);
    textures.push(texture);

    // make the texture the same size as the image
    const mipLevel = 0; // the largest mip
    const internalFormat = gl.RGBA; // format we want in the texture
    const border = 0; // must be 0
    const srcFormat = gl.RGBA; // format of data we are supplying
    const srcType = gl.UNSIGNED_BYTE; // type of data we are supplying
    const data = null; // no data = create a blank texture
    gl.texImage2D(
      gl.TEXTURE_2D,
      mipLevel,
      internalFormat,
      image.width,
      image.height,
      border,
      srcFormat,
      srcType,
      data
    );

    // Create a framebuffer
    const fbo = gl.createFramebuffer();
    framebuffers.push(fbo);
    gl.bindFramebuffer(gl.FRAMEBUFFER, fbo);

    // Attach a texture to it.
    const attachmentPoint = gl.COLOR_ATTACHMENT0;
    gl.framebufferTexture2D(
      gl.FRAMEBUFFER,
      attachmentPoint,
      gl.TEXTURE_2D,
      texture,
      mipLevel
    );
  }

  // Bind the position buffer so gl.bufferData that will be called
  // in setRectangle puts data in the position buffer
  gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);

  // Set a rectangle the same size as the image.
  setRectangle(gl, 0, 0, image.width, image.height);

  // Setup a ui.
  const ui = document.querySelector("#ui");
  while (ui.hasChildNodes()) {
    ui.removeChild(ui.firstChild);
  }
  const table = document.createElement("table");
  const tbody = document.createElement("tbody");
  Object.keys(kernels)
    .sort((a, b) => kernels[a].index - kernels[b].index)
    .forEach((effect) => {
      if (
        ![
          "original",
          "brightness",
          "saturation",
          "contrast",
          "exposure",
        ].includes(effect)
      ) {
        const tr = document.createElement("tr");
        const td = document.createElement("td");
        const chk = document.createElement("input");
        chk.value = effect;
        chk.type = "checkbox";
        chk.checked = kernels[effect].on;
        chk.onchange = drawEffects;
        td.appendChild(chk);
        td.appendChild(document.createTextNode(effect));
        tr.appendChild(td);
        tbody.appendChild(tr);
      }
    });
  table.appendChild(tbody);
  ui.appendChild(table);
  $("#ui table").tableDnD({ onDrop: drawEffects });

  drawEffects();

  function computeKernelWeight(kernel) {
    const weight = kernel.reduce(function (prev, curr) {
      return prev + curr;
    });
    return weight <= 0 ? 1 : weight;
  }

  function drawEffects() {
    webglUtils.resizeCanvasToDisplaySize(gl.canvas);

    // Tell WebGL how to convert from clip space to pixels
    gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);

    // Clear the canvas
    gl.clearColor(0, 0, 0, 0);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

    // Tell it to use our program (pair of shaders)
    gl.useProgram(program);

    // Bind the attribute/buffer set we want.
    gl.bindVertexArray(vao);

    // start with the original image on unit 0
    gl.activeTexture(gl.TEXTURE0 + 0);
    gl.bindTexture(gl.TEXTURE_2D, originalImageTexture);

    // Tell the shader to get the texture from texture unit 0
    gl.uniform1i(imageLocation, 0);

    // don't y flip images while drawing to the textures
    gl.uniform1f(flipYLocation, 1);

    // loop through each effect we want to apply.
    let count = 0;
    for (let ii = 0; ii < tbody.rows.length; ++ii) {
      const checkbox = tbody.rows[ii].firstChild.firstChild;
      kernels[checkbox.value].index = ii;
      if (checkbox.checked) {
        // Setup to draw into one of the framebuffers.
        setFramebuffer(framebuffers[count % 2], image.width, image.height);
        drawWithKernel(checkbox.value);

        // for the next draw, use the texture we just rendered to.
        gl.bindTexture(gl.TEXTURE_2D, textures[count % 2]);

        // increment count so we use the other texture next time.
        ++count;
      }
      kernels[checkbox.value].on = checkbox.checked;
    }

    // finally draw the result to the canvas.
    gl.uniform1f(flipYLocation, -1); // need to y flip for canvas

    setFramebuffer(null, gl.canvas.width, gl.canvas.height);

    // Clear the canvas
    gl.clearColor(0, 0, 0, 0);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

    drawWithKernel("original");
  }

  function setFramebuffer(fbo, width, height) {
    // make this the framebuffer we are rendering to.
    gl.bindFramebuffer(gl.FRAMEBUFFER, fbo);

    // Tell the shader the resolution of the framebuffer.
    gl.uniform2f(resolutionLocation, width, height);

    // Tell WebGL how to convert from clip space to pixels
    gl.viewport(0, 0, width, height);
  }

  function drawWithKernel(name) {
    // set the kernel and it's weight
    gl.uniform1fv(kernelLocation, kernels[name].kernel);
    gl.uniform1f(
      kernelWeightLocation,
      computeKernelWeight(kernels[name].kernel)
    );
    gl.uniform1i(kernelTypeLocation, kernels[name].type);
    gl.uniform1i(kernelSizeLocation, Math.sqrt(kernels[name].kernel.length));

    // Draw the rectangle.
    var primitiveType = gl.TRIANGLES;
    var offset = 0;
    var count = 6;
    gl.drawArrays(primitiveType, offset, count);
  }
}

function setRectangle(gl, x, y, width, height) {
  const x1 = x;
  const x2 = x + width;
  const y1 = y;
  const y2 = y + height;
  gl.bufferData(
    gl.ARRAY_BUFFER,
    new Float32Array([x1, y1, x2, y1, x1, y2, x1, y2, x2, y1, x2, y2]),
    gl.STATIC_DRAW
  );
}

$(function () {
  main();
});
