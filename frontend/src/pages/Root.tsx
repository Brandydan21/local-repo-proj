// nav bar and footer
import { Outlet } from "react-router-dom";

export default function Root() {
  return (
    <>
      <header>
        <p>Navbar placeholder</p>
      </header>

      <main>
        <Outlet />
      </main>

      <footer>
        <p>Footer placeholder</p>
      </footer>
    </>
  );
}
