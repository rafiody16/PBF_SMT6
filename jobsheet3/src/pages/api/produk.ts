import type { NextApiRequest, NextApiResponse } from 'next';
import { retrieveProducts } from '../utils/db/servicefirebase';

type Data = {
    status: boolean;
    status_code: number;
    data: any;

    // data: {
    //     id: string;
    //     nama: string;
    //     harga: number;
    //     ukuran: string;
    //     warna: string;
    // }[];
};

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>,
) {
    const data = await retrieveProducts("products");
    console.log("Data dari Firestore:", data);
    res.status(200).json({ status: true, status_code: 200, data: data });
}

// export default function handler(
//     req: NextApiRequest,
//     res: NextApiResponse<Data>
// ) {
//     const data = 
//     [
//         {
//             id: '1',
//             nama: 'Kaos Polos',
//             harga: 50000,
//             ukuran: 'M',
//             warna: 'Hitam'
//         },
//         {
//             id: '2',
//             nama: 'Kaos Berlengan Panjang',
//             harga: 15000,
//             ukuran: 'L',
//             warna: 'Putih'
//         }
//     ];
//     res.status(200).json({ status: true, status_code: 200, data: data });
// };