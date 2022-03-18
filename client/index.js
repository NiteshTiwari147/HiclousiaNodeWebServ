import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient, { createNetworkInterface} from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import { Router, Route, hashHistory, IndexRoute } from 'react-router'; 



import App from './components/App';
import requireAuth from './components/requireAuth';
import LogInForm from './components/authentication/LoginForm';
import signupForm from './components/authentication/signupForm';
import BasicInfoForm from './components/forms/basicInfo';
import AddEducation from './components/forms/education';
import AddProject from './components/forms/project';
import AddExperience from './components/forms/experience';
import Sample from './components/sample/sample';
import Dashboard from './components/dashboard';
import MarketAnalysis from './components/marketAnalysis';

import './styles.css';


const networkInterface = createNetworkInterface({
  uri: '/hiclousiaGQL',
  opts: {
    credentials: 'same-origin'
  }
})
const client = new ApolloClient({
  networkInterface,
  dataIdFromObject: o => o.id
});


const Root = () => {
  return (
    <ApolloProvider client={client}>
      <Router history={hashHistory}>
          <Route path="/" component={App} >
          <Route path="login" component={LogInForm} />
          <Route path="signup" component={signupForm} />
          <Route path="fillBasicInfo" component={requireAuth(BasicInfoForm)} />
          <Route path="fillEducation" component={requireAuth(AddEducation)} />
          <Route path="fillProject" component={requireAuth(AddProject)} />
          <Route path="addExperience" component={requireAuth(AddExperience)} />
          <Route path="sample" component={requireAuth(Sample)} />
          <Route path="dashboard" component={requireAuth(Dashboard)} />
          <Route path="marketAnalysis" component={requireAuth(MarketAnalysis)} />
          </Route>
      </Router>
    </ApolloProvider>
  );
};

ReactDOM.render(<Root />, document.querySelector('#root'));
