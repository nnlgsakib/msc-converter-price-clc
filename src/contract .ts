import { ethers } from "ethers";

import { abi,provider,contract as addr } from "./const";

 export function initContrcat(){
    const contaddr = new ethers.Contract(addr, abi,provider);
     return contaddr;
}

