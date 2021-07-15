import { useState, useEffect } from "react";
import { createContext } from "react";
import getState from "./flux.js";
 
export const Context = createContext(null);

const injectContext = PassedComponent => {
	const StoreWrapper = props => {
		
		const [state, setState] = useState( getState({
				getStore: () => state.store,
				getActions: () => state.actions,
				setStore: updatedStore => setState({
						store: Object.assign(state.store, updatedStore),
						actions: { ...state.actions }
					})
			}));

		useEffect(() => {

			state.actions.getProyectos("/proyectos")
			state.actions.getActividades("/actividades")
			state.actions.getUsuarios("/usuarios")
            

		}, []);

		return (
			<Context.Provider value={state}>
				<PassedComponent {...props} />
			</Context.Provider>
		);
	};
	return StoreWrapper;
};

export default injectContext;