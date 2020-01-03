import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import Header from './components/header/header.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.actions';
import { connect } from 'react-redux';

class App extends React.Component {
	unsubscribeFromAuth = null;

	// componentDidMount() {
	// 	const { setCurrentUser } = this.props;
	// 	this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
	// 		if (userAuth) {
	// 			const userRef = await createUserProfileDocument(userAuth);

	// 			userRef.onSnapshot(snapShot => {
	// 				setCurrentUser({
	// 					id: snapShot.id,
	// 					...snapShot.data(),
	// 				});
	// 			});
	// 		}
	// 		setCurrentUser(userAuth);
	// 	});
	// }

	componentDidMount() {
		const { setCurrentUser } = this.props;

		this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
			if (userAuth) {
				const userRef = await createUserProfileDocument(userAuth);

				userRef.onSnapshot(snapShot => {
					setCurrentUser({
						id: snapShot.id,
						...snapShot.data(),
					});
				});
			}

			setCurrentUser(userAuth);
		});
	}

	componentWillUnmount() {
		this.unsubscribeFromAuth();
	}

	render() {
		return (
			<div>
				<Header />
				<Switch>
					<Route path="/" exact component={HomePage} />
					<Route path="/shop/hats" exact component={HatsPage} />
					<Route path="/shop/jackets" exact component={JacketsPage} />
					<Route path="/shop/sneakers" exact component={SneakersPage} />
					<Route path="/shop/womens" exact component={WomensPage} />
					<Route path="/shop/mens" exact component={MensPage} />
					<Route path="/shop" exact component={ShopPage} />
					<Route path="/contact" exact component={ContactPage} />
					<Route path="/signin" exact render={() => this.props.user ? (<Redirect path="/" />) : (<SignInAndSignUpPage />)} />
				</Switch>
			</div>
		);
	}
}

const HatsPage = () => (
	<div>
		<center>
			<h1>HATS PAGE</h1>
		</center>
	</div>
);
const JacketsPage = () => (
	<div>
		<center>
			<h1>JACKETS PAGE</h1>
		</center>
	</div>
);
const SneakersPage = () => (
	<div>
		<center>
			<h1>SNEAKERS PAGE</h1>
		</center>
	</div>
);
const MensPage = () => (
	<div>
		<center>
			<h1>MENS PAGE</h1>
		</center>
	</div>
);
const WomensPage = () => (
	<div>
		<center>
			<h1>WOMENS PAGE</h1>
		</center>
	</div>
);
const ContactPage = () => (
	<div>
		<center>
			<h1>CONTACTS PAGE</h1>
		</center>
	</div>
);
const mapStateToProps = ({ user }) => ({
	currentUser: user.currentUser
})
const mapDispatchToProps = dipatch => ({
	setCurrentUser: user => dipatch(setCurrentUser(user)),
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
