import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import "./style.css";

import Homepage from "./Components/Homepage";
import VendorPage from "./Components/VendorPage";
import UserPage from "./Components/UserPage";
import Adminpage from "./Components/Admin/Adminpage";
import Admin from "./Components/Admin/Admin";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import MerchantsPage from "./Components/MerchantsPage";
import CreateMerchant from "./Components/Admin/Merchant/CreateMerchant";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/admin" component={Admin} />
        <Route
          path="/"
          render={(props) => (
            <>
              { <Header {...props} /> }
              <Switch>
                <Route
                  exact
                  path="/merchants/:id"
                  component={MerchantsPage}
                  {...props}
                />
                <Route
                  exact
                  path="/vendor/:id"
                  component={VendorPage}
                  {...props}
                />
                <Route path="/user" component={UserPage} {...props} />
                <Route exact path="/" component={Homepage} {...props} />
                <Route
                  exact
                  path="/backend/merchant/new"
                  component={CreateMerchant}
                  {...props}
                />
              </Switch>
              { <Footer /> }
            </>
          )}
        />
      </Switch>
    </>
  );
}

export default App;
