import { Message } from "./message.model"

export class Task {
    id: any
    created_at: any
    updated_at: any
    name: any
    assigner_id: any
    assignee_id: any
    status: any
    closing_date: any
    sprint_id: any
    effort: any
    priority: any
    start_date: any
    end_date: any
    message_list: Message[] = []
}