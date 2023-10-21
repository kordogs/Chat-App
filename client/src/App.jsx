import LoginForm from "./Components/LoginForm";
import SignUp from "./Components/SignUp";
import Layout from "./Layout";
import { Route, Routes } from "react-router-dom";
import { UserContextProvider } from "./UserContext";

export default function App() {
  return (
    <>
      <UserContextProvider>
        <Routes>
          <Route index element={<LoginForm />} />
          <Route path="/Layout" element={<Layout />} />
          <Route path="/SignUp" element={<SignUp />} />
        </Routes>
      </UserContextProvider>
    </>
  );
}
