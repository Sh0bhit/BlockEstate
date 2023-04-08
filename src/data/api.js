import { Web3Storage, File } from "web3.storage";

function makeStorageClient() {
  return new Web3Storage({ token: process.env.REACT_APP_ACCESS_TOKEN });
}

export async function storeImages(img, name) {
  const client = makeStorageClient();

  const files = [new File([img], name)];

  const cid = await client.put(files);

  return cid;
}

export async function storeFiles(data, name) {
  const client = makeStorageClient();

  const blob = new Blob([JSON.stringify(data)], { type: "application/json" });

  const files = [new File([blob], `${name}.json`)];

  const cid = await client.put(files);

  return cid;
}
