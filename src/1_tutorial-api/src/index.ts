import { DefaultAzureCredential } from "@azure/identity";
import { DigitalTwinsClient } from "@azure/digital-twins-core";
import { confirm } from "./lib";
import { listModel, uploadModel, createSampleDigitalTwin } from "./azure";

const url = "https://ADT-my-instance.api.wcus.digitaltwins.azure.net";
const credential = new DefaultAzureCredential();

const main = async (_args?: [string]) => {
  const client = new DigitalTwinsClient(url, credential);

  console.log("Service client created – ready to go");

  await listModel(client);
  const newModelPath = "./src/SampleModel.json";
  if (await confirm(`> Upload ${newModelPath}?`)) {
    await uploadModel(client, newModelPath);
  } else {
    console.log("None was uploaded.");
  }

  await createSampleDigitalTwin(client);
};

main().then(
  (_) => {
    console.log("✅ successfully processed.");
  },
  (err) => {
    console.error(err);
  }
);
