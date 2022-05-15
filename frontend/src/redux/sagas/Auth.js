import { all, takeEvery, put, fork, call } from 'redux-saga/effects';
import {
	AUTH_TOKEN,
	SIGNIN,
	SIGNOUT,
	SIGNUP,
	SIGNIN_WITH_GOOGLE,
	SIGNIN_WITH_FACEBOOK
} from '../constants/Auth';
import {
	showAuthMessage,
	authenticated,
	signOutSuccess,
	signUpSuccess,
	signInWithGoogleAuthenticated,
	signInWithFacebookAuthenticated
} from "../actions/Auth";

import FirebaseService from 'services/FirebaseService'
import JwtAuthService from 'services/JwtAuthService';
import UserService from 'services/UserService';

// export function* signInWithFBEmail() {
//   yield takeEvery(SIGNIN, function* ({payload}) {
// 		const {email, password} = payload;
// 		try {
// 			const user = yield call(FirebaseService.signInEmailRequest, email, password);
// 			if (user.message) {
// 				yield put(showAuthMessage(user.message));
// 			} else {
// 				localStorage.setItem(AUTH_TOKEN, user.user.uid);
// 				yield put(authenticated(user.user.uid));
// 			}
// 		} catch (err) {
// 			yield put(showAuthMessage(err));
// 		}
// 	});
// }

export function* signInWithFBEmail() {
	yield takeEvery(SIGNIN, function* ({payload}) {
			const {email, password} = payload;
			try{
				const response = yield call( JwtAuthService.login, email, password ); 
				if (response.data.status_code === 200) {
					delete response.data.status_code;
					let token = response.data;
					UserService.setCurrentUser(token);
					yield put(authenticated(token.accessToken));
				} else {
					yield put(showAuthMessage(response.data.message));
				}
			}  catch (err) {
				yield put(showAuthMessage(err.toString()));
			}
	    });
}

export function* signOut() {
  yield takeEvery(SIGNOUT, function* () {
		try {
			const signOutUser = yield call(FirebaseService.signOutRequest);
			if (signOutUser === undefined) {
				localStorage.removeItem(AUTH_TOKEN);
				yield put(signOutSuccess(signOutUser));
			} else {
				yield put(showAuthMessage(signOutUser.message));
			}
		} catch (err) {
			yield put(showAuthMessage(err));
		}
	});
}

// export function* signUpWithFBEmail() {
//   yield takeEvery(SIGNUP, function* ({payload}) {
// 		const {email, password} = payload;
// 		try {
// 			const user = yield call(FirebaseService.signUpEmailRequest, email, password);
// 			if (user.message) {
// 				yield put(showAuthMessage(user.message));
// 			} else {
// 				localStorage.setItem(AUTH_TOKEN, user.user.uid);
// 				yield put(signUpSuccess(user.user.uid));
// 			}
// 		} catch (error) {
// 			yield put(showAuthMessage(error));
// 		}
// 	}
// 	);
// }

export function* signUpWithFBEmail() {
	yield takeEvery(SIGNUP, function* ({payload}) {
			const {email, password} = payload;
			try {
				const response = yield call(JwtAuthService.signUp, email, password);
				console.log(response);
				if (response.data.status_code === 200) {
						delete response.data.status_code;
						let token = response.data;
						UserService.setCurrentUser(token);
						yield put(signUpSuccess(token));
				} else {
					yield put(showAuthMessage(response.data.message));
				}
			} catch (error) {
				yield put(showAuthMessage(error));
			}
	    }
      );
}

export function* signInWithFBGoogle() {
  yield takeEvery(SIGNIN_WITH_GOOGLE, function* () {
		try {
			const user = yield call(FirebaseService.signInGoogleRequest);
			if (user.message) {
				yield put(showAuthMessage(user.message));
			} else {
				localStorage.setItem(AUTH_TOKEN, user.user.uid);
				yield put(signInWithGoogleAuthenticated(user.user.uid));
			}
		} catch (error) {
			yield put(showAuthMessage(error));
		}
	});
}

export function* signInWithFacebook() {
  yield takeEvery(SIGNIN_WITH_FACEBOOK, function* () {
		try {
			const user = yield call(FirebaseService.signInFacebookRequest);
			if (user.message) {
				yield put(showAuthMessage(user.message));
			} else {
				localStorage.setItem(AUTH_TOKEN, user.user.uid);
				yield put(signInWithFacebookAuthenticated(user.user.uid));
			}
		} catch (error) {
			yield put(showAuthMessage(error));
		}
	});
}

export default function* rootSaga() {
  yield all([
		fork(signInWithFBEmail),
		fork(signOut),
		fork(signUpWithFBEmail),
		fork(signInWithFBGoogle),
		fork(signInWithFacebook)
  ]);
}
