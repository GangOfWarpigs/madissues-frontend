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
export interface StudentSign{
    token: string,
    student_id : string
}

export async function signInStudent(req : {email : string, password : string}){
    const request = await api.post<apiCall<StudentSign>>(`/students/signin/`, req)
    if(request.data.error !== null){
        throw Error(request.data.error.error_message)
    }
    return request.data.success
}

export async function signUpStudent(req : { organization_id: string, first_name: string, last_name:string, phone_number:string,
    started_studies_date:string, email : string, password : string, verify_password: string, degreeId: string}) {
    console.log(req.organization_id)
    console.log(req.first_name)
    console.log(req.last_name)
    console.log(req.phone_number)
    console.log(req.email)
    console.log(req.started_studies_date)
    console.log(req.verify_password)
    console.log(req.password)
    console.log(req.degreeId)


    const request = await api.post<apiCall<StudentSign>>(`/students/signup/`, req)
    if (request.data.error !== null){
        throw Error(request.data.error.error_message)
    }
    return request.data.success
}