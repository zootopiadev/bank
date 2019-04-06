/**
 *
 * Asynchronously loads the component for PaymentPage
 *
 */

import React from 'react';
import loadable from 'loadable-components';
import LoadingLinear from 'components/App/LoadingLinear';

const LoadingComponent = () => <LoadingLinear />;

export default loadable(() => import('./index'), {
  LoadingComponent,
});
