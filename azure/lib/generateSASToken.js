const {
    BlobServiceClient,
    StorageSharedKeyCredential,
    BlobSASPermissions,
    generateBlobSASQueryParameters,
  }   = require("@azure/storage-blob");

const AccountName = process.env.AccountName;
const AccountKey = process.env.AccountKey;

const containerName = "images";

const sharedKeyCredential = new StorageSharedKeyCredential(
    AccountName,
    AccountKey
);

const blobServiceClient = new BlobServiceClient(
    `https://${AccountName}.blob.core.windows.net`,
    sharedKeyCredential
);

async function generateSASToken() {
    const containerClient = blobServiceClient.getContainerClient(containerName);
    const permissions = new BlobSASPermissions();
    permissions.write = true;
    permissions.create = true;
    permissions.read = true;

    const expiryDate = new Date();
    expiryDate.setMinutes(expiryDate.getMinutes() + 30);

    const sasToken = generateBlobSASQueryParameters(
        {
            containerName: containerClient.containerName,
            permissions: permissions.toString(),
            expiresOn: expiryDate,  
        },
        sharedKeyCredential
    ).toString();

    return sasToken;
}

module.exports = generateSASToken;