import axios from 'axios';
import { useEffect, useState } from 'react';

interface IUserData {
	name?: string;
	iconImg?: string;
}

export function useUserData( token: string) {
	const [ data, setData ] = useState<IUserData>({});

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