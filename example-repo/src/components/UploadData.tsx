import Arweave from "arweave";
import { recoverKey } from "ar-mpc-sdk";

const arweave = Arweave.init({
  host: "arweave.net",
  port: 443,
  protocol: "https",
});

const UploadData = () => {
  const uploadDataToArweave = async () => {
    const wallet = await recoverKey("manav18gadhiya@gmail.com");
    const tx = await arweave.createTransaction(
      {
        data: "Hello world!",
      },
      wallet
    );

    await arweave.transactions.sign(tx, wallet);

    arweave.transactions.post(tx).then(console.log).catch(console.log);
    console.log(`https://arweave.net/${tx.id}`);
  };
  return (
    <div>
      <button onClick={() => uploadDataToArweave()}>
        Upload Data to Arweave
      </button>
    </div>
  );
};

export default UploadData;
