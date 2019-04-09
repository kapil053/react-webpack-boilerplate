import { connect } from 'react-redux';
import Header from './Header';
import { updateName } from '../action'

function mapStateToProps(state) {
	return {
		anshul: state.test.name,
	};
}

function mapDispatchToProps(dispatch) {
	return {
		handleName: (value) => dispatch(updateName(value))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);