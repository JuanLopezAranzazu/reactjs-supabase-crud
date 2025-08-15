import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";

const AppHeader = () => {
  return (
    <Navbar className="border-b border-gray-200 dark:border-gray-700">
      <NavbarBrand href="/">
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          My App
        </span>
      </NavbarBrand>

      <NavbarToggle />

      <NavbarCollapse>
        <NavbarLink href="/" active>
          Inicio
        </NavbarLink>
        <NavbarLink href="/create">Crear Producto</NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
};

export default AppHeader;
