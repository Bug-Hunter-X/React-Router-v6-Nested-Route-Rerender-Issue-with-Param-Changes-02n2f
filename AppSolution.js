```javascript
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/:id" element={<ParentRoute />}>
          <Route index element={<Home />} />
        </Route>
        <Route path="/about" element={<About />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

function ParentRoute() {
  let params = useParams();
  return (
    <div>
      <p>Parent Route with ID: {params.id}</p>
      <Routes>
        <Route index element={<Home id={params.id} />} />
      </Routes>
    </div>
  );
}

function Home({id}) {
  return (
    <div>
      <h1>Home - ID: {id}</h1>
    </div>
  );
}

function About() {
  return <h1>About</h1>;
}

function NotFound() {
  return <h1>404 Not Found</h1>;
}

export default App;
```