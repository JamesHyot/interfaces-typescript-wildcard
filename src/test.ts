import { Room } from "chat/admin/room"
import { RoomState } from "chat/admin/roomState"

export function Test() {
    const foo : Room = {
        id: '',
        name: '',
        audienceId: '',
        lastEditionDate: '',
        admins: [
            {id: 'abcd', fullname: 'Foo Bar', state: {
                name: 'Far West',
                zipCode: 123456
            }},
            {id: 'abcdef', fullname: 'Foo Bar', state: {
                name: 'Short East',
                zipCode: 987654
            }}
        ],
        lastEditorId: '',
        mediaShort: '',
        audienceName: '',
        lastEditorFullname: '',
        nbJoined: 0,
        nbTargeted: 0,
        state: RoomState.Active, 
        creator: {id: 'abcd', fullname: 'Foo Bar', state: {
            name: 'Far West',
            zipCode: 123456
        }},
    }
    
    return foo.creator.state.zipCode
}
