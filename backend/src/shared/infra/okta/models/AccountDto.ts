import { User } from '@okta/okta-sdk-nodejs';
import {UserStatus} from '@okta/okta-sdk-nodejs';

namespace oktaModels{
    export class OktaAccount extends User{
        public groups: string[]=[]
    }
}

export {
    oktaModels,
    UserStatus
}

