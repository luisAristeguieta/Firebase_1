import "./App.css";
import { ProductoForm } from "./components/ProductoForm";
import { ProductList } from "./components/ProductList";


function App() {
  return (
    <main className="scrapbook-page">
      <header className="scrapbook-header">
        <span className="scrapbook-badge">Inventario · Firestore</span>
        <h1 className="scrapbook-title">Registros de Productos</h1>
      </header>

      <ProductoForm />
      <ProductList />
    </main>
  );
}

export default App;