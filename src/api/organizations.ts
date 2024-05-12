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
export const getOrganizationById = async function (organizationId : string) {
    const response = await api.get<apiCall<OrganizationReadModel>>("/organizations/" + organizationId);
    if (response.data.error) {
        throw Error(response.data.error.error_message);
    }
    return response.data.success
};

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

export interface Degree{
    id: string,
    name : string
}
export async function getOrganizationDegrees(id: string){
    const request = await api.get<apiCall<Degree[]>>(`/organizations/${id}/degrees`)
    if(request.data.error !== null){
        throw Error(request.data.error.error_message)
    }
    console.log(request.data.success as Degree[])
    return request.data.success as Degree[];
}

export interface Course {
    id: string,
    name: string,
    code: string,
    year: number,
    icon: string,
    primary_color: string,
    secondary_color: string
}
export async function getOrganizationCourses(id: string) {
    const request = await api.get<apiCall<Course[]>>(`/organizations/${id}/courses`);
    if (request.data.error !== null) throw Error(request.data.error.error_message)
    console.log(request.data.success as Course[]);
    return request.data.success as Course[];
}

export async function getOrganizationElement(id: string, name : string): Promise<{name: string, id: string}[]> {
    const request = await api.get<apiCall<{name: string, id: string}[]>>(`/organizations/${id}/${name}`);
    if (request.data.error !== null) throw Error(request.data.error.error_message)
    console.log(request.data.success as {name: string, id: string}[]);
    return request.data.success as {name: string, id: string}[];
}

export interface Issue {
    id: string,
    title: string,
    description: string,
    details: string,
    proofs: string[],
    status: string,
    date_time: string,
    course: string,
    teachers: string[],
    student_id: string,
    student: {
        name: string,
        year: string
    }
}
export async function getOrganizationIssues(id: string) {
    const request = await api.get<apiCall<Issue[]>>(`/organizations/${id}/issues/`);
    if (request.data.error !== null) throw Error(request.data.error.error_message);
    console.log(request.data.success as Issue[])
    return request.data.success as Issue[];
}