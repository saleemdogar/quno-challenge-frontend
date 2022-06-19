import {ProfileType} from '../types/types';
const targetUrl = `http://localhost:4000/`;

export default class ProfileService {
    static getProfileData = (): Promise<ProfileType[]> => {
        return new Promise((resolve, reject) => {
            fetch(targetUrl)
                .then(response => {
                    response.json().then((data)=>{
                        resolve(data);
                    })
                })
                .catch(err => {
                    reject(err);
                });
        });
    };
}