import {ProfileType} from '../types/profiletypes';
const BASE_URL = "http://localhost:4000/";

export default class ProfileService {
    static getProfiles = (): Promise<ProfileType[]> => { 
        return new Promise((resolve, reject) => {
            fetch(BASE_URL)
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

    static getProfile = (slug:string): Promise<ProfileType[]|ProfileType> => { 
        return new Promise((resolve, reject) => {
            fetch(`${BASE_URL}${slug}`)
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