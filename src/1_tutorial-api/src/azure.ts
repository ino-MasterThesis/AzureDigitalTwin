import { DigitalTwinsClient } from "@azure/digital-twins-core";
import * as fs from "fs";

type BasicDigitalTwin = {
  id: string;
  metadata: { modelId: string };
  contents: Array<any>;
};

class AzureError extends Error {
  constructor(name: string, message: string) {
    super(message);
    this.name = `Azure${name}Error`;
  }
}

export const uploadModel = async (
  client: DigitalTwinsClient,
  path: string
): Promise<void> => {
  console.log("Upload a model");
  const f_samplemodel = await fs.promises.readFile(path, "utf-8");
  try {
    await client.createModels([JSON.parse(f_samplemodel)]);
    console.log("Models uploaded to the instance");
  } catch (error) {
    throw new AzureError(
      "Upload",
      // @ts-ignore
      // eslint-disable-next-line
      `${error.code as string}: ${error.message as string}}`
    );
  }
};

export const listModel = async (
  client: DigitalTwinsClient
): Promise<unknown> => {
  const models = client.listModels();
  for await (const model of models) {
    console.log(`Model ID: ${model.id}`);
  }

  return models;
};

export const createSampleDigitalTwin = (client: DigitalTwinsClient) => {
  const prefix = "sampleTwin-";

  return new Promise((resolve) => {
    resolve(
      Array(3)
        .fill(null)
        .map((_, i) => {
          const twinData: BasicDigitalTwin = {
            id: `${prefix}${i}`,
            metadata: { modelId: "dtmi:example:SampleModel;1" },
            contents: [{ data: "Hello World" }],
          };
          async () => {
            try {
              await client.upsertDigitalTwin(
                twinData.id,
                JSON.stringify(twinData)
              );
              console.log(`Created twin: ${twinData.id}`);
            } catch (error) {
              console.error(error);
            }
          };

          return twinData.id;
        })
    );
  });
};
