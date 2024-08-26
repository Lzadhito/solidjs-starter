import { Suspense, lazy } from "solid-js";
import { Route, Router } from "@solidjs/router";

import Providers from "./providers";

const Homepage = lazy(() => import("./routes/index"));

export default function Routes() {
  return (
    <Suspense>
      <Router root={Providers}>
        <Route path={"/"} component={Homepage} />
      </Router>
    </Suspense>
  );
}
