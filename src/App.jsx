// import { useState } from "react";
import Header from "./Header";
import Carousels from "./components/Carousels";
import About from "./components/About";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
<script
  src="https://cdn.jsdelivr.net/npm/react-dom/umd/react-dom.production.min.js"
  crossorigin>
</script>

function App () {
    return (
        <main>
            <div>
                <Header />
            </div>
            
            <Carousels></Carousels>
            <About></About>
        </main>
    );
}

export default App