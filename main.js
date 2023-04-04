//1. named export:
/* import { soma, sub } from "./lib/math";
   console.log(soma(10,23));
   console.log(sub(10,23));*/

//2. export default:
/* import mult from "./lib/mult";
   console.log(mult(10,23)); */

//3. export all and put inside a var:
/* import * as math from "./lib/math"
   console.log(math.soma(1,2)); */

//4. rename library while import:
/* import {soma as sum }from "./lib/math"
   console.log(sum(1,2));*/
