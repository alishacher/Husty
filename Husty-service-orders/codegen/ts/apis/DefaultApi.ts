/* tslint:disable */
/* eslint-disable */
/**
 * Agent service
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.0.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import {
    AddAgent,
    AddAgentFromJSON,
    AddAgentToJSON,
    AgentsList,
    AgentsListFromJSON,
    AgentsListToJSON,
    ErrorResponse,
    ErrorResponseFromJSON,
    ErrorResponseToJSON,
    InfoAgent,
    InfoAgentFromJSON,
    InfoAgentToJSON,
} from '../models';

export interface AddAgentRequest {
    body: AddAgent;
}

export interface InfoAgentRequest {
    lastName: string;
    firstName?: string;
}

/**
 * no description
 */
export class DefaultApi extends runtime.BaseAPI {

    /**
     * Add new Agent
     */
    async addAgentRaw(requestParameters: AddAgentRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling addAgent.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/agent/add`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: AddAgentToJSON(requestParameters.body),
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Add new Agent
     */
    async addAgent(requestParameters: AddAgentRequest): Promise<void> {
        await this.addAgentRaw(requestParameters);
    }

    /**
     * information about agent
     */
    async infoAgentRaw(requestParameters: InfoAgentRequest): Promise<runtime.ApiResponse<InfoAgent>> {
        if (requestParameters.lastName === null || requestParameters.lastName === undefined) {
            throw new runtime.RequiredError('lastName','Required parameter requestParameters.lastName was null or undefined when calling infoAgent.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.firstName !== undefined) {
            queryParameters['firstName'] = requestParameters.firstName;
        }

        if (requestParameters.lastName !== undefined) {
            queryParameters['lastName'] = requestParameters.lastName;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/agent/info`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => InfoAgentFromJSON(jsonValue));
    }

    /**
     * information about agent
     */
    async infoAgent(requestParameters: InfoAgentRequest): Promise<InfoAgent> {
        const response = await this.infoAgentRaw(requestParameters);
        return await response.value();
    }

    /**
     * List of agents on server
     */
    async listAgentsRaw(): Promise<runtime.ApiResponse<Array<AgentsList>>> {
        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/agent/list`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(AgentsListFromJSON));
    }

    /**
     * List of agents on server
     */
    async listAgents(): Promise<Array<AgentsList>> {
        const response = await this.listAgentsRaw();
        return await response.value();
    }

}
