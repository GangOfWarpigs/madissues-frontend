import api, { apiCall } from "./client.ts";

export interface IssueCreateRequest {
    title: string,
    description: string,
    details: string,
    proofs: [],
    course: string,
    teachers: string[],
    organization_id: string
}
export async function createIssue(req: IssueCreateRequest) {
    const request = await api.post<apiCall<IssueCreateRequest>>("/issues/", req);
    if (request.data.error !== null) throw Error(request.data.error.error_message)
    return request.data.success as IssueCreateRequest;
}

export interface IssueComment {
    issue_id: string,
    author: string,
    likes: string[],
    content: string,
    date_time: string,
    respose_to: string
}
export async function getIssueComments(id: string) {
    const request = await api.get<apiCall<IssueComment[]>>(`/issues/${id}/issue_comments/`);
    if (request.data.error !== null) throw Error(request.data.error.error_message);
    console.log(request.data.success as IssueComment[]);
    return request.data.success as IssueComment[];
}