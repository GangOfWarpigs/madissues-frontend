import api, {apiCall} from "./client.ts";


interface OrganizationReadModel{
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
