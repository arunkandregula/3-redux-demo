/*
This one will NOT be used anymore. 

My current implementation of the filterLink component dispatches an action every time it's clicked, and reads its active state from the store, comparing its filter prop to the visibilityFilter in the store.

This comp is maintaining the URL state.

Ideally Router should be in conrol of the state that is in the URL.

*/

import {connect} from 'react-redux';
import Link from './Link';
import ActionCreator from '../../actions/ActionCreator'

// ownProps or containerProps
const mapStateToDataProps = (state, ownProps)=>({
	isActive: ownProps.filter === state.visibilityFilter
});

const mapDispatchToCallbackProps = (dispatch, ownProps)=>({
	onClick(event){
        event.preventDefault();
		dispatch(ActionCreator.getChangeVisibilityAction({
			filter: ownProps.filter
		}))
	}
});

export default connect(mapStateToDataProps, mapDispatchToCallbackProps )(Link);