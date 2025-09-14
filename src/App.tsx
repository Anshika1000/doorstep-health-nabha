import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { I18nProvider } from "@/components/providers/I18nProvider";
import { MainLayout } from "@/components/layout/MainLayout";
import { PatientHome } from "./pages/PatientHome";
import { ConsultPage } from "./pages/ConsultPage";
import { VitalsPage } from "./pages/VitalsPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <I18nProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainLayout><PatientHome /></MainLayout>} />
            <Route path="/consult" element={<MainLayout><ConsultPage /></MainLayout>} />
            <Route path="/vitals" element={<MainLayout><VitalsPage /></MainLayout>} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </I18nProvider>
    </QueryClientProvider>
  );
}

export default App;
