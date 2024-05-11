import api, {apiCall} from "./client.ts";

export interface OrganizationReadModel{
    id: string,
    owner_id: string,
    name: string,
    logo: string,
    description: string,
    contact_info: string,
    primary_color: string,
    secondary_color: string
}

export async function getOrganizationById(id: string){
    const request = await api.get<apiCall<OrganizationReadModel>>(`/organizations/${id}`)
    if(request.data.error !== null){
        throw Error(request.data.error.error_message)
    }
    return request.data.success
}
export interface StudentSignIn{
    token: string,
    student_id : string
}

export async function signInStudent(req : {email : string, password : string}){
    const request = await api.post<apiCall<StudentSignIn>>(`/students/signin/`, req)
    if(request.data.error !== null){
        throw Error(request.data.error.error_message)
    }
    return request.data.success
}
