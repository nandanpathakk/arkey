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

  const buttonStyle = {
    padding: '10px 20px',
    fontSize: '16px',
    color: '#ffffff',
    backgroundColor: '#000000',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center'}}>
      <button 
      onClick={() => uploadDataToArweave()}
      style={buttonStyle}>
        Upload Data to Arweave
      </button>
    </div>
  );
};

export default UploadData;
