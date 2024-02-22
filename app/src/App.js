import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { HomePage } from "./pages/HomePage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { LoginPage } from "./pages/LoginPage";
import { SignUpPage } from "./pages/SignUpPage";
import { BlogAuthorPage } from "./pages/BlogAuthorPage";
import { BlogReaderPage } from "./pages/BlogReaderPage";
import store from "./services/store";
import { persistor } from "./services/store";

export const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/blog/new" element={<BlogAuthorPage />} />
            <Route path="/blog/:id" element={<BlogReaderPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Router>
      </PersistGate>
    </Provider>
  );
}