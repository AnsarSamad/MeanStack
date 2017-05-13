import { Member } from './member'
export abstract class ComponentAction {
    public static member: Member
    constructor() {

    }
    setMember(member: Member) {
        ComponentAction.member = member;
    }
    getMember() {
        if (ComponentAction.member == null || typeof ComponentAction.member == 'undefined' ) {
            return new Member("", "false", "");
        } else {
            return ComponentAction.member;
        }

    }

}