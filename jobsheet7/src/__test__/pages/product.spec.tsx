import { render, screen } from '@testing-library/react';
import TampilanProduk from '@/pages/produk';

jest.mock("next/router", () => {
    useRouter() {
        return {
            route: "/product",
            pathname: "",
            query: {},
            asPath: "",
            push: jest.fn(),
            events: {
                on: jest.fn(),
                off: jest.fn()
            },
            isRead: true
        }
    }
})

describe("Product Page", () => {
    it("renders the product page correctly", () => {
        const page = render(<TampilanProduk />);
        // expect(screen.getByTestId("title").textContent).toBe("Daftar Produk");
        expect(page).toMatchSnapshot();
    })
})