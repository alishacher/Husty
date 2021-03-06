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

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface InfoAgent
 */
export interface InfoAgent {
    /**
     * 
     * @type {string}
     * @memberof InfoAgent
     */
    firstName?: string;
    /**
     * 
     * @type {string}
     * @memberof InfoAgent
     */
    lastName: string;
    /**
     * 
     * @type {number}
     * @memberof InfoAgent
     */
    sold?: number;
}

export function InfoAgentFromJSON(json: any): InfoAgent {
    return InfoAgentFromJSONTyped(json, false);
}

export function InfoAgentFromJSONTyped(json: any, ignoreDiscriminator: boolean): InfoAgent {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'firstName': !exists(json, 'FirstName') ? undefined : json['FirstName'],
        'lastName': json['LastName'],
        'sold': !exists(json, 'Sold') ? undefined : json['Sold'],
    };
}

export function InfoAgentToJSON(value?: InfoAgent | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'FirstName': value.firstName,
        'LastName': value.lastName,
        'Sold': value.sold,
    };
}


