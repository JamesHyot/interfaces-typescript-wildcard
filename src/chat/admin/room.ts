
import { User } from 'users/user'
import { RoomState } from './roomState'

export interface Room {
	id: string
	name: string
	state: RoomState
	audienceId: string | null
	audienceName: string
	lastEditorId: string
	lastEditionDate: string
	lastEditorFullname: string
	mediaShort: string
	nbJoined: number
	nbTargeted: number
	admins: User[],
	creator: User
}