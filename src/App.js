import './App.css';
import Router from './components/Router';
import { useTranslation } from "react-i18next";

function App() {
    const { t, i18n } = useTranslation();
  return (
    <>
      <Router />
    </>
  );
}

export default App;
