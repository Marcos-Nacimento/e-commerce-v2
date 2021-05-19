import { createStore, combineReducers } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';

import userReducer from '../reducers/userReducer';
import cartReducer from '../reducers/cartReducer';
import registerReducer from '../reducers/registerReducer';
import AsyncStorage from '@react-native-async-storage/async-storage';


const rootPersistConfig = {
    key: 'persistedSuperMercado',
    storage: AsyncStorage,
    blacklist: ['cart', 'register'],
};

const persistedReducer = combineReducers({
    user: persistReducer(rootPersistConfig, userReducer),
    cart: cartReducer,
    register: registerReducer,
});

const store = createStore(persistedReducer);

const persistor = persistStore(store);

export { store, persistor };
