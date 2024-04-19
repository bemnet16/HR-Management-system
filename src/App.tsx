import "./global.css";

import AuthRoute from "./routes/auth-route";
import PagesRoute from "./routes/pages-route";

const App = () => {
  return (
    <main className="h-full">
      <AuthRoute />

      <PagesRoute />
    </main>
  );
};

export default App;
