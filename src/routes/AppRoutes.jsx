import { Routes, Route } from "react-router-dom";

import Dashboard from "../pages/Dashboard";
import Beneficiaries from "../pages/Beneficiaries";
import Communities from "../pages/Communities";
import Parks from "../pages/Parks";
import Documents from "../pages/Documents";
import Assets from "../pages/Assets";
import Administration from "../pages/Administration";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/beneficiaries" element={<Beneficiaries />} />
      <Route path="/communities" element={<Communities />} />
      <Route path="/parks" element={<Parks />} />
      <Route path="/documents" element={<Documents />} />
      <Route path="/assets" element={<Assets />} />
      <Route path="/admin" element={<Administration />} />
    </Routes>
  );
}