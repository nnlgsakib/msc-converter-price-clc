// print.ts
import { Cl } from "./calls";

async function printResult() {
  const calls = new Cl();
  const mindValue = 42; // Example input value

  try {
    const result = await calls.mindToUSDT(mindValue);
    console.log("Function result:", result.toString());
  } catch (error) {
    console.error("Error:", error);
  }
}

printResult().catch((error) => console.error("Unhandled error:", error));
