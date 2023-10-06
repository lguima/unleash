/**
 * Generated by Orval
 * Do not edit manually.
 * See `gen:api` script in package.json
 */
import type { ChangeRequestOneOrManyCreateSchemaOneOfSixAction } from './changeRequestOneOrManyCreateSchemaOneOfSixAction';
import type { ChangeRequestOneOrManyCreateSchemaOneOfSixPayload } from './changeRequestOneOrManyCreateSchemaOneOfSixPayload';

/**
 * Update the enabled state for a feature.
 */
export type ChangeRequestOneOrManyCreateSchemaOneOfSix = {
    /** The name of the feature that this change applies to. */
    feature: string;
    /** The name of this action. */
    action: ChangeRequestOneOrManyCreateSchemaOneOfSixAction;
    payload: ChangeRequestOneOrManyCreateSchemaOneOfSixPayload;
};