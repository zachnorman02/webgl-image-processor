
## WebGL Interactive Kernels

### YouTube/Dropbox/Drive Link: <https://youtu.be/FJg0Nx1mzFE>

### Screenshots
<img width="1792" alt="image" src="https://user-images.githubusercontent.com/15839864/208318571-66088576-8332-4260-8eaf-3dc3622398de.png">
<img width="1792" alt="image" src="https://user-images.githubusercontent.com/15839864/208318684-a9e603d9-b41d-40fa-8d72-5dd49648ecaa.png">
<img width="1792" alt="image" src="https://user-images.githubusercontent.com/15839864/208318726-35a3ede9-730a-44fd-8ac9-80d64675a86a.png">

Based off of:

* <https://webgl2fundamentals.org/webgl/lessons/webgl-image-processing-continued.html>
* <https://timseverien.com/posts/2020-06-19-colour-correction-with-webgl/>

### Overview

This is the final project I did for my Computer Graphics course at Northeastern University, which I took in Fall 2022. I was interested in exploring WebGL and diving deeper into image processing. I created this as an interactive image post-processor where various filters could be applied. I wanted some to be included with the program, but there is also the option for the user to input their own.

**Kernel:** This is a matrix that can be up to a 5x5, though the inner 3x3 or 1x1 can be used. The very center represents the current pixel you are calculating the color for, and the other matrix values represent the surrounding pixel values. The surrounding pixel colors are multiplied by their corresponding kernel value, and then all the values are added together to get the resulting new color.

**Filter:** A 4x4 matrix, where each pixel's color and alpha values are multiplied by the matrix. Filter also includes an option for an optional offset, which is a vector added to the final color value at the end. This does not use the surrounding pixels' colors, it just uses the current color of the current pixel.

**Color:** Similar to Filter, except it is a 3x3 matrix, and there is no offset option.

To use, upload an image, then play around with the pre-existing filters, or use your own. Filters can also be rearranged to change the order the effects are applied in. Images can also be saved by right-clicking on the image and clicking "Save image".
