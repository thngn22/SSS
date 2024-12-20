import { combine, split } from "shamir-secret-sharing";

import { Divice, Merger } from "./hashKey.type";

class HashKeyService {
    get = () => {
        return { hello: "world" };
    };

    device = async ({ privateKey }: Divice) => {
        const toUint8Array = (data: string) => new TextEncoder().encode(data);
        const input = toUint8Array(privateKey);

        const [_share1, _share2, _share3] = await split(input, 3, 2);
        return {
            share1: _share1,
            share2: _share2,
            share3: _share3,
        };
    };

    merge = async ({ share_1, share_2 }: Merger) => {
        const share1Array = new Uint8Array(Object.values(share_1) as number[]);
        const share2Array = new Uint8Array(Object.values(share_2) as number[]);

        const reconstructedArray = await combine([share1Array, share2Array]);

        const reconstructedString = new TextDecoder().decode(
            reconstructedArray,
        );

        return {
            reconstructedArray: reconstructedArray,
            reconstructedString: reconstructedString,
        };
    };
}

const hashKeyService = new HashKeyService();
export default hashKeyService;
