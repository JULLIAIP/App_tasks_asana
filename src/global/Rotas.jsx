import { Route, Routes } from "react-router-dom";
import BoardTaskPage from "../pages/BoardTaksPage";
import DetailsPage from "../pages/DetailsPage";
import LoginPage from "../pages/LoginPage";

export default function Routing() {
    return (
        <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/board" element={<BoardTaskPage />} />
            <Route path="/details/:id" element={<DetailsPage />} />
        </Routes>
    )
}