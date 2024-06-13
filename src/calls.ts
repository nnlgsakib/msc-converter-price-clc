// calls.ts
import { initContrcat } from "./contract ";

const contract = initContrcat();

export class Cl {
  public async mindToUSDT(mind: any): Promise<any> {
    try {
      const result = await contract.calculateEthToUsdt(mind);
      return result;
    } catch (error) {
      console.error("Error in mindToUSDT:", error);
      return "Failed to fetch";
    }
  }
}
