import React from 'react';
import { Route } from 'react-router-dom';
import { getAllUrlParams } from 'javascript-utils/lib/url';
import { getDisplayName } from 'javascript-utils/lib/react';

const withRequiredUrlParamsRoute = (WrappedComponent, ErrorComponent, requiredUrlParams) => {
  const WithRequiredUrlParamsRoute = ({ ...props }) => (
    <Route
      {...props}
      render={({ location, staticContext }) => {
        let hasError = false;
        if (Array.isArray(requiredUrlParams) && requiredUrlParams.length > 0 && location.search) {
          const query = getAllUrlParams(location.search);
          requiredUrlParams.forEach((requiredUrlParam) => {
            if (!Object.prototype.hasOwnProperty.call(query, requiredUrlParam)) {
              hasError = true;
            }
          });
        } else {
          hasError = true;
        }

        if (hasError) {
          if (staticContext) {
            staticContext.status = 400; // eslint-disable-line
          }

          return <ErrorComponent {...props} status={400} />;
        }

        return <WrappedComponent {...props} />;
      }}
    />
  );

  WithRequiredUrlParamsRoute.displayName = `WithRequiredUrlParamsRoute(${getDisplayName(WrappedComponent)})`;

  return WithRequiredUrlParamsRoute;
};

export default withRequiredUrlParamsRoute;
