import * as readline from "readline";

const question = (question: string): Promise<string> => {
  const readlineInterface = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return new Promise((resolve) => {
    readlineInterface.question(question, (answer) => {
      resolve(answer);
      readlineInterface.close();
    });
  });
};

export const confirm = async (msg: string): Promise<boolean> => {
  const answer = await question(`${msg}(y/n): `);

  return answer.trim().toLowerCase() === "y";
};
