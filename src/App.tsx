import { Suspense, lazy } from "react";

import { Route, Routes } from "react-router";

import { ProtectedRoute } from "@/components/ProtectedRoute/ProtectedRoute.tsx";
import { SidebarArticle } from "@/components/Sidebar/components/SidebarArticle/SidebarArticle.tsx";
import { SidebarProfile } from "@/components/Sidebar/components/SidebarProfile/SidebarProfile.tsx";
import { SidebarUser } from "@/components/Sidebar/components/SidebarUser/SidebarUser.tsx";

import { RootLayout } from "@/layouts/RootLayout/RootLayout.tsx";
import { SidebarLayout } from "@/layouts/SidebarLayout/SidebarLayout.tsx";

const HomePage = lazy(() => import("@/pages/HomePage/HomePage.tsx"));
const AboutPage = lazy(() => import("@/pages/AboutPage/AboutPage.tsx"));
const AdminPage = lazy(() => import("@/pages/AdminPage/AdminPage.tsx"));
const ArticlePage = lazy(() => import("@/pages/ArticlePage/ArticlePage.tsx"));
const CategoryPage = lazy(
  () => import("@/pages/CategoryPage/CategoryPage.tsx")
);
const ContactPage = lazy(() => import("@/pages/ContactPage/ContactPage.tsx"));
const LoginPage = lazy(() => import("@/pages/LoginPage/LoginPage.tsx"));
const NotFoundPage = lazy(
  () => import("@/pages/NotFoundPage/NotFoundPage.tsx")
);
const RegisterPage = lazy(
  () => import("@/pages/RegisterPage/RegisterPage.tsx")
);
const SearchPage = lazy(() => import("@/pages/SearchPage/SearchPage.tsx"));
const UnauthorizedPage = lazy(
  () => import("@/pages/UnauthorizedPage/UnauthorizedPage.tsx")
);
const UserInfoPage = lazy(
  () => import("@/pages/UserInfoPage/UserInfoPage.tsx")
);
const UserPage = lazy(() => import("@/pages/UserPage/UserPage.tsx"));

function App() {
  return (
    <Suspense fallback={<div>page loading....</div>}>
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
    </Suspense>
  );
}

export default App;
