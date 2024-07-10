import { RECOVER_KEY_PAIR_URL } from "../constants";
import { getUint8ArrayFromLocalStorage } from "./base64Helpers";

export async function getKeyParts(email: string) {
  const keyPart0 = getUint8ArrayFromLocalStorage("KeyPart0");
  const dataToSend = { email: email, keyPart: keyPart0 };
  const response = await fetch(RECOVER_KEY_PAIR_URL, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(dataToSend),
  });
  const data = await response.json();

  return data;
}
