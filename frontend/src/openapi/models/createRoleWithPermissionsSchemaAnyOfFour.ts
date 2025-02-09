/**
 * Generated by Orval
 * Do not edit manually.
 * See `gen:api` script in package.json
 */
import type { CreateRoleWithPermissionsSchemaAnyOfFourType } from './createRoleWithPermissionsSchemaAnyOfFourType';
import type { CreateRoleWithPermissionsSchemaAnyOfFourPermissionsItem } from './createRoleWithPermissionsSchemaAnyOfFourPermissionsItem';

export type CreateRoleWithPermissionsSchemaAnyOfFour = {
    /** The name of the custom role */
    name: string;
    /** A more detailed description of the custom role and what use it's intended for */
    description?: string;
    /** [Custom project roles](https://docs.getunleash.io/reference/rbac#custom-project-roles) contain a specific set of permissions for project resources. */
    type?: CreateRoleWithPermissionsSchemaAnyOfFourType;
    /** A list of permissions assigned to this role */
    permissions?: CreateRoleWithPermissionsSchemaAnyOfFourPermissionsItem[];
};
