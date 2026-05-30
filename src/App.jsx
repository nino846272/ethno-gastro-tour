import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import { LanguageProvider } from "./context/LanguageContext";
import { Analytics } from "@vercel/analytics/react"


export default function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="*" element={<HomePage/>} />
        </Routes>
      </BrowserRouter>
      <Analytics />
    </LanguageProvider>
  );
}

