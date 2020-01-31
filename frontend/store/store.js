import { createStore } from 'react-redux';


const configureStore = (preloadedState = {}) => {
    const store = createStore()
}

// const configureStore = (preloadedState = {}) => {
//     debugger
//     const store = createStore(rootReducer, preloadedState);
//     store.subscribe(() => {
//         localStorage.state = JSON.stringify(store.getState());
//     });
//     return store;
// }

// export default configureStore;