import { useEffect } from "react";
import { useChattingActions } from "../store";
import { generateRandomString } from "../utils/generateRandomString";

const FINGERPRINT = 'FINGERPRINT';

const useFingerprint = () => {
  const { setFingerprint } = useChattingActions();
  useEffect(() => {
    let fingerprint = localStorage.getItem(FINGERPRINT);
    if (!fingerprint) {
      fingerprint = generateRandomString(10);
      localStorage.setItem(FINGERPRINT, fingerprint);
    }
    setFingerprint(fingerprint);
  }, []);
};

export default useFingerprint;