import Navbar from "@/components/layouts/navbar";
import Footer from "@/components/layouts/footer";
import { useRouter } from "next/router";
import { Roboto } from "next/font/google";

const disableNavbar = ["/auth/login", "/auth/register", "/404"];

type AppShellProps = {
    children: React.ReactNode;
}

const roboto = Roboto({
    subsets: ["latin"],
    weight: ["400", "500", "700"],
})

const AppShell = (props:AppShellProps) => {
    const { children } = props;
    const { pathname } = useRouter();
    return (
        <main className={roboto.className}>
            {!disableNavbar.includes(pathname) && <Navbar />}
            {children}
            {!disableNavbar.includes(pathname) && <Footer />}
        </main>
    );
};

export default AppShell;