import api, {apiCall} from "./client.ts";

export const signInFn = async function (request: { email: string; password: string; }) {
    const response = await api.post<apiCall<{ token: string; }>>("/students/signin/", {
        ...request
    });
    if (response.data.error) {
        throw Error(response.data.error.error_message);
    }
    return response.data.success
};
export interface SignUpRequest {
    organization_id: string;
    first_name: string;
    last_name: string;
    started_studies_date: string;
    email: string;
    password: string;
    verify_password: string;
    phone_number: string;
    degreeId: string;
};

export const signUpFn = async function (request: SignUpRequest ) {
    const response = await api.post<apiCall<{ token: string; }>>("/students/signup/", {
        ...request
    });
    if (response.data.error) {
        throw Error(response.data.error.error_message);
    }
    return response.data.success
};

export interface Profile {
    id: string,
    organization_id: string,
    email: string,
    first_name: string,
    last_name: string,
    started_studies_date: string,
    is_banned: boolean,
    degree: string,
    theme: string,
    language: string
}
export async function getProfile() {
    const request = await api.get<apiCall<Profile[]>>(`/students/me/`)
    if (request.data.error !== null) throw Error(request.data.error.error_message);
    console.log(request.data.success as Profile);
    return request.data.sucess as Profile;
} 