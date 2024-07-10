import { FETCH_NEW_WALLET_URL, GET_KEYPART_URL } from "../constants";
import { storeUint8ArrayInLocalStorage } from "./base64Helpers";

export const login = async (email?: any) => {
  try {
    const response = await fetch(`${GET_KEYPART_URL}/${email}`);

    if (response.status == 404) {
      const response = await fetch(FETCH_NEW_WALLET_URL, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: email }),
      });

      const keyPart = await response.json();
      console.log(keyPart.KeyPart0.data);
      console.log(typeof keyPart.KeyPart0.data);
      storeUint8ArrayInLocalStorage(
        "KeyPart0",
        new Uint8Array(keyPart.KeyPart0.data)
      );
    }
  } catch (error) {
    console.log(error);
  }
};
