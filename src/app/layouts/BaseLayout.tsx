
// import Header from "@/widgets/header/ui/Header/Header";
// import { useTheme } from "@/app/providers/ThemeProvider";

import { Footer } from "@/widgets/footer";
import { Header } from "@/widgets/header";
import { Helmet } from "react-helmet-async";
import { Outlet } from "react-router-dom";

function BaseLayout() {
  return (
    <div>
      <Helmet>
        <title>Головна сторінка</title>
        <meta name="description" content="Головна сторінка сайту Можливості для кожного." />
      </Helmet>
      <Header />

      
        <Outlet />
      
      
      <Footer />
    </div>
  );
}

export default BaseLayout;
