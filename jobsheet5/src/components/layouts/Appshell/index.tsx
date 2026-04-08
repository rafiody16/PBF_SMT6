import Navbar from "@/components/layouts/navbar";
import Footer from "@/components/layouts/footer";
import { useRouter } from "next/router";

const disableNavbar = ["/auth/login", "/auth/register", "/404"];

type AppShellProps = {
    children: React.ReactNode;
}

const AppShell = (props:AppShellProps) => {
    const { children } = props;
    const { pathname } = useRouter();
    return (
        <main>
            {!disableNavbar.includes(pathname) && <Navbar />}
            {children}
            {!disableNavbar.includes(pathname) && <Footer />}
        </main>
    );
};

export default AppShell;