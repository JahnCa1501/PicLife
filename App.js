import React, { useEffect, useState, useContext } from "react";
import Navigation from "./src/components/navigation/Index";
import { Provider as AuthProvider } from "./src/providers/AuthContext"

export default function App() {
  return (
    <AuthProvider>
       <Navigation />
    </AuthProvider>
  );
};