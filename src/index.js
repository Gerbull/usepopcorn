import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import StarRating from './StarRating';

// function Test() {
// 	const [movieRating, setMovieRating] = useState(0);

// 	return (
// 		<div>
// 			<StarRating
// 				color="pink"
// 				maxRating={19}
// 				size={36}
// 				onSetRating={setMovieRating}
// 			/>
// 			<p>This movie was rated {movieRating} stars</p>
// 		</div>
// 	);
// }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<App />
		{/* <StarRating maxRating={15} defaultRating={7} />
		<StarRating maxRating={10} color={'blue'} size={24} className="test" />
		<StarRating
			maxRating={5}
			messages={['Terrible', 'Bad', 'Okay', 'Good', 'Amazing']}
		/>
		<Test /> */}
	</React.StrictMode>
);
