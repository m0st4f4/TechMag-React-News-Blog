import { Route, Routes } from "react-router";

import { ProtectedRoute } from "@/components/ProtectedRoute/ProtectedRoute.tsx";
import { SidebarArticle } from "@/components/Sidebar/components/SidebarArticle/SidebarArticle.tsx";
import { SidebarProfile } from "@/components/Sidebar/components/SidebarProfile/SidebarProfile.tsx";
import { SidebarUser } from "@/components/Sidebar/components/SidebarUser/SidebarUser.tsx";

import { RootLayout } from "@/layouts/RootLayout/RootLayout.tsx";
import { SidebarLayout } from "@/layouts/SidebarLayout/SidebarLayout.tsx";

import { AboutPage } from "@/pages/AboutPage/AboutPage.tsx";
import { AdminPage } from "@/pages/AdminPage/AdminPage.tsx";
import { ArticlePage } from "@/pages/ArticlePage/ArticlePage.tsx";
import { CategoryPage } from "@/pages/CategoryPage/CategoryPage.tsx";
import { ContactPage } from "@/pages/ContactPage/ContactPage.tsx";
import { HomePage } from "@/pages/HomePage/HomePage.tsx";
import { LoginPage } from "@/pages/LoginPage/LoginPage.tsx";
import { NotFoundPage } from "@/pages/NotFoundPage/NotFoundPage.tsx";
import { RegisterPage } from "@/pages/RegisterPage/RegisterPage.tsx";
import { SearchPage } from "@/pages/SearchPage/SearchPage.tsx";
import { UnauthorizedPage } from "@/pages/UnauthorizedPage/UnauthorizedPage.tsx";
import { UserInfoPage } from "@/pages/UserInfoPage/UserInfoPage.tsx";
import { UserPage } from "@/pages/UserPage/UserPage.tsx";

function App() {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route index element={<HomePage />} />
        <Route path="aboutus" element={<AboutPage />} />
        <Route path="contactus" element={<ContactPage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="unauthorized" element={<UnauthorizedPage />} />
        <Route
          path="article"
          element={<SidebarLayout sidebar={<SidebarArticle />} />}
        >
          <Route path=":id" element={<ArticlePage />} />
        </Route>
        <Route
          path="category"
          element={<SidebarLayout sidebar={<SidebarArticle />} />}
        >
          <Route path=":id?" element={<CategoryPage />} />
        </Route>
        <Route
          path="search"
          element={<SidebarLayout sidebar={<SidebarArticle />} />}
        >
          <Route path=":query?" element={<SearchPage />} />
        </Route>

        <Route element={<ProtectedRoute />}>
          <Route
            path="profile"
            element={<SidebarLayout sidebar={<SidebarProfile />} />}
          >
            <Route index element={<UserInfoPage />} />
          </Route>
        </Route>

        <Route element={<ProtectedRoute allowedRoles={["admin"]} />}>
          <Route path="admin" element={<AdminPage />} />
        </Route>

        <Route
          path="user"
          element={<SidebarLayout sidebar={<SidebarUser />} />}
        >
          <Route path=":username" element={<UserPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;
