import { getToken } from "next-auth/jwt";
import { NextRequest, NextFetchEvent, NextMiddleware, NextResponse } from "next/server";
import withAuth from "./Middleware/withAuth";

// export function middleware(request: NextRequest) {

//     const isLogin = false;

//     if (!isLogin) {
//         return NextResponse.redirect(new URL("/", request.url));
//     }

//     return NextResponse.next();
// }

// export const config = {
//     matcher: ["/produk", "/profile"]
// };

export function mainMiddleware(request: NextRequest) {
    return NextResponse.next();
}
export default withAuth(mainMiddleware, ["/produk", "/profile"]);

export const config = {
    matcher: ["/produk", "/profile"]
};

