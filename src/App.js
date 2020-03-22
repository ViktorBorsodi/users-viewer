import React, {useState, useEffect} from 'react';
import './App.css';
import Loader from './Loader'
import Users from './Users'
import $ from 'jquery'

const App = () => {
	const [users, setUsers] = useState('')
	const [noMoreUsers, setNoMoreUsers] = useState(false)
	useEffect(() => {
		fetch('https://reqres.in/api/users?page=1')
			.then(res => res.json())
			.then(data => {
				setTimeout(() => setUsers(data.data), 3000)
			})

		$(window).scroll(function() {
			if( $(window).scrollTop() >= $(document).height() - $(window).height() - 1 ) {
				fetch('https://reqres.in/api/users?page=2')
					.then(res => res.json())
					.then(data => {
						setUsers(prevUsers => ([...prevUsers, ...data.data]))
					})
				$(window).off('scroll')
				setNoMoreUsers(true)
			}
		});
	}, [])

	return (
		<div className="App">
			<h1>Users</h1>	
			{ users ? <Users users={users} /> : <Loader /> }
			{ noMoreUsers && <p>No more users</p> }
		</div>
	);
}

export default App;
