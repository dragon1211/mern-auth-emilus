import React from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const fbConfigStr = `export default {
	apiKey: '<API_KEY>',
	authDomain: '<PROJECT_ID>.firebaseapp.com',
	databaseURL: 'https://<DATABASE_NAME>.firebaseio.com',
	projectId: '<PROJECT_ID>',
	storageBucket: '<BUCKET>.appspot.com',
	messagingSenderId: '<SENDER_ID>',
	appId: '<APP_ID>',
	measurementId: '<MEASUREMENT_ID>'
};
`

const fbSetupStr = `import firebase from 'firebase';
import firebaseConfig from 'configs/FirebaseConfig';

firebase.initializeApp(firebaseConfig);

// firebase utils
const db = firebase.firestore()
const auth = firebase.auth();
const currentUser = auth.currentUser
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();
const twitterAuthProvider = new firebase.auth.TwitterAuthProvider();
const githubAuthProvider = new firebase.auth.GithubAuthProvider();

export {
	db,
	auth,
	currentUser,
	googleAuthProvider,
	facebookAuthProvider,
	twitterAuthProvider,
	githubAuthProvider
};`

const firebase = () => {
	return (
		<div>
			<h2>Firebase</h2>
			<p>Emilus comes with Firebase integration and uses it as default authentication option in demo, you can use or remove it depend on your project fit.</p>
			<div className="mt-4">
				<h4>Config Firebase</h4>
				<p>Go to <code>FirebaseConfig.js</code> located at directory <code>configs/</code> and enter the config value that able to acquire from your firebase account.</p>
				<SyntaxHighlighter className="hl-code" language="javascript" style={atomDark}>
					{fbConfigStr}
				</SyntaxHighlighter>
			</div>
			<div className="mt-4">
				<h4>Setup</h4>
				<p>You can set your own authentication provider at <code>auth/FirebaseAuth.js</code>. The following code is the default for Firebase.</p>
				<SyntaxHighlighter className="hl-code" language="javascript" style={atomDark}>
					{fbSetupStr}
				</SyntaxHighlighter>
			</div>
		</div>
	)
}

export default firebase
