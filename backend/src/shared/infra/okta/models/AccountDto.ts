import { User } from '@okta/okta-sdk-nodejs';
import {UserStatus} from '@okta/okta-sdk-nodejs';

namespace okta{
    export class OktaAccount extends User{
        public groups: string[]=[]
    }

}

export {
    okta,
    UserStatus
}

