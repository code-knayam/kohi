import { useContext } from "react";
import EthContext from "../context/EthContext";

function useEthContext() {
	return useContext(EthContext);
}

export default useEthContext;
