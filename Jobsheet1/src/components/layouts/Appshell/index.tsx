import Navbar from "@/components/layouts/navbar";
import Footer from "@/components/layouts/footer";

type AppShellProps = {
    children: React.ReactNode;
}

const AppShell = (props:AppShellProps) => {
    const { children } = props;
    return (
        <main>
            <Navbar />
            {children}
            <Footer />
        </main>
    );
};

export default AppShell;