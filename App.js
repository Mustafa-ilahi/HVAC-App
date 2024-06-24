import MainNavigator from './src/services/config/navigation';
import {Provider} from 'react-redux';
import {persistor, store} from './src/store';
import {PersistGate} from 'redux-persist/integration/react';
import CustomerFeedback from './src/screens/CustomerFeedback';
import ProviderHome from './src/screens/ProviderHome';

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <MainNavigator />
      </PersistGate>
    </Provider>
  );
}
