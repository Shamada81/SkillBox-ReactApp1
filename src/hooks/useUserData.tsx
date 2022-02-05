import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { tokenContext } from '../shared/context/tokenContext';

interface IUserData {
	name?: string;
	iconImg?: string;
}

// export function useUserData( token: string) {
export function useUserData() {
	const [ data, setData ] = useState<IUserData>({});
	const token = useContext(tokenContext)

	useEffect(() => {
		axios.get(
		  'https://oauth.reddit.com/api/v1/me',
		  {
			headers: {
			  'Authorization': `bearer ${token}`,
		  }
		  }
		)
		  .then((res) => {
			const userData = res.data;
			const img = userData.icon_img.split('?');
			setData({
			  name: userData.name,
			  iconImg: img[0],
			})
		  })
		  .catch(console.log)
	}, [token])

	return [data];
}