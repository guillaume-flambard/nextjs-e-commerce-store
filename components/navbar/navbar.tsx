import getCategories from "@/actions/get-categories";
import Link from "next/link";
import Container from "../ui/container";
import MainNav from "./main-nav";
import NavbarActions from "./navbar-actions";

const Navbar = async () => {
  const categories = await getCategories();
  return (
    <div className="border-b">
      <Container>
        <div className="flex items-center justify-between py-4 px-4 lg:px-8">
          <div className="relative h-16 flex items-center">
            <Link href="/" className="ml-4 flex lg:ml-0 gap-x-2">
              <p className="font-bold text-xl">STORE</p>
            </Link>
            <MainNav data={categories} />
          </div>
          <NavbarActions />
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
