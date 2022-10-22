export const candyMachineAddress = "0x9e094537dda4f5ecc7b70deb4d573907d5610b4e2600ee077a04e06cb27cb25f";
export const collectionName = "CRAPtos!"; // Case sensitive!
export const collectionCoverUrl = "https://cloudflare-ipfs.com/ipfs/QmYVMMY3BPahQz4sXWLXck4RiUnbT9amn8AcVPxGUBA7MB";
export const mode = "mainnet"; // "dev" or "test" or "mainnet"

export let NODE_URL;
let FAUCET_URL;
if (mode == "dev") {
    NODE_URL = "https://fullnode.devnet.aptoslabs.com/v1";
    FAUCET_URL = "https://faucet.devnet.aptoslabs.com";
} else if (mode === "test") {
    NODE_URL = "https://fullnode.testnet.aptoslabs.com/v1";
    FAUCET_URL = "https://faucet.testnet.aptoslabs.com";
} else {
    NODE_URL = "https://fullnode.mainnet.aptoslabs.com/v1";
    FAUCET_URL = null;
}