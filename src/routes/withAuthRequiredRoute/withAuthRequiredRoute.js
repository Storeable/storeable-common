import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { getDisplayName } from 'javascript-utils/lib/react';

const withAuthRequiredRoute = (WrappedComponent, createLoginUrl, isLoggedInSelector) => {
  const WithAuthRequiredRoute = ({ loggedIn, ...rest }) => (
    <Route
      {...rest}
      render={({ staticContext }) => {
        if (loggedIn) {
          return <WrappedComponent {...rest} />;
        }

        if (staticContext) {
          staticContext.status = 302; // eslint-disable-line
        }

        return <Redirect to={createLoginUrl()} />;
      }}
    />
  );

  WithAuthRequiredRoute.propTypes = {
    loggedIn: PropTypes.bool.isRequired
  };

  WithAuthRequiredRoute.displayName = `WithAuthRequiredRoute(${getDisplayName(WrappedComponent)})`;

  return connect(
    state => ({
      loggedIn: isLoggedInSelector(state)
    }),
    null
  )(WithAuthRequiredRoute);
};

export default withAuthRequiredRoute;
