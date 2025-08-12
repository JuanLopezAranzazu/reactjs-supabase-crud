import {
  Footer,
  FooterCopyright,
  FooterLink,
  FooterLinkGroup,
} from "flowbite-react";

const AppFooter = () => {
  return (
    <Footer container className="rounded-none">
      <div className="w-full text-center">
        <FooterCopyright
          href="/"
          by="My App™"
          year={new Date().getFullYear()}
        />
        <FooterLinkGroup className="mt-3 justify-center">
          <FooterLink href="/">Inicio</FooterLink>
          <FooterLink href="/create">Crear Producto</FooterLink>
        </FooterLinkGroup>
      </div>
    </Footer>
  );
};

export default AppFooter;
