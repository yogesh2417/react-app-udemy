import React from 'react';
import Layout from '../src/hoc/Layout/Layout';
import BurgerBuilder from '../src/containers/BurgerBuilder/BurgerBuilder';
import Checkout from '../src/containers/Checkout/Checkout';
import {Route,Switch} from 'react-router-dom';

function App() {
  return (
    <div >
      <Layout>
        {/* <BurgerBuilder/>
        <Checkout/> */}
        <Switch>
        <Route path="/checkout" component={Checkout} />
        <Route path="/" component={BurgerBuilder} />
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
